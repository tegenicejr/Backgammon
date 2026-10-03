/**
 * Backgammon - Games Clubhouse Implementation
 * Strict Master Prompt Compliance
 */

const I18N = {
  en: {
    subtitle: "THE HERITAGE BOARD GAME",
    mode: "Game Mode",
    difficulty: "Difficulty",
    resume: "Resume Game",
    start: "Play Game",
    howToPlay: "How to Play",
    records: "Records & Stats",
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
    rule3Desc: "Rolling matching dice allows you to move 4 times with that number.",
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
    confirmLeave: "Return to title? Your current match will be saved.",
    confirmReset: "Are you sure you want to reset all game data and stats? This cannot be undone.",
    whiteTurnText: "White's Turn",
    blackTurnText: "Black's Turn",
    winnerWhite: "White Wins!",
    winnerBlack: "Black Wins!"
  },
  ja: {
    subtitle: "伝統と歴史の王道ボードゲーム",
    mode: "対戦モード",
    difficulty: "CPU難易度",
    resume: "つづきから",
    start: "対局開始",
    howToPlay: "あそびかた",
    records: "戦績・やりこみ",
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
    confirmLeave: "タイトルへ戻りますか？（進行状況は自動保存されます）",
    confirmReset: "ハイスコアや戦績を完全に初期化しますか？この操作は取り消せません。",
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
    
    // Board Representation: 0 to 23 points.
    // White moves 23 -> 0. Black moves 0 -> 23.
    // Positive numbers: White count. Negative numbers: Black count.
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
      turnCheckerDisc: document.getElementById('turn-checker-disc'),
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
    // Top Row: Points 12 to 17 (Outer), Points 18 to 23 (Inner)
    // Bottom Row: Points 11 down to 6 (Outer), Points 5 down to 0 (Inner)
    const createPt = (idx, isTop) => {
      const pt = document.createElement('div');
      pt.className = `point ${isTop ? 'point-top' : 'point-bottom'} ${idx % 2 === 0 ? 'pt-dark' : 'pt-light'}`;
      pt.dataset.point = idx;
      const stack = document.createElement('div');
      stack.className = 'checker-stack';
      pt.appendChild(stack);
      return pt;
    };

    // Outer Top: 12..17
    for (let i = 12; i <= 17; i++) {
      this.dom.quadOuterTop.appendChild(createPt(i, true));
    }
    // Inner Top: 18..23
    for (let i = 18; i <= 23; i++) {
      this.dom.quadInnerTop.appendChild(createPt(i, true));
    }
    // Outer Bottom: 11..6
    for (let i = 11; i >= 6; i--) {
      this.dom.quadOuterBottom.appendChild(createPt(i, false));
    }
    // Inner Bottom: 5..0
    for (let i = 5; i >= 0; i--) {
      this.dom.quadInnerBottom.appendChild(createPt(i, false));
    }
  }

  applySettings() {
    audio.enabled = this.settings.sound;
    this.dom.audioToggleBtn.textContent = this.settings.sound ? '🔊' : '🔇';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[this.settings.lang][key]) {
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
  }

  vibrate(ms = 30) {
    if (this.settings.haptics && navigator.vibrate) {
      try { navigator.vibrate(ms); } catch (_) {}
    }
  }

  bindEvents() {
    // Mode toggle
    this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.val;
        this.dom.difficultyRow.style.display = this.mode === 'cpu' ? 'flex' : 'none';
        this.vibrate(15);
      });
    });

    // Diff toggle
    this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.diff = btn.dataset.val;
        this.vibrate(15);
      });
    });

    // Main action buttons
    this.dom.startBtn.addEventListener('click', () => this.startNewMatchFlow());
    this.dom.resumeBtn.addEventListener('click', () => this.resumeSavedGame());
    
    // Dialog triggers
    this.dom.rulesBtn.addEventListener('click', () => this.openOverlay(this.dom.rulesModal));
    this.dom.rulesCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.rulesModal));
    this.dom.statsBtn.addEventListener('click', () => this.showStats());
    this.dom.statsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.statsModal));
    this.dom.titleSettingsBtn.addEventListener('click', () => this.openOverlay(this.dom.settingsModal));
    this.dom.settingsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.settingsModal));
    
    // Header Actions
    this.dom.headerBackBtn.addEventListener('click', () => {
      this.confirmDialog(I18N[this.settings.lang].confirmLeave, () => {
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

    // Settings listeners
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
      this.confirmDialog(I18N[this.settings.lang].confirmReset, () => {
        storage.clearAllData();
        this.settings = storage.getSettings();
        this.stats = storage.getStats();
        this.applySettings();
        this.checkResume();
        this.closeOverlay(this.dom.settingsModal);
      });
    });

    // Board Interactive delegated listeners
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

  confirmDialog(msg, onOk) {
    this.dom.confirmMsg.textContent = msg;
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

  // --- STANDARD DICE DOM BUILDER ---
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

  // --- 3-STEP INITIATIVE SEQUENCE ---
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

    let stage = 'roll'; // 'roll' | 'confirm'
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
    // Official Backgammon initial positions:
    // White: 2 on pt 23, 5 on pt 12, 3 on pt 7, 5 on pt 5
    // Black: 2 on pt 0, 5 on pt 11, 3 on pt 16, 5 on pt 18
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

  // --- GAMEPLAY CORE ENGINE ---
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
      // No legal moves left: Pass turn
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
    // Pip Count
    this.dom.whitePip.textContent = this.calcPip('white');
    this.dom.blackPip.textContent = this.calcPip('black');

    // Turn indicator
    this.dom.turnCheckerDisc.className = `checker checker-${this.turn}`;
    this.dom.turnText.textContent = this.turn === 'white' 
      ? I18N[this.settings.lang].whiteTurnText 
      : I18N[this.settings.lang].blackTurnText;

    // Roll button state
    const isPlayerTurn = (this.turn === 'white' || this.mode === 'local');
    const canRoll = isPlayerTurn && this.availableMoves.length === 0;
    this.dom.rollActionBtn.style.display = canRoll ? 'inline-block' : 'none';

    // Dices Render
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

  // --- VALID MOVES ENGINE ---
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
        // Bear off attempt
        if (!this.isBearOffAllowed('white')) return { valid: false };
        if (target === -1) return { valid: true, target: 'bearoff' };
        // Bearing off from deeper point only if no checkers on higher points
        for (let i = from + 1; i < 6; i++) {
          if (this.points[i] > 0) return { valid: false };
        }
        return { valid: true, target: 'bearoff' };
      }
    } else {
      // Black
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
        // Bear off attempt
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
      // Check Hit
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

  // --- USER INTERACTION ---
  handleBoardInteraction(e) {
    if (this.turn === 'black' && this.mode === 'cpu') return;
    if (this.availableMoves.length === 0) return;

    const ptEl = e.target.closest('.point');
    const barEl = e.target.closest('.bar-well');
    const bearEl = e.target.closest('.bearoff-pocket');

    if (this.selectedSource === null) {
      // Selecting Source
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
      // Selecting Target
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

  // --- CPU OPPONENT WITH THINKING WAIT ---
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
      // Pick random
      chosenMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    } else if (this.diff === 'normal') {
      // Hit blots if available
      const hitMove = validMoves.find(m => m.to !== 'bearoff' && this.points[m.to] === 1);
      chosenMove = hitMove || validMoves[Math.floor(Math.random() * validMoves.length)];
    } else {
      // Hard: Heuristic Evaluation
      let bestScore = -9999;
      validMoves.forEach(m => {
        let score = 0;
        if (m.to === 'bearoff') score += 50;
        else if (this.points[m.to] === 1) score += 35; // Hit blot
        else if (this.points[m.to] <= -1) score += 15; // Make point
        if (m.from === 'bar') score += 25;
        score += (m.die); // advance
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
    // Clear legal target classes
    document.querySelectorAll('.legal-target').forEach(el => el.classList.remove('legal-target'));

    // Render Points
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

    // Render Bar
    this.renderBarPockets();

    // Render Bear-off
    this.renderBearOffPockets();
  }

  renderBarPockets() {
    this.dom.barWhite.innerHTML = '';
    for (let i = 0; i < Math.min(this.bar.white, 4); i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-white';
      if (this.selectedSource === 'bar' && this.turn === 'white') ch.classList.add('selected');
      this.dom.barWhite.appendChild(ch);
    }
    this.dom.barBlack.innerHTML = '';
    for (let i = 0; i < Math.min(this.bar.black, 4); i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-black';
      if (this.selectedSource === 'bar' && this.turn === 'black') ch.classList.add('selected');
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

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.game = new BackgammonGame();
});
