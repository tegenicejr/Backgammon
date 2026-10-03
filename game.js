/**
 * Backgammon - Games Clubhouse Implementation
 * Strict Master Prompt Compliance
 */

const I18N = {
  en: {
    portalLink: "‹ Back to Clubhouse",
    subtitle: "THE HERITAGE BOARD GAME",
    mode: "Game Mode",
    modeCpu: "vs CPU",
    modeLocal: "2 Players",
    difficulty: "Difficulty",
    diffEasy: "Easy",
    diffNormal: "Normal",
    diffHard: "Hard",
    resume: "Resume Game",
    start: "Play Game",
    howToPlay: "How to Play",
    records: "Records & Stats",
    backToTitle: "Title",
    cpuThinking: "CPU Thinking",
    roll: "Roll",
    initiativeTitle: "First Move Roll",
    initiativeDesc: "Both players roll one standard die. The higher roll moves first using both values. (Ties will be re-rolled).",
    youWhite: "White (You)",
    oppCpu: "Black (CPU)",
    oppPlayer: "Black (Player 2)",
    rollDice: "Roll Dice",
    startGame: "Start Game",
    whiteFirst: "White wins the roll and plays first!",
    blackFirst: "Black wins the roll and plays first!",
    tieRoll: "Tie! Re-rolling dice...",
    rule1Title: "1. Goal",
    rule1Desc: "Move all 15 checkers into your Home Board and bear them off before your opponent does.",
    rule2Title: "2. Movement & Blots",
    rule2Desc: "White moves toward point 1. An isolated checker is a blot; landing on it sends it to the central Bar.",
    rule3Title: "3. Doubles",
    rule3Desc: "Rolling matching numbers gives you 4 moves of that value instead of 2!",
    settings: "Settings",
    lang: "Language",
    sound: "Sound Effects",
    vibration: "Vibration",
    resetData: "Reset All Data",
    close: "Close",
    cancel: "Cancel",
    confirm: "OK",
    totalGames: "Total Matches:",
    whiteWins: "White Victories:",
    blackWins: "Black Victories:",
    confirmLeaveTitle: "Return to Title?",
    confirmLeaveDesc: "Your match progress will be saved automatically.",
    confirmResetTitle: "Reset Data?",
    confirmResetDesc: "Are you sure you want to reset all game data and stats? This cannot be undone.",
    whiteTurnText: "White's Turn",
    blackTurnText: "Black's Turn",
    winnerWhite: "White Wins!",
    winnerBlack: "Black Wins!"
  },
  ja: {
    portalLink: "‹ CLUB HOUSEに戻る",
    subtitle: "伝統と歴史の王道ボードゲーム",
    mode: "対戦モード",
    modeCpu: "vs CPU",
    modeLocal: "ふたりで遊ぶ",
    difficulty: "CPU難易度",
    diffEasy: "初級",
    diffNormal: "中級",
    diffHard: "上級",
    resume: "つづきから",
    start: "対局開始",
    howToPlay: "あそびかた",
    records: "戦績・やりこみ",
    backToTitle: "タイトルへ",
    cpuThinking: "CPU考え中",
    roll: "振る",
    initiativeTitle: "先攻・後攻の決定",
    initiativeDesc: "白と黒のサイコロを1個ずつ振ります。出目の大きい方が先攻となり、その2つの出目で初手を動かします。（同点は振り直し）",
    youWhite: "白（あなた）",
    oppCpu: "黒（CPU）",
    oppPlayer: "黒（プレイヤー2）",
    rollDice: "サイコロを振る",
    startGame: "対局開始",
    whiteFirst: "白の先攻です！この出目で開始します。",
    blackFirst: "黒の先攻です！この出目で開始します。",
    tieRoll: "同点です！もう一度振ります。",
    rule1Title: "1. 勝利条件",
    rule1Desc: "15個すべての駒を自分のインナーボードに集め、誰よりも早く盤外へベアオフ（ゴール）させれば勝利です。",
    rule2Title: "2. 移動とヒット（ブロット）",
    rule2Desc: "白は1番ポイントへ向かって前進します。1枚だけの駒（ブロット）の上に相手の駒が止まると、その駒は中央バーへ叩き出されます。",
    rule3Title: "3. ゾロ目（ダブルス）",
    rule3Desc: "同じ数字が2つ揃うと、その出目を通常の倍である「4回分」使用することができます！",
    settings: "設定",
    lang: "言語 (Language)",
    sound: "効果音",
    vibration: "振動",
    resetData: "全データ初期化",
    close: "とじる",
    cancel: "キャンセル",
    confirm: "確定",
    totalGames: "総対局数:",
    whiteWins: "白の勝利数:",
    blackWins: "黒の勝利数:",
    confirmLeaveTitle: "タイトルへ戻りますか？",
    confirmLeaveDesc: "進行状況は自動保存されます。",
    confirmResetTitle: "データ初期化",
    confirmResetDesc: "ハイスコアや戦績を完全に初期化しますか？この操作は取り消せません。",
    whiteTurnText: "白の手番",
    blackTurnText: "黒の手番",
    winnerWhite: "白の勝利！",
    winnerBlack: "黒の勝利！"
  }
};

class BackgammonGame {
  constructor() {
    this.settings = storage.getSettings();
    this.stats = storage.getStats();
    
    this.mode = 'cpu'; // 'cpu' | 'local'
    this.diff = 'easy'; // 'easy' | 'normal' | 'hard'
    
    this.points = new Array(24).fill(0);
    this.bar = { white: 0, black: 0 };
    this.bearOff = { white: 0, black: 0 };
    
    this.turn = 'white'; // 'white' | 'black'
    this.dice = [];
    this.availableMoves = [];
    this.selectedSource = null; // number | 'bar'
    
    this.isRolling = false;
    this.isCpuThinking = false;
    
    this.initDOM();
    this.applySettings();
    this.bindEvents();
    this.checkResume();
  }

  initDOM() {
    this.dom = {
      titleScreen: document.getElementById('title-screen'),
      gameView: document.getElementById('game-view'),
      startBtn: document.getElementById('start-btn'),
      resumeBtn: document.getElementById('resume-btn'),
      rulesBtn: document.getElementById('rules-btn'),
      statsBtn: document.getElementById('stats-btn'),
      titleSettingsBtn: document.getElementById('title-settings-btn'),
      modeSeg: document.getElementById('mode-seg'),
      diffSeg: document.getElementById('diff-seg'),
      difficultyRow: document.getElementById('difficulty-row'),
      headerBackBtn: document.getElementById('header-back-btn'),
      audioToggleBtn: document.getElementById('audio-toggle-btn'),
      rollActionBtn: document.getElementById('roll-action-btn'),
      diceDisplay: document.getElementById('dice-display'),
      turnText: document.getElementById('turn-text'),
      opponentNameLabel: document.getElementById('opponent-name-label'),
      myNameLabel: document.getElementById('my-name-label'),
      whitePip: document.getElementById('white-pip'),
      blackPip: document.getElementById('black-pip'),
      thinkingIndicator: document.getElementById('thinking-indicator'),
      
      // Points containers
      quadOuterTop: document.getElementById('quad-outer-top'),
      quadOuterBottom: document.getElementById('quad-outer-bottom'),
      quadInnerTop: document.getElementById('quad-inner-top'),
      quadInnerBottom: document.getElementById('quad-inner-bottom'),
      barWhite: document.getElementById('bar-white'),
      barBlack: document.getElementById('bar-black'),
      bearoffWhite: document.getElementById('bearoff-white'),
      bearoffBlack: document.getElementById('bearoff-black'),
      
      // Modals
      initiativeModal: document.getElementById('initiative-modal'),
      initDiceWhite: document.getElementById('init-dice-white'),
      initDiceBlack: document.getElementById('init-dice-black'),
      initResultText: document.getElementById('init-result-text'),
      initActionBtn: document.getElementById('init-action-btn'),
      initOppLabel: document.getElementById('init-opp-label'),
      rulesModal: document.getElementById('rules-modal'),
      rulesCloseBtn: document.getElementById('rules-close-btn'),
      settingsModal: document.getElementById('settings-modal'),
      settingsCloseBtn: document.getElementById('settings-close-btn'),
      statsModal: document.getElementById('stats-modal'),
      statsCloseBtn: document.getElementById('stats-close-btn'),
      confirmModal: document.getElementById('confirm-modal'),
      confirmTitle: document.getElementById('confirm-title'),
      confirmMsg: document.getElementById('confirm-msg'),
      confirmOkBtn: document.getElementById('confirm-ok-btn'),
      confirmCancelBtn: document.getElementById('confirm-cancel-btn')
    };

    this.renderBoardSkeleton();
  }

  renderBoardSkeleton() {
    const createPt = (idx, isTop) => {
      const pt = document.createElement('div');
      pt.className = `point ${isTop ? 'point-top' : 'point-bottom'} ${idx % 2 === 0 ? 'pt-dark' : 'pt-light'}`;
      pt.dataset.point = idx;
      const stack = document.createElement('div');
      stack.className = 'checker-stack';
      pt.appendChild(stack);
      return pt;
    };

    for (let i = 12; i <= 17; i++) {
      this.dom.quadOuterTop.appendChild(createPt(i, true));
    }
    for (let i = 18; i <= 23; i++) {
      this.dom.quadInnerTop.appendChild(createPt(i, true));
    }
    for (let i = 11; i >= 6; i--) {
      this.dom.quadOuterBottom.appendChild(createPt(i, false));
    }
    for (let i = 5; i >= 0; i--) {
      this.dom.quadInnerBottom.appendChild(createPt(i, false));
    }
  }

  applySettings() {
    audio.enabled = this.settings.sound;
    this.dom.audioToggleBtn.textContent = this.settings.sound ? '🔊' : '🔇';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[this.settings.lang] && I18N[this.settings.lang][key]) {
        el.textContent = I18N[this.settings.lang][key];
      }
    });

    const langSeg = document.getElementById('lang-seg');
    if (langSeg) {
      langSeg.querySelectorAll('.seg-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === this.settings.lang);
      });
    }

    const soundTgl = document.getElementById('sound-toggle');
    if (soundTgl) soundTgl.classList.toggle('on', this.settings.sound);

    const vibeTgl = document.getElementById('vibe-toggle');
    if (vibeTgl) vibeTgl.classList.toggle('on', this.settings.haptics);

    this.updateControls();
  }

  vibrate(ms = 30) {
    if (this.settings.haptics && navigator.vibrate) {
      try { navigator.vibrate(ms); } catch (_) {}
    }
  }

  bindEvents() {
    this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.val;
        this.dom.difficultyRow.style.display = this.mode === 'cpu' ? 'flex' : 'none';
        this.vibrate(15);
      });
    });

    this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.diff = btn.dataset.val;
        this.vibrate(15);
      });
    });

    this.dom.startBtn.addEventListener('click', () => this.startNewMatchFlow());
    this.dom.resumeBtn.addEventListener('click', () => this.resumeSavedGame());
    
    this.dom.rulesBtn.addEventListener('click', () => this.openOverlay(this.dom.rulesModal));
    this.dom.rulesCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.rulesModal));
    this.dom.statsBtn.addEventListener('click', () => this.showStats());
    this.dom.statsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.statsModal));
    this.dom.titleSettingsBtn.addEventListener('click', () => this.openOverlay(this.dom.settingsModal));
    this.dom.settingsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.settingsModal));
    
    this.dom.headerBackBtn.addEventListener('click', () => {
      const curLang = I18N[this.settings.lang];
      this.confirmDialog(curLang.confirmLeaveTitle, curLang.confirmLeaveDesc, () => {
        this.saveGameState();
        this.dom.titleScreen.classList.remove('hidden');
        this.checkResume();
      });
    });

    this.dom.audioToggleBtn.addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    this.dom.rollActionBtn.addEventListener('click', () => this.handleRollBtnClick());

    document.getElementById('lang-seg').querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.settings.lang = btn.dataset.lang;
        storage.saveSettings(this.settings);
        this.applySettings();
        this.vibrate(15);
      });
    });

    document.getElementById('sound-toggle').addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    document.getElementById('vibe-toggle').addEventListener('click', () => {
      this.settings.haptics = !this.settings.haptics;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    document.getElementById('reset-data-btn').addEventListener('click', () => {
      const curLang = I18N[this.settings.lang];
      this.confirmDialog(curLang.confirmResetTitle, curLang.confirmResetDesc, () => {
        storage.clearAllData();
        this.settings = storage.getSettings();
        this.stats = storage.getStats();
        this.applySettings();
        this.checkResume();
        this.closeOverlay(this.dom.settingsModal);
      });
    });

    this.dom.gameView.addEventListener('click', (e) => this.handleBoardInteraction(e));
  }

  openOverlay(el) {
    el.classList.remove('hidden');
    this.vibrate(15);
  }

  closeOverlay(el) {
    el.classList.add('hidden');
    this.vibrate(15);
  }

  confirmDialog(title, desc, onOk) {
    this.dom.confirmTitle.textContent = title;
    this.dom.confirmMsg.textContent = desc;
    this.openOverlay(this.dom.confirmModal);
    
    const cleanup = () => {
      this.dom.confirmOkBtn.onclick = null;
      this.dom.confirmCancelBtn.onclick = null;
      this.closeOverlay(this.dom.confirmModal);
    };

    this.dom.confirmOkBtn.onclick = () => {
      cleanup();
      onOk();
    };
    this.dom.confirmCancelBtn.onclick = () => cleanup();
  }

  checkResume() {
    const saved = storage.getSaveState();
    if (saved && saved.points) {
      this.dom.resumeBtn.style.display = 'block';
    } else {
      this.dom.resumeBtn.style.display = 'none';
    }
  }

  showStats() {
    this.stats = storage.getStats();
    document.getElementById('stat-total').textContent = this.stats.gamesPlayed;
    document.getElementById('stat-white').textContent = this.stats.whiteWins;
    document.getElementById('stat-black').textContent = this.stats.blackWins;
    document.getElementById('stat-gammon').textContent = this.stats.gammons;
    document.getElementById('stat-bg').textContent = this.stats.backgammons;
    this.openOverlay(this.dom.statsModal);
  }

  createDiceElement(val, isUsed = false) {
    const dice = document.createElement('div');
    dice.className = `dice dice-${val} ${isUsed ? 'used' : ''}`;
    if (val === 1) {
      const p = document.createElement('div');
      p.className = 'pip pip-1';
      dice.appendChild(p);
    } else {
      for (let i = 1; i <= val; i++) {
        const p = document.createElement('div');
        p.className = `pip p${i}`;
        dice.appendChild(p);
      }
    }
    return dice;
  }

  startNewMatchFlow() {
    this.dom.initOppLabel.textContent = this.mode === 'cpu' 
      ? I18N[this.settings.lang].oppCpu 
      : I18N[this.settings.lang].oppPlayer;
    this.dom.initDiceWhite.innerHTML = '';
    this.dom.initDiceBlack.innerHTML = '';
    this.dom.initResultText.textContent = '';
    this.dom.initActionBtn.textContent = I18N[this.settings.lang].rollDice;
    this.dom.initActionBtn.disabled = false;
    
    this.openOverlay(this.dom.initiativeModal);

    let stage = 'roll';
    let firstRollResult = null;

    this.dom.initActionBtn.onclick = () => {
      if (stage === 'roll') {
        audio.playDiceRoll();
        this.vibrate(40);
        
        let wVal = Math.floor(Math.random() * 6) + 1;
        let bVal = Math.floor(Math.random() * 6) + 1;

        this.dom.initDiceWhite.innerHTML = '';
        this.dom.initDiceWhite.appendChild(this.createDiceElement(wVal));
        this.dom.initDiceBlack.innerHTML = '';
        this.dom.initDiceBlack.appendChild(this.createDiceElement(bVal));

        if (wVal === bVal) {
          this.dom.initResultText.textContent = I18N[this.settings.lang].tieRoll;
          return;
        }

        const isWhite = wVal > bVal;
        this.dom.initResultText.textContent = isWhite 
          ? I18N[this.settings.lang].whiteFirst 
          : I18N[this.settings.lang].blackFirst;
        
        firstRollResult = {
          winner: isWhite ? 'white' : 'black',
          dice: [wVal, bVal]
        };

        stage = 'confirm';
        this.dom.initActionBtn.textContent = I18N[this.settings.lang].startGame;
      } else {
        this.closeOverlay(this.dom.initiativeModal);
        this.dom.titleScreen.classList.add('hidden');
        this.setupStartingBoard(firstRollResult);
      }
    };
  }

  setupStartingBoard(initData) {
    this.points = new Array(24).fill(0);
    this.points[23] = 2;
    this.points[12] = 5;
    this.points[7]  = 3;
    this.points[5]  = 5;

    this.points[0]  = -2;
    this.points[11] = -5;
    this.points[16] = -3;
    this.points[18] = -5;

    this.bar = { white: 0, black: 0 };
    this.bearOff = { white: 0, black: 0 };

    this.turn = initData.winner;
    this.dice = [...initData.dice];
    this.availableMoves = [...this.dice];
    this.selectedSource = null;

    this.renderBoard();
    this.updateControls();
    this.saveGameState();

    if (this.turn === 'black' && this.mode === 'cpu') {
      this.triggerCpuTurn();
    }
  }

  resumeSavedGame() {
    const saved = storage.getSaveState();
    if (!saved) return;
    this.points = saved.points;
    this.bar = saved.bar;
    this.bearOff = saved.bearOff;
    this.turn = saved.turn;
    this.dice = saved.dice || [];
    this.availableMoves = saved.availableMoves || [];
    this.mode = saved.mode || 'cpu';
    this.diff = saved.diff || 'easy';
    this.selectedSource = null;

    this.dom.titleScreen.classList.add('hidden');
    this.renderBoard();
    this.updateControls();

    if (this.turn === 'black' && this.mode === 'cpu' && this.availableMoves.length > 0) {
      this.triggerCpuTurn();
    }
  }

  saveGameState() {
    storage.saveState({
      points: this.points,
      bar: this.bar,
      bearOff: this.bearOff,
      turn: this.turn,
      dice: this.dice,
      availableMoves: this.availableMoves,
      mode: this.mode,
      diff: this.diff
    });
  }

  handleRollBtnClick() {
    if (this.isRolling || this.availableMoves.length > 0) return;
    audio.playDiceRoll();
    this.vibrate(35);
    this.isRolling = true;

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    this.dice = [d1, d2];
    this.availableMoves = d1 === d2 ? [d1, d1, d1, d1] : [d1, d2];

    setTimeout(() => {
      this.isRolling = false;
      this.updateControls();
      this.verifyTurnPossibilities();
      this.saveGameState();
    }, 300);
  }

  verifyTurnPossibilities() {
    const moves = this.getAllValidMoves(this.turn, this.availableMoves);
    if (moves.length === 0 && this.availableMoves.length > 0) {
      setTimeout(() => {
        this.nextTurn();
      }, 1000);
    } else {
      this.highlightPlayableCheckers();
    }
  }

  nextTurn() {
    this.turn = this.turn === 'white' ? 'black' : 'white';
    this.dice = [];
    this.availableMoves = [];
    this.selectedSource = null;
    this.renderBoard();
    this.updateControls();
    this.saveGameState();

    if (this.turn === 'black' && this.mode === 'cpu') {
      setTimeout(() => this.triggerCpuTurn(), 400);
    }
  }

  updateControls() {
    this.dom.whitePip.textContent = this.calcPip('white');
    this.dom.blackPip.textContent = this.calcPip('black');

    // Update Opponent Name Label based on Mode
    this.dom.opponentNameLabel.textContent = this.mode === 'cpu'
      ? I18N[this.settings.lang].oppCpu
      : I18N[this.settings.lang].oppPlayer;

    // Turn banner update
    this.dom.turnText.textContent = this.turn === 'white' 
      ? I18N[this.settings.lang].whiteTurnText 
      : I18N[this.settings.lang].blackTurnText;
    this.dom.turnText.className = `turn-status-text ${this.turn}-turn`;

    const isPlayerTurn = (this.turn === 'white' || this.mode === 'local');
    const canRoll = isPlayerTurn && this.availableMoves.length === 0;
    this.dom.rollActionBtn.style.display = canRoll ? 'inline-block' : 'none';

    this.dom.diceDisplay.innerHTML = '';
    this.dice.forEach(d => {
      const isUsed = !this.availableMoves.includes(d);
      const el = this.createDiceElement(d, isUsed);
      this.dom.diceDisplay.appendChild(el);
    });
  }

  calcPip(player) {
    let pip = 0;
    if (player === 'white') {
      pip += this.bar.white * 25;
      for (let i = 0; i < 24; i++) {
        if (this.points[i] > 0) pip += this.points[i] * (i + 1);
      }
    } else {
      pip += this.bar.black * 25;
      for (let i = 0; i < 24; i++) {
        if (this.points[i] < 0) pip += Math.abs(this.points[i]) * (24 - i);
      }
    }
    return pip;
  }

  isBearOffAllowed(player) {
    if (player === 'white') {
      if (this.bar.white > 0) return false;
      for (let i = 6; i < 24; i++) {
        if (this.points[i] > 0) return false;
      }
      return true;
    } else {
      if (this.bar.black > 0) return false;
      for (let i = 0; i < 18; i++) {
        if (this.points[i] < 0) return false;
      }
      return true;
    }
  }

  getAllValidMoves(player, diceList) {
    const uniqueDice = [...new Set(diceList)];
    const validMoves = [];

    const checkMove = (from, die) => {
      const res = this.canMoveChecker(player, from, die);
      if (res.valid) {
        validMoves.push({ from, to: res.target, die });
      }
    };

    if (player === 'white' && this.bar.white > 0) {
      uniqueDice.forEach(die => checkMove('bar', die));
      return validMoves;
    }
    if (player === 'black' && this.bar.black > 0) {
      uniqueDice.forEach(die => checkMove('bar', die));
      return validMoves;
    }

    for (let i = 0; i < 24; i++) {
      if ((player === 'white' && this.points[i] > 0) || (player === 'black' && this.points[i] < 0)) {
        uniqueDice.forEach(die => checkMove(i, die));
      }
    }

    return validMoves;
  }

  canMoveChecker(player, from, die) {
    if (player === 'white') {
      if (from === 'bar') {
        const target = 24 - die;
        if (this.points[target] >= -1) return { valid: true, target };
        return { valid: false };
      }
      const target = from - die;
      if (target >= 0) {
        if (this.points[target] >= -1) return { valid: true, target };
        return { valid: false };
      } else {
        if (!this.isBearOffAllowed('white')) return { valid: false };
        if (target === -1) return { valid: true, target: 'bearoff' };
        for (let i = from + 1; i < 6; i++) {
          if (this.points[i] > 0) return { valid: false };
        }
        return { valid: true, target: 'bearoff' };
      }
    } else {
      if (from === 'bar') {
        const target = die - 1;
        if (this.points[target] <= 1) return { valid: true, target };
        return { valid: false };
      }
      const target = from + die;
      if (target <= 23) {
        if (this.points[target] <= 1) return { valid: true, target };
        return { valid: false };
      } else {
        if (!this.isBearOffAllowed('black')) return { valid: false };
        if (target === 24) return { valid: true, target: 'bearoff' };
        for (let i = from - 1; i >= 18; i--) {
          if (this.points[i] < 0) return { valid: false };
        }
        return { valid: true, target: 'bearoff' };
      }
    }
  }

  executeMove(player, from, to, die) {
    if (from === 'bar') {
      if (player === 'white') this.bar.white--;
      else this.bar.black--;
    } else {
      if (player === 'white') this.points[from]--;
      else this.points[from]++;
    }

    if (to === 'bearoff') {
      if (player === 'white') this.bearOff.white++;
      else this.bearOff.black++;
      audio.playCheckerTap();
    } else {
      if (player === 'white' && this.points[to] === -1) {
        this.points[to] = 1;
        this.bar.black++;
        audio.playCheckerHit();
        this.vibrate(60);
      } else if (player === 'black' && this.points[to] === 1) {
        this.points[to] = -1;
        this.bar.white++;
        audio.playCheckerHit();
        this.vibrate(60);
      } else {
        if (player === 'white') this.points[to]++;
        else this.points[to]--;
        audio.playCheckerTap();
      }
    }

    const idx = this.availableMoves.indexOf(die);
    if (idx > -1) this.availableMoves.splice(idx, 1);

    this.vibrate(20);
    this.renderBoard();
    this.updateControls();

    if (this.checkVictory(player)) return;

    if (this.availableMoves.length === 0) {
      setTimeout(() => this.nextTurn(), 400);
    } else {
      this.verifyTurnPossibilities();
    }
  }

  checkVictory(player) {
    if (this.bearOff[player] === 15) {
      audio.playVictory();
      this.vibrate([100, 50, 150]);
      
      const opp = player === 'white' ? 'black' : 'white';
      let isGammon = this.bearOff[opp] === 0;
      let isBackgammon = isGammon && (
        this.bar[opp] > 0 || 
        (opp === 'black' ? this.hasCheckersInQuad(0, 5, -1) : this.hasCheckersInQuad(18, 23, 1))
      );

      this.stats.gamesPlayed++;
      if (player === 'white') this.stats.whiteWins++;
      else this.stats.blackWins++;
      if (isBackgammon) this.stats.backgammons++;
      else if (isGammon) this.stats.gammons++;
      storage.saveStats(this.stats);
      storage.clearSaveState();

      const winTitle = player === 'white' 
        ? I18N[this.settings.lang].winnerWhite 
        : I18N[this.settings.lang].winnerBlack;

      setTimeout(() => {
        alert(`${winTitle} ${isBackgammon ? '(Backgammon!)' : isGammon ? '(Gammon!)' : ''}`);
        this.dom.titleScreen.classList.remove('hidden');
        this.checkResume();
      }, 500);
      return true;
    }
    return false;
  }

  hasCheckersInQuad(start, end, sign) {
    for (let i = start; i <= end; i++) {
      if (sign > 0 && this.points[i] > 0) return true;
      if (sign < 0 && this.points[i] < 0) return true;
    }
    return false;
  }

  handleBoardInteraction(e) {
    if (this.turn === 'black' && this.mode === 'cpu') return;
    if (this.availableMoves.length === 0) return;

    const ptEl = e.target.closest('.point');
    const barEl = e.target.closest('.bar-well');
    const bearEl = e.target.closest('.bearoff-pocket');

    if (this.selectedSource === null) {
      if (barEl) {
        if (this.turn === 'white' && barEl.id === 'bar-white' && this.bar.white > 0) {
          this.selectSource('bar');
        } else if (this.turn === 'black' && barEl.id === 'bar-black' && this.bar.black > 0) {
          this.selectSource('bar');
        }
      } else if (ptEl) {
        const pt = parseInt(ptEl.dataset.point, 10);
        if (this.turn === 'white' && this.points[pt] > 0 && this.bar.white === 0) {
          this.selectSource(pt);
        } else if (this.turn === 'black' && this.points[pt] < 0 && this.bar.black === 0) {
          this.selectSource(pt);
        }
      }
    } else {
      if (ptEl) {
        const targetPt = parseInt(ptEl.dataset.point, 10);
        this.tryApplyUserMove(targetPt);
      } else if (bearEl) {
        this.tryApplyUserMove('bearoff');
      } else {
        this.clearSelection();
      }
    }
  }

  selectSource(source) {
    this.selectedSource = source;
    this.renderBoard();
    this.highlightPossibleTargets(source);
  }

  clearSelection() {
    this.selectedSource = null;
    this.renderBoard();
    this.highlightPlayableCheckers();
  }

  highlightPlayableCheckers() {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves);
    const playableSources = new Set(validMoves.map(m => m.from));

    if (playableSources.has('bar')) {
      const el = this.turn === 'white' ? this.dom.barWhite : this.dom.barBlack;
      const topChecker = el.querySelector('.checker:last-child');
      if (topChecker) topChecker.classList.add('selectable');
    } else {
      playableSources.forEach(pt => {
        const ptEl = document.querySelector(`.point[data-point="${pt}"]`);
        if (ptEl) {
          const topChecker = ptEl.querySelector('.checker:last-child');
          if (topChecker) topChecker.classList.add('selectable');
        }
      });
    }
  }

  highlightPossibleTargets(source) {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves)
      .filter(m => m.from === source);

    validMoves.forEach(m => {
      if (m.to === 'bearoff') {
        const el = this.turn === 'white' ? this.dom.bearoffWhite : this.dom.bearoffBlack;
        el.classList.add('legal-target');
      } else {
        const ptEl = document.querySelector(`.point[data-point="${m.to}"]`);
        if (ptEl) ptEl.classList.add('legal-target');
      }
    });
  }

  tryApplyUserMove(target) {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves)
      .filter(m => m.from === this.selectedSource && m.to === target);

    if (validMoves.length > 0) {
      const move = validMoves[0];
      const src = this.selectedSource;
      this.selectedSource = null;
      this.executeMove(this.turn, src, target, move.die);
    } else {
      this.clearSelection();
    }
  }

  triggerCpuTurn() {
    if (this.availableMoves.length === 0) {
      this.dom.thinkingIndicator.style.display = 'flex';
      setTimeout(() => {
        audio.playDiceRoll();
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        this.dice = [d1, d2];
        this.availableMoves = d1 === d2 ? [d1, d1, d1, d1] : [d1, d2];
        this.updateControls();

        setTimeout(() => this.executeCpuMoveStep(), 800);
      }, 700);
    } else {
      this.dom.thinkingIndicator.style.display = 'flex';
      setTimeout(() => this.executeCpuMoveStep(), 900);
    }
  }

  executeCpuMoveStep() {
    const validMoves = this.getAllValidMoves('black', this.availableMoves);
    if (validMoves.length === 0) {
      this.dom.thinkingIndicator.style.display = 'none';
      setTimeout(() => this.nextTurn(), 600);
      return;
    }

    let chosenMove = null;

    if (this.diff === 'easy') {
      chosenMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    } else if (this.diff === 'normal') {
      const hitMove = validMoves.find(m => m.to !== 'bearoff' && this.points[m.to] === 1);
      chosenMove = hitMove || validMoves[Math.floor(Math.random() * validMoves.length)];
    } else {
      let bestScore = -9999;
      validMoves.forEach(m => {
        let score = 0;
        if (m.to === 'bearoff') score += 50;
        else if (this.points[m.to] === 1) score += 35;
        else if (this.points[m.to] <= -1) score += 15;
        if (m.from === 'bar') score += 25;
        score += (m.die);
        if (score > bestScore) {
          bestScore = score;
          chosenMove = m;
        }
      });
    }

    this.dom.thinkingIndicator.style.display = 'none';
    this.executeMove('black', chosenMove.from, chosenMove.to, chosenMove.die);

    if (this.availableMoves.length > 0 && this.turn === 'black') {
      setTimeout(() => this.triggerCpuTurn(), 500);
    }
  }

  // --- BOARD RENDERING ---
  renderBoard() {
    document.querySelectorAll('.legal-target').forEach(el => el.classList.remove('legal-target'));

    for (let i = 0; i < 24; i++) {
      const ptEl = document.querySelector(`.point[data-point="${i}"]`);
      if (!ptEl) continue;
      const stack = ptEl.querySelector('.checker-stack');
      stack.innerHTML = '';

      const count = this.points[i];
      if (count === 0) continue;

      const isWhite = count > 0;
      const total = Math.abs(count);
      const limit = Math.min(total, 5);

      for (let k = 0; k < limit; k++) {
        const checker = document.createElement('div');
        checker.className = `checker checker-${isWhite ? 'white' : 'black'}`;
        if (this.selectedSource === i && k === limit - 1) {
          checker.classList.add('selected');
        }
        if (k === limit - 1 && total > 5) {
          const badge = document.createElement('span');
          badge.className = 'checker-count';
          badge.textContent = total;
          checker.appendChild(badge);
        }
        stack.appendChild(checker);
      }
    }

    this.renderBarPockets();
    this.renderBearOffPockets();
  }

  renderBarPockets() {
    this.dom.barWhite.innerHTML = '';
    const wTotal = this.bar.white;
    const wLimit = Math.min(wTotal, 4);
    for (let i = 0; i < wLimit; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-white';
      if (this.selectedSource === 'bar' && this.turn === 'white') ch.classList.add('selected');
      if (i === wLimit - 1 && wTotal > 4) {
        const badge = document.createElement('span');
        badge.className = 'checker-count';
        badge.textContent = wTotal;
        ch.appendChild(badge);
      }
      this.dom.barWhite.appendChild(ch);
    }

    this.dom.barBlack.innerHTML = '';
    const bTotal = this.bar.black;
    const bLimit = Math.min(bTotal, 4);
    for (let i = 0; i < bLimit; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-black';
      if (this.selectedSource === 'bar' && this.turn === 'black') ch.classList.add('selected');
      if (i === bLimit - 1 && bTotal > 4) {
        const badge = document.createElement('span');
        badge.className = 'checker-count';
        badge.textContent = bTotal;
        ch.appendChild(badge);
      }
      this.dom.barBlack.appendChild(ch);
    }
  }

  renderBearOffPockets() {
    this.dom.bearoffWhite.innerHTML = '';
    for (let i = 0; i < Math.min(this.bearOff.white, 15); i++) {
      const bar = document.createElement('div');
      bar.className = 'bearoff-bar white';
      this.dom.bearoffWhite.appendChild(bar);
    }
    this.dom.bearoffBlack.innerHTML = '';
    for (let i = 0; i < Math.min(this.bearOff.black, 15); i++) {
      const bar = document.createElement('div');
      bar.className = 'bearoff-bar black';
      this.dom.bearoffBlack.appendChild(bar);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.game = new BackgammonGame();
});
