class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.noiseBuffer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.createNoiseBuffer();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 衝突瞬間の角の硬い接触音用ノイズバッファ
  createNoiseBuffer() {
    const bufferSize = this.ctx.sampleRate * 0.04;
    this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
  }

  /**
   * リアルな3Dダイス衝突音（アタックノイズ＋木枠共鳴）
   * @param {number} intensity - 衝撃の強さ (0.1 〜 1.0)
   * @param {number} pitchOffset - 個体差による音程ズレ
   */
  playDiceHit(intensity = 0.5, pitchOffset = 0) {
    if (!this.enabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(Math.min(intensity, 1.0), now);
    masterGain.connect(this.ctx.destination);

    // 1. 角の硬い衝突音（カチッ）
    if (this.noiseBuffer) {
      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = this.noiseBuffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2600 + pitchOffset * 60, now);
      noiseFilter.Q.setValueAtTime(3.2, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.35 * intensity, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);

      noiseSource.start(now);
      noiseSource.stop(now + 0.025);
    }

    // 2. 木枠・フェルトの共鳴音（コンッ）
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    const baseFreq = 210 + pitchOffset * 25 + (1 - intensity) * 70;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + 0.05);

    oscGain.gain.setValueAtTime(0.65 * intensity, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(oscGain);
    oscGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // 互換性維持用ダイスロール音
  playDiceRoll() {
    if (!this.enabled) return;
    this.playDiceHit(0.8, 0);
    setTimeout(() => this.playDiceHit(0.4, 0.5), 180);
    setTimeout(() => this.playDiceHit(0.2, -0.5), 320);
  }

  playCheckerTap() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  playCheckerHit() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.09);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);
      gain.gain.setValueAtTime(0.25, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.35);
    });
  }
}

const audio = new AudioManager();
