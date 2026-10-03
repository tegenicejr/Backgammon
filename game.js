/**
 * バックギャモン ゲームロジック・CPUルーチン・UI操作
 */
class BackgammonGame {
  constructor() {
    this.points = Array(25).fill(null).map(() => ({ count: 0, color: null }));
    this.bar = { white: 0, black: 0 };
    this.bornOff = { white: 0, black: 0 };
    this.turn = 'white';
    this.dice = [];
    this.usedDice = [];
    this.selectedPoint = null; // 'bar' or point index 1-24
    this.validMoves = [];
    this.mode = 'single'; // 'single' or 'passPlay'
    this.difficulty = 'easy';
    this.isCPU = false;
    this.settings = window.storageManager.getSettings();
    this.achievements = window.storageManager.getAchievements();

    this.initDOM();
    this.applySettings();
    this.bindEvents();
    this.checkResume();
  }

  initDOM() {
    // 盤面ポイントのDOM生成 (1〜24)
    // 構成: 上段: 13-18 (左), 19-24 (右) | 下段: 12-7 (左), 6-1 (右)
    const createPoints = (containerId, indices) => {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      indices.forEach(idx => {
        const pt = document.createElement('div');
        pt.className = `point color-${idx % 2 === 0 ? 'dark' : 'red'}`;
        pt.dataset.point = idx;
        const tri = document.createElement('div');
        tri.className = 'point-triangle';
        const chk = document.createElement('div');
        chk.className = 'checkers-container';
        pt.appendChild(tri);
        pt.appendChild(chk);
        container.appendChild(pt);
      });
    };

    createPoints('row-top-left', [13, 14, 15, 16, 17, 18]);
    createPoints('row-top-right', [19, 20, 21, 22, 23, 24]);
    createPoints('row-bottom-left', [12, 11, 10, 9, 8, 7]);
    createPoints('row-bottom-right', [6, 5, 4, 3, 2, 1]);
  }

  applySettings() {
    const s = this.settings;
    window.soundEngine.enabled = s.sound;
    document.documentElement.style.setProperty('--anim-speed', s.fastAnim ? '0.35' : '1');
    this.applyI18N(s.lang);
  }

  applyI18N(lang) {
    const t = I18N[lang] || I18N.ja;
    document.getElementById('lbl-back-clubhouse').textContent = t.backClubhouse;
    document.getElementById('lbl-title').textContent = t.title;
    document.getElementById('lbl-subtitle').textContent = t.subtitle;
    document.getElementById('btn-start').textContent = t.start;
    document.getElementById('btn-resume').textContent = t.resume;
    document.getElementById('btn-rules').textContent = t.howToPlay;
    document.getElementById('btn-stats').textContent = t.stats;
    document.getElementById('btn-settings').textContent = t.settings;
    document.getElementById('lbl-mode').textContent = t.mode;
    document.getElementById('lbl-single').textContent = t.single;
    document.getElementById('lbl-passplay').textContent = t.passPlay;
    document.getElementById('lbl-diff').textContent = t.difficulty;
    document.getElementById('lbl-diff-easy').textContent = t.easy;
    document.getElementById('lbl-diff-norm').textContent = t.normal;
    document.getElementById('lbl-diff-hard').textContent = t.hard;
    document.getElementById('btn-roll').textContent = t.rollDice;
    document.getElementById('lbl-hud-white').textContent = t.white;
    document.getElementById('lbl-hud-black').textContent = t.black;
    document.getElementById('btn-giveup').textContent = t.giveUp;
  }

  bindEvents() {
    // モード切替
    document.querySelectorAll('#mode-selector .seg-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#mode-selector .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.mode;
        document.getElementById('diff-row').style.display = this.mode === 'single' ? 'flex' : 'none';
      });
    });

    // 難易度切替
    document.querySelectorAll('#diff-selector .seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#diff-selector .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.difficulty = btn.dataset.diff;
      });
    });

    // スタート＆レジューム
    document.getElementById('btn-start').addEventListener('click', () => {
      window.soundEngine.init();
      this.startNewGame();
    });
    document.getElementById('btn-resume').addEventListener('click', () => {
      window.soundEngine.init();
      this.resumeGame();
    });

    // ダイスロール
    document.getElementById('btn-roll').addEventListener('click', () => {
      this.handleRollButton();
    });

    // ポイントタップ
    document.getElementById('board').addEventListener('click', (e) => {
      const ptEl = e.target.closest('.point');
      const barEl = e.target.closest('.bar-slot');
      const bearEl = e.target.closest('.bearoff-slot');

      if (ptEl) {
        this.handlePointClick(parseInt(ptEl.dataset.point, 10));
      } else if (barEl) {
        if (barEl.id === `bar-${this.turn}`) {
          this.handleBarClick();
        }
      } else if (bearEl) {
        if (bearEl.id === `bearoff-${this.turn}`) {
          this.handleBearoffClick();
        }
      }
    });

    // モーダルイベント
    this.setupModalEvents();
  }

  setupModalEvents() {
    const bindModal = (btnId, modalId) => {
      const btn = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      if (btn && modal) {
        btn.addEventListener('click', () => modal.classList.add('active'));
      }
    };

    bindModal('btn-rules', 'modal-rules');
    bindModal('btn-stats', 'modal-stats');
    bindModal('btn-settings', 'modal-settings');

    document.querySelectorAll('.modal-close-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.target.closest('.modal-overlay').classList.remove('active');
      });
    });

    document.getElementById('btn-to-title').addEventListener('click', () => {
      const t = I18N[this.settings.lang];
      if (confirm(t.confirmTitle)) {
        this.saveCurrentState();
        this.showScreen('start-screen');
        this.checkResume();
      }
    });

    document.getElementById('btn-giveup').addEventListener('click', () => {
      const t = I18N[this.settings.lang];
      if (confirm(t.giveUp + "?")) {
        const winner = this.turn === 'white' ? 'black' : 'white';
        this.endGame(winner, 'resign');
      }
    });

    // 設定反映
    document.querySelectorAll('#set-lang-selector .seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#set-lang-selector .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.settings.lang = btn.dataset.val;
        window.storageManager.saveSettings(this.settings);
        this.applySettings();
      });
    });

    const chkSound = document.getElementById('chk-sound');
    chkSound.checked = this.settings.sound;
    chkSound.addEventListener('change', () => {
      this.settings.sound = chkSound.checked;
      window.soundEngine.enabled = chkSound.checked;
      window.storageManager.saveSettings(this.settings);
    });

    const chkHaptic = document.getElementById('chk-haptics');
    chkHaptic.checked = this.settings.haptics;
    chkHaptic.addEventListener('change', () => {
      this.settings.haptics = chkHaptic.checked;
      window.storageManager.saveSettings(this.settings);
    });

    const chkFast = document.getElementById('chk-fast');
    chkFast.checked = this.settings.fastAnim;
    chkFast.addEventListener('change', () => {
      this.settings.fastAnim = chkFast.checked;
      window.storageManager.saveSettings(this.settings);
      this.applySettings();
    });

    document.getElementById('btn-clear-data').addEventListener('click', () => {
      if (confirm("Reset all settings and achievements?")) {
        window.storageManager.clearAll();
        location.reload();
      }
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      document.getElementById('modal-result').classList.remove('active');
      this.startNewGame();
    });

    document.getElementById('btn-share-x').addEventListener('click', () => {
      const t = I18N[this.settings.lang];
      const text = encodeURIComponent(t.shareText);
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    });
  }

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }

  checkResume() {
    const saved = window.storageManager.getGameState();
    const btn = document.getElementById('btn-resume');
    btn.style.display = saved ? 'block' : 'none';
  }

  startNewGame() {
    this.setupInitialBoard();
    this.showScreen('game-screen');
    this.renderBoard();
    this.runOpeningRoll();
  }

  resumeGame() {
    const s = window.storageManager.getGameState();
    if (!s) return;
    this.points = s.points;
    this.bar = s.bar;
    this.bornOff = s.bornOff;
    this.turn = s.turn;
    this.dice = s.dice;
    this.usedDice = s.usedDice;
    this.mode = s.mode;
    this.difficulty = s.difficulty;
    this.showScreen('game-screen');
    this.renderBoard();
    this.renderDice();
    this.updateStatus();
    this.evaluateTurnAction();
  }

  setupInitialBoard() {
    this.points = Array(25).fill(null).map(() => ({ count: 0, color: null }));
    this.bar = { white: 0, black: 0 };
    this.bornOff = { white: 0, black: 0 };

    // 公式初期配置
    // 白の進行: 24 -> 1
    // 黒の進行: 1 -> 24
    this.points[24] = { count: 2, color: 'white' };
    this.points[13] = { count: 5, color: 'white' };
    this.points[8]  = { count: 3, color: 'white' };
    this.points[6]  = { count: 5, color: 'white' };

    this.points[1]  = { count: 2, color: 'black' };
    this.points[12] = { count: 5, color: 'black' };
    this.points[17] = { count: 3, color: 'black' };
    this.points[19] = { count: 5, color: 'black' };
  }

  // ================= オープニングロール（手番決定演出） =================
  async runOpeningRoll() {
    const modal = document.getElementById('modal-opening');
    const dW = document.getElementById('op-dice-white');
    const dB = document.getElementById('op-dice-black');
    const resText = document.getElementById('opening-result-text');
    const btnSkip = document.getElementById('btn-skip-opening');

    modal.classList.add('active');
    resText.textContent = '';
    dW.classList.add('rolling-anim');
    dB.classList.add('rolling-anim');

    let skipped = false;
    const skipPromise = new Promise(resolve => {
      btnSkip.onclick = () => { skipped = true; resolve(); };
    });

    window.soundEngine.playDiceShake();

    const waitAnim = new Promise(resolve => setTimeout(resolve, this.settings.fastAnim ? 400 : 1400));
    await Promise.race([skipPromise, waitAnim]);

    let rollW = Math.floor(Math.random() * 6) + 1;
    let rollB = Math.floor(Math.random() * 6) + 1;
    while (rollW === rollB) {
      rollB = Math.floor(Math.random() * 6) + 1;
    }

    dW.classList.remove('rolling-anim');
    dB.classList.remove('rolling-anim');
    this.renderDieSVG(dW, rollW);
    this.renderDieSVG(dB, rollB);

    const winner = rollW > rollB ? 'white' : 'black';
    const t = I18N[this.settings.lang];
    resText.textContent = `${winner === 'white' ? t.white : t.black} wins! (${rollW} - ${rollB})`;

    await new Promise(r => setTimeout(r, skipped ? 100 : (this.settings.fastAnim ? 500 : 1200)));
    modal.classList.remove('active');

    // オープニングルール: 出た2つの目をそのまま先攻の最初の移動に使う
    this.turn = winner;
    this.dice = [rollW, rollB];
    this.usedDice = [];
    this.renderDice();
    this.updateStatus();
    this.saveCurrentState();
    this.evaluateTurnAction();
  }

  renderDieSVG(el, val) {
    el.innerHTML = '';
    const dotsMap = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8]
    };
    const active = dotsMap[val] || [];
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      if (active.includes(i)) {
        const dot = document.createElement('div');
        dot.className = 'pip-dot';
        cell.appendChild(dot);
      }
      el.appendChild(cell);
    }
  }

  // ================= ダイス・手番制御 =================
  handleRollButton() {
    window.soundEngine.playDiceShake();
    this.vibrate(30);
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    if (d1 === d2) {
      this.dice = [d1, d1, d1, d1]; // ゾロ目は4回
    } else {
      this.dice = [d1, d2];
    }
    this.usedDice = [];
    document.getElementById('btn-roll').disabled = true;
    this.renderDice();
    this.evaluateTurnAction();
  }

  renderDice() {
    const leftZ = document.getElementById('dice-zone-left');
    const rightZ = document.getElementById('dice-zone-right');
    leftZ.innerHTML = '';
    rightZ.innerHTML = '';

    const targetZ = this.turn === 'white' ? rightZ : leftZ;
    this.dice.forEach((val, idx) => {
      const dieEl = document.createElement('div');
      dieEl.className = `dice ${this.turn === 'black' ? 'black-die' : ''}`;
      if (this.usedDice.includes(idx)) {
        dieEl.classList.add('used');
      }
      this.renderDieSVG(dieEl, val);
      targetZ.appendChild(dieEl);
    });
  }

  evaluateTurnAction() {
    const available = this.getAvailableDice();
    if (available.length === 0) {
      this.switchTurn();
      return;
    }

    const moves = this.findAllLegalMoves();
    if (moves.length === 0) {
      setTimeout(() => {
        alert(I18N[this.settings.lang].turn + ": No valid moves!");
        this.switchTurn();
      }, 600);
      return;
    }

    if (this.mode === 'single' && this.turn === 'black') {
      this.runCPUTurn();
    } else {
      this.highlightSelectableCheckers();
    }
  }

  getAvailableDice() {
    const avail = [];
    this.dice.forEach((val, idx) => {
      if (!this.usedDice.includes(idx)) avail.push({ val, idx });
    });
    return avail;
  }

  // ================= 着手判定＆移動ロジック =================
  findAllLegalMoves() {
    const moves = [];
    const color = this.turn;
    const avail = this.getAvailableDice();
    const uniqueValues = [...new Set(avail.map(d => d.val))];

    // バーに駒がある場合はバーからの脱出のみが合法手
    if (this.bar[color] > 0) {
      uniqueValues.forEach(dieVal => {
        const dest = color === 'white' ? 25 - dieVal : dieVal;
        if (this.isPointOpenFor(dest, color)) {
          moves.push({ from: 'bar', to: dest, dieVal });
        }
      });
      return moves;
    }

    // 盤面上の全駒から検証
    for (let i = 1; i <= 24; i++) {
      if (this.points[i].color === color && this.points[i].count > 0) {
        uniqueValues.forEach(dieVal => {
          const dest = color === 'white' ? i - dieVal : i + dieVal;
          if (dest >= 1 && dest <= 24) {
            if (this.isPointOpenFor(dest, color)) {
              moves.push({ from: i, to: dest, dieVal });
            }
          } else if (this.canBearOff(color)) {
            // ベアオフ判定
            if (color === 'white' && dest <= 0) {
              if (dest === 0 || this.isFurthestPoint(i, color)) {
                moves.push({ from: i, to: 'bearoff', dieVal });
              }
            } else if (color === 'black' && dest >= 25) {
              if (dest === 25 || this.isFurthestPoint(i, color)) {
                moves.push({ from: i, to: 'bearoff', dieVal });
              }
            }
          }
        });
      }
    }
    return moves;
  }

  isPointOpenFor(pointIdx, color) {
    const target = this.points[pointIdx];
    if (!target.color || target.color === color) return true;
    return target.count === 1; // 相手が1個（ブロット）ならヒット可能
  }

  canBearOff(color) {
    if (this.bar[color] > 0) return false;
    let sumOutside = 0;
    if (color === 'white') {
      for (let i = 7; i <= 24; i++) {
        if (this.points[i].color === 'white') sumOutside += this.points[i].count;
      }
    } else {
      for (let i = 1; i <= 18; i++) {
        if (this.points[i].color === 'black') sumOutside += this.points[i].count;
      }
    }
    return sumOutside === 0;
  }

  isFurthestPoint(ptIdx, color) {
    if (color === 'white') {
      for (let i = 6; i > ptIdx; i--) {
        if (this.points[i].color === 'white' && this.points[i].count > 0) return false;
      }
    } else {
      for (let i = 19; i < ptIdx; i++) {
        if (this.points[i].color === 'black' && this.points[i].count > 0) return false;
      }
    }
    return true;
  }

  handlePointClick(idx) {
    if (this.mode === 'single' && this.turn === 'black') return;
    if (this.bar[this.turn] > 0) return; // バー最優先

    if (this.selectedPoint === null) {
      if (this.points[idx].color === this.turn && this.points[idx].count > 0) {
        this.selectOrigin(idx);
      }
    } else {
      const move = this.validMoves.find(m => m.to === idx);
      if (move) {
        this.executeMove(move);
      } else {
        this.clearSelection();
        if (this.points[idx].color === this.turn && this.points[idx].count > 0) {
          this.selectOrigin(idx);
        }
      }
    }
  }

  handleBarClick() {
    if (this.bar[this.turn] > 0) {
      this.selectOrigin('bar');
    }
  }

  handleBearoffClick() {
    if (this.selectedPoint !== null) {
      const move = this.validMoves.find(m => m.to === 'bearoff');
      if (move) {
        this.executeMove(move);
      }
    }
  }

  selectOrigin(from) {
    this.selectedPoint = from;
    const all = this.findAllLegalMoves();
    this.validMoves = all.filter(m => m.from === from);
    this.renderBoard();
  }

  clearSelection() {
    this.selectedPoint = null;
    this.validMoves = [];
    this.renderBoard();
  }

  executeMove(move) {
    const { from, to, dieVal } = move;
    const color = this.turn;
    const opp = color === 'white' ? 'black' : 'white';

    // 1. 移動元の減算
    if (from === 'bar') {
      this.bar[color]--;
    } else {
      this.points[from].count--;
      if (this.points[from].count === 0) this.points[from].color = null;
    }

    // 2. 移動先の加算・ヒット
    if (to === 'bearoff') {
      this.bornOff[color]++;
      window.soundEngine.playBearOff();
    } else {
      if (this.points[to].color === opp && this.points[to].count === 1) {
        // ヒット！
        this.points[to].count = 1;
        this.points[to].color = color;
        this.bar[opp]++;
        window.soundEngine.playHit();
        this.vibrate(60);
      } else {
        this.points[to].color = color;
        this.points[to].count++;
        window.soundEngine.playCheckerMove();
      }
    }

    // 3. 使用したダイスを消費
    const dieIndex = this.dice.findIndex((v, i) => v === dieVal && !this.usedDice.includes(i));
    if (dieIndex !== -1) this.usedDice.push(dieIndex);

    this.clearSelection();
    this.renderDice();
    this.renderBoard();
    this.updateStatus();
    this.saveCurrentState();

    // 勝利判定
    if (this.bornOff[color] === 15) {
      this.endGame(color, 'bearoff');
      return;
    }

    this.evaluateTurnAction();
  }

  // ================= CPU思考ルーチン =================
  async runCPUTurn() {
    const status = document.getElementById('turn-status');
    status.textContent = I18N[this.settings.lang].cpuThinking;

    await new Promise(r => setTimeout(r, this.settings.fastAnim ? 250 : 750));

    // ダイスが未振りの場合は振る
    if (this.dice.length === 0 || this.dice.length === this.usedDice.length) {
      this.handleRollButton();
      await new Promise(r => setTimeout(r, this.settings.fastAnim ? 250 : 700));
    }

    const moves = this.findAllLegalMoves();
    if (moves.length === 0) {
      this.switchTurn();
      return;
    }

    let chosenMove = moves[0];
    if (this.difficulty === 'normal' || this.difficulty === 'hard') {
      // ヒット優先
      const hitMove = moves.find(m => m.to !== 'bearoff' && this.points[m.to].color === 'white' && this.points[m.to].count === 1);
      if (hitMove) {
        chosenMove = hitMove;
      } else if (this.difficulty === 'hard') {
        // 安全手（ブロットを作らない手、ベアオフ優先）
        const safeMove = moves.find(m => m.to === 'bearoff' || this.points[m.to].count >= 1);
        if (safeMove) chosenMove = safeMove;
      }
    }

    this.executeMove(chosenMove);
  }

  switchTurn() {
    this.turn = this.turn === 'white' ? 'black' : 'white';
    this.dice = [];
    this.usedDice = [];
    this.selectedPoint = null;
    this.validMoves = [];
    this.renderDice();
    this.updateStatus();
    this.saveCurrentState();

    const rollBtn = document.getElementById('btn-roll');
    if (this.mode === 'single' && this.turn === 'black') {
      rollBtn.disabled = true;
      this.runCPUTurn();
    } else {
      rollBtn.disabled = false;
    }
  }

  highlightSelectableCheckers() {
    const moves = this.findAllLegalMoves();
    const origins = [...new Set(moves.map(m => m.from))];

    origins.forEach(from => {
      if (from === 'bar') {
        const barSlot = document.getElementById(`bar-${this.turn}`);
        if (barSlot) barSlot.classList.add('valid-target');
      } else {
        const ptEl = document.querySelector(`.point[data-point="${from}"]`);
        if (ptEl) {
          const topChecker = ptEl.querySelector('.checker:last-child');
          if (topChecker) topChecker.classList.add('selectable');
        }
      }
    });
  }

  // ================= 盤面レンダリング =================
  renderBoard() {
    // 1-24ポイントの描画
    for (let i = 1; i <= 24; i++) {
      const ptEl = document.querySelector(`.point[data-point="${i}"]`);
      if (!ptEl) continue;

      ptEl.classList.remove('valid-target');
      const container = ptEl.querySelector('.checkers-container');
      container.innerHTML = '';

      const ptData = this.points[i];
      if (ptData.count > 0) {
        for (let c = 0; c < ptData.count; c++) {
          const chk = document.createElement('div');
          chk.className = `checker ${ptData.color}`;
          if (c === ptData.count - 1 && ptData.count > 5) {
            chk.textContent = ptData.count; // 5個を超える場合は数字表示
          }
          container.appendChild(chk);
        }
      }

      // 到達可能先ハイライト
      if (this.validMoves.some(m => m.to === i)) {
        ptEl.classList.add('valid-target');
      }
    }

    // バーの描画
    ['white', 'black'].forEach(col => {
      const slot = document.getElementById(`bar-${col}`);
      slot.innerHTML = '';
      slot.classList.remove('valid-target');
      for (let i = 0; i < this.bar[col]; i++) {
        const chk = document.createElement('div');
        chk.className = `checker ${col}`;
        slot.appendChild(chk);
      }
    });

    // ベアオフトレイ
    ['white', 'black'].forEach(col => {
      const slot = document.getElementById(`bearoff-${col}`);
      slot.innerHTML = '';
      slot.classList.remove('valid-target');
      for (let i = 0; i < this.bornOff[col]; i++) {
        const chip = document.createElement('div');
        chip.className = `bearoff-chip ${col}`;
        slot.appendChild(chip);
      }
    });

    if (this.validMoves.some(m => m.to === 'bearoff')) {
      document.getElementById(`bearoff-${this.turn}`).classList.add('valid-target');
    }

    this.updatePipCounts();
  }

  updatePipCounts() {
    let whitePip = this.bar.white * 25;
    let blackPip = this.bar.black * 25;

    for (let i = 1; i <= 24; i++) {
      if (this.points[i].color === 'white') {
        whitePip += this.points[i].count * i;
      } else if (this.points[i].color === 'black') {
        blackPip += this.points[i].count * (25 - i);
      }
    }

    document.getElementById('white-pip').textContent = whitePip;
    document.getElementById('black-pip').textContent = blackPip;
  }

  updateStatus() {
    const t = I18N[this.settings.lang];
    const status = document.getElementById('turn-status');
    status.textContent = this.turn === 'white' ? t.whiteTurn : t.blackTurn;
  }

  saveCurrentState() {
    window.storageManager.saveGameState({
      points: this.points,
      bar: this.bar,
      bornOff: this.bornOff,
      turn: this.turn,
      dice: this.dice,
      usedDice: this.usedDice,
      mode: this.mode,
      difficulty: this.difficulty
    });
  }

  endGame(winner, reason) {
    window.soundEngine.playVictory();
    this.vibrate([100, 50, 150]);
    window.storageManager.clearGameState();

    const isWhite = winner === 'white';
    const t = I18N[this.settings.lang];

    // ギャモン / バックギャモン判定
    const loser = isWhite ? 'black' : 'white';
    let winType = "Single";
    if (this.bornOff[loser] === 0) {
      winType = this.bar[loser] > 0 || (loser === 'white' ? this.hasCheckersIn(19, 24, loser) : this.hasCheckersIn(1, 6, loser))
        ? "Backgammon"
        : "Gammon";
    }

    // 実績解除
    window.storageManager.unlockAchievement('firstWin');
    if (winType === 'Gammon') window.storageManager.unlockAchievement('gammonWin');
    if (winType === 'Backgammon') window.storageManager.unlockAchievement('backgammonWin');

    const modal = document.getElementById('modal-result');
    const winnerText = document.getElementById('result-winner-text');
    const subText = document.getElementById('result-sub-text');

    winnerText.textContent = (winner === 'white' ? t.white : t.black) + " " + t.victory;
    subText.textContent = `Type: ${winType} | Reason: ${reason}`;
    modal.classList.add('active');
  }

  hasCheckersIn(from, to, color) {
    for (let i = from; i <= to; i++) {
      if (this.points[i].color === color && this.points[i].count > 0) return true;
    }
    return false;
  }

  vibrate(pattern) {
    if (this.settings.haptics && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  }
}

// 起動
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new BackgammonGame();
});
