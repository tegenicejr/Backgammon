// Backgammon Logic, Multi-Level AI, Complete Game Engine & I18N
(() => {
  // --- I18N DICTIONARY ---
  const I18N = {
    en: {
      title: "BACKGAMMON",
      subtitle: "Classic Strategy & Skill",
      modeLabel: "Mode",
      modeCpu: "vs CPU",
      modePass: "Pass & Play",
      diffLabel: "CPU Level",
      diffEasy: "Easy",
      diffNormal: "Normal",
      diffHard: "Hard",
      resumeGame: "Resume Game",
      startGame: "Start New Game",
      howToPlay: "How to Play",
      stats: "Stats",
      settings: "⚙️ Settings",
      toTitle: "‹ Title",
      white: "White",
      black: "Black",
      rollToStart: "Roll to start",
      rollDice: "🎲 ROLL DICE",
      endTurn: "Done",
      thinking: "Thinking...",
      whiteTurn: "White's Turn",
      blackTurn: "Black's Turn",
      whitePassTurn: "White has no legal moves. (Pass)",
      blackPassTurn: "Black has no legal moves. (Pass)",
      settingsTitle: "Settings",
      langSetting: "Language",
      soundSetting: "Sound Effects",
      hapticsSetting: "Haptics (Vibration)",
      speedSetting: "Animation Speed",
      speedNormal: "Normal",
      speedFast: "Fast",
      resetData: "Reset All Data",
      close: "Close",
      rulesTitle: "How to Play Backgammon",
      rule1Title: "Objective",
      rule1Desc: "Move all 15 checkers into your home board and bear them off before your opponent.",
      rule2Title: "Movement",
      rule2Desc: "White moves toward point 1. Black moves toward point 24. Doubles give 4 moves!",
      rule3Title: "Hitting & The Bar",
      rule3Desc: "Landing on an opposing single checker (a blot) sends it to the central Bar. Checkers on the bar must re-enter first!",
      rule4Title: "Bearing Off",
      rule4Desc: "Once all 15 checkers are in your inner home board, you can remove them to the right-side tray. First to bear off all 15 wins!",
      statsTitle: "Match Records",
      statMatches: "Matches Played",
      statWins: "Wins",
      statWinrate: "Win Rate",
      statGammons: "Gammon Wins",
      cancel: "Cancel",
      confirm: "Leave",
      confirmTitle: "Confirmation",
      confirmQuitMsg: "Are you sure you want to quit the current match?",
      confirmResetMsg: "Reset all match statistics and saved game data?",
      shareX: "Share on 𝕏",
      playAgain: "Play Again",
      whiteWins: "White Wins!",
      blackWins: "Black Wins!",
      singleWin: "Single Victory",
      gammonWin: "Gammon Victory (2x)!",
      bgWin: "Backgammon Victory (3x)!",
      xShareTemplate: "I just won a game of Backgammon on Games Clubhouse! 🎲🏆 #GamesClubhouse"
    },
    ja: {
      title: "バックギャモン",
      subtitle: "世界最古の戦略ボードゲーム",
      modeLabel: "対戦形式",
      modeCpu: "ひとりで遊ぶ (VS CPU)",
      modePass: "ふたりで遊ぶ (パス＆プレイ)",
      diffLabel: "CPU難易度",
      diffEasy: "初級",
      diffNormal: "中級",
      diffHard: "上級",
      resumeGame: "つづきから",
      startGame: "ゲームスタート",
      howToPlay: "あそびかた",
      stats: "戦績・記録",
      settings: "⚙️ 設定",
      toTitle: "‹ タイトル",
      white: "白",
      black: "黒",
      rollToStart: "ダイスを振って手番開始",
      rollDice: "🎲 ダイスを振る",
      endTurn: "手番終了",
      thinking: "考え中...",
      whiteTurn: "白の手番です",
      blackTurn: "黒の手番です",
      whitePassTurn: "白に動かせる手がありません（パス）",
      blackPassTurn: "黒に動かせる手がありません（パス）",
      settingsTitle: "設定",
      langSetting: "言語 (Language)",
      soundSetting: "効果音",
      hapticsSetting: "バイブレーション (振動)",
      speedSetting: "演出速度",
      speedNormal: "通常",
      speedFast: "高速",
      resetData: "全データを初期化",
      close: "閉じる",
      rulesTitle: "バックギャモンのあそびかた",
      rule1Title: "ゲームの目的",
      rule1Desc: "15個の持ち駒をすべて自分のインナーボード（ゴール陣地）に集め、誰よりも早く盤外へ回収（ベアオフ）した側の勝利です。",
      rule2Title: "駒の進行",
      rule2Desc: "白は1番へ、黒は24番へ進みます。ダイスでゾロ目が出ると4回分移動できます！",
      rule3Title: "ヒットとバー（中央仕切り）",
      rule3Desc: "相手の孤立駒（ブロット）に重なるとヒットとなり、相手駒をバーへ送ります。バーの駒は最優先で復帰させなければなりません。",
      rule4Title: "ベアオフ（上がり）",
      rule4Desc: "15個すべて自分のインナーボードに集まると、出た目を使って右側のトレイへ回収できます。先に全駒を上げた側の勝ちです！",
      statsTitle: "対戦成績",
      statMatches: "総対戦数",
      statWins: "勝利数",
      statWinrate: "勝率",
      statGammons: "ギャモン勝ち",
      cancel: "キャンセル",
      confirm: "中断する",
      confirmTitle: "確認",
      confirmQuitMsg: "進行中の対局を中断してタイトルへ戻りますか？",
      confirmResetMsg: "すべての戦績記録と中断データを完全に初期化しますか？",
      shareX: "𝕏で結果をポスト",
      playAgain: "もう一度遊ぶ",
      whiteWins: "白（White）の勝利！",
      blackWins: "黒（Black）の勝利！",
      singleWin: "シングル勝ち（通常勝利）",
      gammonWin: "ギャモン勝ち（2倍勝利）！",
      bgWin: "バックギャモン勝ち（3倍勝利）！",
      xShareTemplate: "Games Clubhouseのバックギャモンで勝利しました！🎲🏆 #GamesClubhouse"
    }
  };

  // --- STATE DEFINITIONS ---
  // Board indices: 1 to 24.
  // Positive count = White checkers. Negative count = Black checkers.
  // Bar: checkers waiting to re-enter.
  // Bearoff: checkers moved off the board (goal = 15).
  const state = {
    board: new Array(25).fill(0),
    bar: { white: 0, black: 0 },
    bearOff: { white: 0, black: 0 },
    turn: 'white',        // 'white' or 'black'
    mode: 'cpu',          // 'cpu' or 'pass'
    difficulty: 'normal', // 'easy', 'normal', 'hard'
    dice: [],             // Available die values [e.g. 5, 3] or [4, 4, 4, 4]
    rolledDice: [],       // Initial roll snapshot for rendering
    selectedPoint: null,  // 1-24 or 'bar'
    validMoves: [],       // Destination targets for selectedPoint
    waitingForRoll: true,
    isThinking: false,
    gameOver: false
  };

  let settings = window.storageManager.getSettings();

  // --- DOM ELEMENTS CACHE ---
  const el = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    modeSelector: document.getElementById('mode-selector'),
    diffSelector: document.getElementById('diff-selector'),
    cpuDiffRow: document.getElementById('cpu-diff-row'),
    btnResume: document.getElementById('btn-resume-game'),
    btnStart: document.getElementById('btn-start-game'),
    btnToTitle: document.getElementById('btn-to-title'),
    btnOpenRules: document.getElementById('btn-open-rules'),
    btnOpenStats: document.getElementById('btn-open-stats'),
    btnOpenSettings: document.getElementById('btn-open-settings'),
    btnInGameSettings: document.getElementById('btn-ingame-settings'),
    btnAudioToggle: document.getElementById('btn-audio-toggle'),
    btnRollDice: document.getElementById('btn-roll-dice'),
    btnConfirmEndTurn: document.getElementById('btn-confirm-endturn'),
    turnBanner: document.getElementById('turn-banner'),
    turnText: document.getElementById('turn-text'),
    cpuThinkingPill: document.getElementById('cpu-thinking-pill'),
    pipBlackVal: document.getElementById('pip-black-val'),
    pipWhiteVal: document.getElementById('pip-white-val'),
    diceContainer: document.getElementById('dice-container'),
    barWhite: document.getElementById('bar-white'),
    barBlack: document.getElementById('bar-black'),
    trayWhite: document.getElementById('tray-white'),
    trayBlack: document.getElementById('tray-black'),
    stackWhiteOff: document.getElementById('stack-white-off'),
    stackBlackOff: document.getElementById('stack-black-off'),
    // Quadrants
    quadTopLeft: document.getElementById('quad-top-left'),
    quadTopRight: document.getElementById('quad-top-right'),
    quadBottomLeft: document.getElementById('quad-bottom-left'),
    quadBottomRight: document.getElementById('quad-bottom-right'),
    // Modals
    modalSettings: document.getElementById('modal-settings'),
    modalRules: document.getElementById('modal-rules'),
    modalStats: document.getElementById('modal-stats'),
    modalConfirm: document.getElementById('modal-confirm'),
    modalResult: document.getElementById('modal-result'),
    confirmTitle: document.getElementById('confirm-title'),
    confirmMessage: document.getElementById('confirm-message'),
    confirmOkBtn: document.getElementById('confirm-ok'),
    confirmCancelBtn: document.getElementById('confirm-cancel'),
    // Result
    resultWinner: document.getElementById('result-winner'),
    resultType: document.getElementById('result-type'),
    btnShareX: document.getElementById('btn-share-x'),
    btnPlayAgain: document.getElementById('btn-play-again'),
    btnResultTitle: document.getElementById('btn-result-title'),
    // Settings inputs
    settingLang: document.getElementById('setting-lang'),
    settingSound: document.getElementById('setting-sound'),
    settingHaptics: document.getElementById('setting-haptics'),
    settingSpeed: document.getElementById('setting-speed'),
    btnResetData: document.getElementById('btn-reset-data')
  };

  // --- INITIALIZATION ---
  function initApp() {
    applySettingsToUI();
    applyLanguage(settings.lang);
    setupBoardDOM();
    bindEvents();
    checkSavedGamePresence();
  }

  function applySettingsToUI() {
    window.soundEngine.setEnabled(settings.sound);
    el.btnAudioToggle.textContent = settings.sound ? '🔊' : '🔇';
    el.settingSound.checked = settings.sound;
    el.settingHaptics.checked = settings.vibrate;

    // Language Segment
    el.settingLang.querySelectorAll('.segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === settings.lang);
    });

    // Speed Segment
    el.settingSpeed.querySelectorAll('.segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.speed === settings.speed);
    });

    document.documentElement.style.setProperty('--anim-speed', settings.speed === 'fast' ? '0.12s' : '0.24s');
  }

  function applyLanguage(lang) {
    settings.lang = lang;
    window.storageManager.saveSettings(settings);
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (dict[key]) {
        elem.textContent = dict[key];
      }
    });

    updateTurnDisplay();
  }

  function vibrate(duration = 24) {
    if (settings.vibrate && navigator.vibrate) {
      try { navigator.vibrate(duration); } catch (e) {}
    }
  }

  function checkSavedGamePresence() {
    const saved = window.storageManager.getSavedGame();
    if (saved && !saved.gameOver) {
      el.btnResume.classList.remove('hidden');
    } else {
      el.btnResume.classList.add('hidden');
    }
  }

  // --- BOARD GENERATION ---
  function setupBoardDOM() {
    // Quadrants mappings:
    // Top Row: White moves towards point 1.
    // Left: 13-18, Right: 19-24 (Black home)
    // Bottom Row:
    // Left: 12-7, Right: 6-1 (White home)
    el.quadTopLeft.innerHTML = '';
    el.quadTopRight.innerHTML = '';
    el.quadBottomLeft.innerHTML = '';
    el.quadBottomRight.innerHTML = '';

    for (let i = 13; i <= 18; i++) el.quadTopLeft.appendChild(createPointElement(i));
    for (let i = 19; i <= 24; i++) el.quadTopRight.appendChild(createPointElement(i));
    for (let i = 12; i >= 7; i--) el.quadBottomLeft.appendChild(createPointElement(i));
    for (let i = 6; i >= 1; i--) el.quadBottomRight.appendChild(createPointElement(i));
  }

  function createPointElement(pointIndex) {
    const div = document.createElement('div');
    div.className = `point-triangle ${pointIndex % 2 === 0 ? 'pt-even' : 'pt-odd'}`;
    div.dataset.point = pointIndex;

    const stack = document.createElement('div');
    stack.className = 'checkers-stack';
    div.appendChild(stack);

    div.addEventListener('click', () => onPointClicked(pointIndex));
    return div;
  }

  // --- GAME START & RESUME ---
  function startNewGame() {
    resetGameState();
    state.gameOver = false;
    showGameScreen();
    window.storageManager.saveGame(state);
    checkTurnPossibilities();
  }

  function resumeGame() {
    const saved = window.storageManager.getSavedGame();
    if (!saved) return;
    Object.assign(state, saved);
    showGameScreen();
    renderAll();
    checkTurnPossibilities();
  }

  function resetGameState() {
    state.board.fill(0);
    // Standard backgammon starting arrangement:
    // White (+): 2 on 24, 5 on 13, 3 on 8, 5 on 6
    // Black (-): 2 on 1, 5 on 12, 3 on 17, 5 on 19
    state.board[24] = 2;
    state.board[13] = 5;
    state.board[8] = 3;
    state.board[6] = 5;

    state.board[1] = -2;
    state.board[12] = -5;
    state.board[17] = -3;
    state.board[19] = -5;

    state.bar = { white: 0, black: 0 };
    state.bearOff = { white: 0, black: 0 };
    state.turn = 'white';
    state.dice = [];
    state.rolledDice = [];
    state.selectedPoint = null;
    state.validMoves = [];
    state.waitingForRoll = true;
    state.isThinking = false;
  }

  function showGameScreen() {
    el.titleScreen.classList.add('hidden');
    el.gameScreen.classList.remove('hidden');
    renderAll();
  }

  function returnToTitleScreen() {
    el.gameScreen.classList.add('hidden');
    el.titleScreen.classList.remove('hidden');
    checkSavedGamePresence();
  }

  // --- CORE GAME LOGIC & LEGAL MOVES ---

  // Check if all active checkers of a player are inside their home quadrant
  function isAllInHome(color) {
    if (state.bar[color] > 0) return false;
    if (color === 'white') {
      // White home is points 1 to 6
      for (let i = 7; i <= 24; i++) {
        if (state.board[i] > 0) return false;
      }
      return true;
    } else {
      // Black home is points 19 to 24
      for (let i = 1; i <= 18; i++) {
        if (state.board[i] < 0) return false;
      }
      return true;
    }
  }

  // Calculate legal landing point for a single move with dieValue
  function getMoveDestination(fromPoint, dieVal, color) {
    if (fromPoint === 'bar') {
      // White enters at (25 - dieVal), Black enters at dieVal
      return color === 'white' ? (25 - dieVal) : dieVal;
    }

    if (color === 'white') {
      const dest = fromPoint - dieVal;
      if (dest >= 1) return dest;
      // Bearoff check
      if (isAllInHome('white')) {
        if (dest === 0) return 0; // Exact bear off
        if (dest < 0) {
          // Can bear off with larger die ONLY if no checkers exist on higher points
          let higherCheckers = false;
          for (let p = fromPoint + 1; p <= 6; p++) {
            if (state.board[p] > 0) {
              higherCheckers = true;
              break;
            }
          }
          if (!higherCheckers) return 0;
        }
      }
      return null;
    } else {
      const dest = fromPoint + dieVal;
      if (dest <= 24) return dest;
      // Bearoff check
      if (isAllInHome('black')) {
        if (dest === 25) return 25; // Exact bear off
        if (dest > 25) {
          // Can bear off with larger die ONLY if no checkers exist on lower points
          let higherCheckers = false;
          for (let p = fromPoint - 1; p >= 19; p--) {
            if (state.board[p] < 0) {
              higherCheckers = true;
              break;
            }
          }
          if (!higherCheckers) return 25;
        }
      }
      return null;
    }
  }

  // Check if a point can be landed on by the active color
  function canLandOn(destPoint, color) {
    if (destPoint === 0 || destPoint === 25) return true; // Bear off
    const current = state.board[destPoint];
    if (color === 'white') {
      return current >= -1; // Empty, white checkers, or a single black blot
    } else {
      return current <= 1; // Empty, black checkers, or a single white blot
    }
  }

  // Get all valid moves for the given starting location
  function getLegalDestinations(fromPoint, color) {
    if (state.bar[color] > 0 && fromPoint !== 'bar') return [];

    const destinations = new Set();
    const uniqueDice = Array.from(new Set(state.dice));

    for (const die of uniqueDice) {
      const dest = getMoveDestination(fromPoint, die, color);
      if (dest !== null && canLandOn(dest, color)) {
        destinations.add(dest);
      }
    }
    return Array.from(destinations);
  }

  // Get all points that have at least one valid move
  function getPointsWithMoves(color) {
    const list = [];
    if (state.bar[color] > 0) {
      if (getLegalDestinations('bar', color).length > 0) {
        list.push('bar');
      }
      return list;
    }

    for (let pt = 1; pt <= 24; pt++) {
      if (color === 'white' && state.board[pt] > 0) {
        if (getLegalDestinations(pt, color).length > 0) list.push(pt);
      } else if (color === 'black' && state.board[pt] < 0) {
        if (getLegalDestinations(pt, color).length > 0) list.push(pt);
      }
    }
    return list;
  }

  // Execute a move from 'fromPoint' to 'toPoint'
  function executeMove(fromPoint, toPoint, color) {
    // 1. Determine which die was used
    let usedDie = null;
    const sortedDice = [...state.dice].sort((a, b) => a - b);

    for (const die of sortedDice) {
      const dest = getMoveDestination(fromPoint, die, color);
      if (dest === toPoint) {
        usedDie = die;
        break;
      }
    }
    if (usedDie === null) {
      // Fallback for bearing off with higher die
      usedDie = sortedDice[sortedDice.length - 1];
    }

    // 2. Consume die
    const dieIndex = state.dice.indexOf(usedDie);
    if (dieIndex > -1) {
      state.dice.splice(dieIndex, 1);
    }

    // 3. Remove checker from start point
    if (fromPoint === 'bar') {
      state.bar[color]--;
    } else {
      if (color === 'white') state.board[fromPoint]--;
      else state.board[fromPoint]++;
    }

    // 4. Place or bear off at destination
    if (toPoint === 0 && color === 'white') {
      state.bearOff.white++;
      window.soundEngine.playBearOffSound();
      vibrate(30);
    } else if (toPoint === 25 && color === 'black') {
      state.bearOff.black++;
      window.soundEngine.playBearOffSound();
      vibrate(30);
    } else {
      // Board landing
      if (color === 'white') {
        if (state.board[toPoint] === -1) {
          // Hit black blot!
          state.board[toPoint] = 1;
          state.bar.black++;
          window.soundEngine.playHitSound();
          vibrate(60);
        } else {
          state.board[toPoint]++;
          window.soundEngine.playCheckerMove();
          vibrate(15);
        }
      } else {
        if (state.board[toPoint] === 1) {
          // Hit white blot!
          state.board[toPoint] = -1;
          state.bar.white++;
          window.soundEngine.playHitSound();
          vibrate(60);
        } else {
          state.board[toPoint]--;
          window.soundEngine.playCheckerMove();
          vibrate(15);
        }
      }
    }

    state.selectedPoint = null;
    state.validMoves = [];

    // 5. Check victory
    if (checkGameEnd()) return;

    // 6. Check further moves or end of turn
    renderAll();
    window.storageManager.saveGame(state);

    if (state.dice.length === 0) {
      finishTurn();
    } else {
      const remainingMoves = getPointsWithMoves(state.turn);
      if (remainingMoves.length === 0) {
        showToast(state.turn === 'white' ? I18N[settings.lang].whitePassTurn : I18N[settings.lang].blackPassTurn);
        setTimeout(finishTurn, 1000);
      } else if (state.mode === 'cpu' && state.turn === 'black') {
        setTimeout(cpuTakeAction, getAnimDelay());
      }
    }
  }

  function finishTurn() {
    state.turn = state.turn === 'white' ? 'black' : 'white';
    state.dice = [];
    state.rolledDice = [];
    state.selectedPoint = null;
    state.validMoves = [];
    state.waitingForRoll = true;

    renderAll();
    window.storageManager.saveGame(state);
    checkTurnPossibilities();
  }

  function checkTurnPossibilities() {
    updateTurnDisplay();
    if (state.mode === 'cpu' && state.turn === 'black') {
      // Trigger CPU Turn
      triggerCpuTurn();
    }
  }

  // --- DICE ROLLING ---
  function rollDice() {
    if (!state.waitingForRoll || state.isThinking || state.gameOver) return;

    window.soundEngine.playDiceRoll();
    vibrate(20);

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    if (d1 === d2) {
      state.dice = [d1, d1, d1, d1];
      state.rolledDice = [d1, d1, d1, d1];
    } else {
      state.dice = [d1, d2];
      state.rolledDice = [d1, d2];
    }

    state.waitingForRoll = false;
    renderDice();
    window.storageManager.saveGame(state);

    const legalPoints = getPointsWithMoves(state.turn);
    if (legalPoints.length === 0) {
      showToast(state.turn === 'white' ? I18N[settings.lang].whitePassTurn : I18N[settings.lang].blackPassTurn);
      setTimeout(finishTurn, 1200);
    } else {
      if (state.mode === 'cpu' && state.turn === 'black') {
        setTimeout(cpuTakeAction, getAnimDelay());
      }
    }
  }

  // --- CPU AI ENGINE ---
  function triggerCpuTurn() {
    state.isThinking = true;
    el.cpuThinkingPill.classList.remove('hidden');
    el.btnRollDice.classList.add('hidden');

    const thinkDuration = settings.speed === 'fast' ? 450 : 800;
    setTimeout(() => {
      rollDice();
      el.cpuThinkingPill.classList.add('hidden');
      state.isThinking = false;
    }, thinkDuration);
  }

  function cpuTakeAction() {
    if (state.turn !== 'black' || state.dice.length === 0 || state.gameOver) return;

    const movableSources = getPointsWithMoves('black');
    if (movableSources.length === 0) {
      finishTurn();
      return;
    }

    // Evaluate best move according to difficulty
    const choice = selectCpuMove(movableSources, state.difficulty);
    if (choice) {
      executeMove(choice.from, choice.to, 'black');
    } else {
      finishTurn();
    }
  }

  function selectCpuMove(sources, level) {
    const candidateMoves = [];
    sources.forEach(from => {
      const targets = getLegalDestinations(from, 'black');
      targets.forEach(to => {
        candidateMoves.push({ from, to });
      });
    });

    if (candidateMoves.length === 0) return null;
    if (level === 'easy') {
      // Pick random legal move
      return candidateMoves[Math.floor(Math.random() * candidateMoves.length)];
    }

    // Score candidates for Normal / Hard
    let bestMove = candidateMoves[0];
    let highestScore = -9999;

    candidateMoves.forEach(m => {
      let score = 0;
      // 1. Prioritize bearing off
      if (m.to === 25) score += 120;

      // 2. Prioritize hitting enemy blot
      if (m.to >= 1 && m.to <= 24 && state.board[m.to] === 1) score += 90;

      // 3. Prioritize making a point (covering an own blot)
      if (m.to >= 1 && m.to <= 24 && state.board[m.to] === -1) score += 50;

      // 4. Escape from White home (points 1-6)
      if (m.from >= 1 && m.from <= 6) score += 30;

      // 5. Avoid creating a blot (Hard mode evaluation)
      if (level === 'hard') {
        // If landing on an empty point, it becomes a single blot
        if (m.to >= 1 && m.to <= 24 && state.board[m.to] === 0) {
          // Vulnerable to being hit if near white checkers
          score -= 15;
        }
        // Advance progress
        score += (m.to === 25 ? 25 : m.to) * 1.5;
      }

      if (score > highestScore) {
        highestScore = score;
        bestMove = m;
      }
    });

    return bestMove;
  }

  // --- VICTORY & GAME OVER ---
  function checkGameEnd() {
    if (state.bearOff.white >= 15) {
      handleGameOver('white');
      return true;
    }
    if (state.bearOff.black >= 15) {
      handleGameOver('black');
      return true;
    }
    return false;
  }

  function handleGameOver(winner) {
    state.gameOver = true;
    window.storageManager.clearSavedGame();
    window.soundEngine.playFanfare();
    vibrate(100);

    const loser = winner === 'white' ? 'black' : 'white';
    let winType = 'single'; // single, gammon, backgammon
    const loserBorneOff = state.bearOff[loser];

    if (loserBorneOff === 0) {
      winType = 'gammon';
      // Check for backgammon: loser has checkers on the bar or in the winner's inner home
      if (winner === 'white') {
        const hasInOpponentHome = state.bar.black > 0 || state.board.slice(1, 7).some(cnt => cnt < 0);
        if (hasInOpponentHome) winType = 'backgammon';
      } else {
        const hasInOpponentHome = state.bar.white > 0 || state.board.slice(19, 25).some(cnt => cnt > 0);
        if (hasInOpponentHome) winType = 'backgammon';
      }
    }

    const dict = I18N[settings.lang];
    const isPlayerWin = winner === 'white';
    window.storageManager.recordMatchResult(isPlayerWin, winType);

    el.resultWinner.textContent = winner === 'white' ? dict.whiteWins : dict.blackWins;
    if (winType === 'single') el.resultType.textContent = dict.singleWin;
    else if (winType === 'gammon') el.resultType.textContent = dict.gammonWin;
    else el.resultType.textContent = dict.bgWin;

    el.modalResult.classList.remove('hidden');
  }

  // --- UI INTERACTION (CLICK HANDLERS) ---
  function onPointClicked(pointIndex) {
    if (state.waitingForRoll || state.gameOver) return;
    if (state.mode === 'cpu' && state.turn === 'black') return;

    const color = state.turn;
    const isWhite = color === 'white';

    // 1. If currently selected, clicking a legal target point executes move
    if (state.selectedPoint !== null && state.validMoves.includes(pointIndex)) {
      executeMove(state.selectedPoint, pointIndex, color);
      return;
    }

    // 2. Select point if it has current player's checkers
    const count = state.board[pointIndex];
    const hasOwnChecker = isWhite ? count > 0 : count < 0;

    if (hasOwnChecker) {
      if (state.bar[color] > 0) {
        // Must move from bar first
        return;
      }
      const legalDestinations = getLegalDestinations(pointIndex, color);
      if (legalDestinations.length > 0) {
        state.selectedPoint = pointIndex;
        state.validMoves = legalDestinations;
        renderAll();
        vibrate(10);
      }
    } else {
      // Clear selection on empty or opponent point
      state.selectedPoint = null;
      state.validMoves = [];
      renderAll();
    }
  }

  function onBarClicked(color) {
    if (state.waitingForRoll || state.gameOver || state.turn !== color) return;
    if (state.mode === 'cpu' && color === 'black') return;

    if (state.bar[color] > 0) {
      const legalDestinations = getLegalDestinations('bar', color);
      if (legalDestinations.length > 0) {
        state.selectedPoint = 'bar';
        state.validMoves = legalDestinations;
        renderAll();
        vibrate(10);
      }
    }
  }

  function onTrayClicked(color) {
    if (state.waitingForRoll || state.gameOver || state.turn !== color) return;
    const targetCode = color === 'white' ? 0 : 25;
    if (state.selectedPoint !== null && state.validMoves.includes(targetCode)) {
      executeMove(state.selectedPoint, targetCode, color);
    }
  }

  // --- RENDERING ---
  function renderAll() {
    renderPoints();
    renderBar();
    renderTrays();
    renderDice();
    updatePips();
    updateTurnDisplay();
  }

  function renderPoints() {
    for (let pt = 1; pt <= 24; pt++) {
      const pointEl = document.querySelector(`.point-triangle[data-point="${pt}"]`);
      if (!pointEl) continue;

      const stackEl = pointEl.querySelector('.checkers-stack');
      stackEl.innerHTML = '';

      // Highlight target or selection
      pointEl.classList.remove('highlight');
      if (state.validMoves.includes(pt)) {
        pointEl.classList.add('highlight');
      }

      const count = state.board[pt];
      const absCount = Math.abs(count);
      const isWhite = count > 0;
      const isSelected = state.selectedPoint === pt;

      const maxCheckers = Math.min(absCount, 5);
      for (let i = 0; i < maxCheckers; i++) {
        const checker = document.createElement('div');
        checker.className = `checker ${isWhite ? 'white' : 'black'}`;
        if (isSelected && i === maxCheckers - 1) {
          checker.classList.add('selected');
        }

        // Display number badge if more than 5 checkers on the point
        if (i === maxCheckers - 1 && absCount > 5) {
          const badge = document.createElement('span');
          badge.className = 'checker-count-badge';
          badge.textContent = absCount;
          checker.appendChild(badge);
        }
        stackEl.appendChild(checker);
      }
    }
  }

  function renderBar() {
    el.barWhite.innerHTML = '';
    el.barBlack.innerHTML = '';

    // White on Bar
    for (let i = 0; i < state.bar.white; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker white';
      if (state.selectedPoint === 'bar' && state.turn === 'white') ch.classList.add('selected');
      el.barWhite.appendChild(ch);
    }

    // Black on Bar
    for (let i = 0; i < state.bar.black; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker black';
      if (state.selectedPoint === 'bar' && state.turn === 'black') ch.classList.add('selected');
      el.barBlack.appendChild(ch);
    }
  }

  function renderTrays() {
    el.stackWhiteOff.innerHTML = '';
    el.stackBlackOff.innerHTML = '';

    el.trayWhite.classList.toggle('highlight', state.validMoves.includes(0));
    el.trayBlack.classList.toggle('highlight', state.validMoves.includes(25));

    for (let i = 0; i < state.bearOff.white; i++) {
      const piece = document.createElement('div');
      piece.className = 'tray-piece white';
      el.stackWhiteOff.appendChild(piece);
    }
    for (let i = 0; i < state.bearOff.black; i++) {
      const piece = document.createElement('div');
      piece.className = 'tray-piece black';
      el.stackBlackOff.appendChild(piece);
    }
  }

  function renderDice() {
    el.diceContainer.innerHTML = '';

    if (state.waitingForRoll) {
      el.btnRollDice.classList.remove('hidden');
    } else {
      el.btnRollDice.classList.add('hidden');
    }

    state.rolledDice.forEach((val, idx) => {
      const diceEl = document.createElement('div');
      diceEl.className = 'dice-face';
      diceEl.dataset.val = val;

      // Gray out die if already consumed
      const activeCount = state.dice.filter(d => d === val).length;
      const initialCount = state.rolledDice.filter(d => d === val).length;
      const consumedCount = initialCount - activeCount;
      const sameValIndices = state.rolledDice.reduce((acc, v, i) => (v === val ? acc.concat(i) : acc), []);

      if (sameValIndices.indexOf(idx) < consumedCount) {
        diceEl.classList.add('used');
      }

      // Draw dots
      for (let dotIdx = 0; dotIdx < val; dotIdx++) {
        const dot = document.createElement('div');
        dot.className = 'dice-dot';
        diceEl.appendChild(dot);
      }
      el.diceContainer.appendChild(diceEl);
    });
  }

  function updatePips() {
    // Pip count: sum of checkers * distance to home
    let pipWhite = state.bar.white * 25;
    let pipBlack = state.bar.black * 25;

    for (let pt = 1; pt <= 24; pt++) {
      const c = state.board[pt];
      if (c > 0) pipWhite += c * pt;
      else if (c < 0) pipBlack += Math.abs(c) * (25 - pt);
    }

    el.pipWhiteVal.textContent = pipWhite;
    el.pipBlackVal.textContent = pipBlack;
  }

  function updateTurnDisplay() {
    const dict = I18N[settings.lang];
    if (state.waitingForRoll) {
      el.turnText.textContent = state.turn === 'white' ? `${dict.white}: ${dict.rollToStart}` : `${dict.black}: ${dict.rollToStart}`;
    } else {
      el.turnText.textContent = state.turn === 'white' ? dict.whiteTurn : dict.blackTurn;
    }
  }

  function showToast(msg) {
    el.turnText.textContent = msg;
  }

  function getAnimDelay() {
    return settings.speed === 'fast' ? 350 : 650;
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // Mode Segment
    el.modeSelector.addEventListener('click', e => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      el.modeSelector.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
      el.cpuDiffRow.style.display = state.mode === 'cpu' ? 'flex' : 'none';
      vibrate(10);
    });

    // Difficulty Segment
    el.diffSelector.addEventListener('click', e => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      el.diffSelector.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.difficulty = btn.dataset.diff;
      vibrate(10);
    });

    // Main Actions
    el.btnStart.addEventListener('click', startNewGame);
    el.btnResume.addEventListener('click', resumeGame);
    el.btnRollDice.addEventListener('click', rollDice);

    // Board Sub-areas
    el.barWhite.addEventListener('click', () => onBarClicked('white'));
    el.barBlack.addEventListener('click', () => onBarClicked('black'));
    el.trayWhite.addEventListener('click', () => onTrayClicked('white'));
    el.trayBlack.addEventListener('click', () => onTrayClicked('black'));

    // Header Actions
    el.btnAudioToggle.addEventListener('click', () => {
      settings.sound = !settings.sound;
      window.storageManager.saveSettings(settings);
      applySettingsToUI();
      vibrate(15);
    });

    el.btnToTitle.addEventListener('click', () => {
      showConfirmModal(
        I18N[settings.lang].confirmTitle,
        I18N[settings.lang].confirmQuitMsg,
        returnToTitleScreen
      );
    });

    // Modals Open
    el.btnOpenRules.addEventListener('click', () => el.modalRules.classList.remove('hidden'));
    el.btnOpenStats.addEventListener('click', () => {
      loadStatsToUI();
      el.modalStats.classList.remove('hidden');
    });
    el.btnOpenSettings.addEventListener('click', () => el.modalSettings.classList.remove('hidden'));
    el.btnInGameSettings.addEventListener('click', () => el.modalSettings.classList.remove('hidden'));

    // Modals Close
    document.querySelectorAll('.modal-close').forEach(b => {
      b.addEventListener('click', e => {
        e.target.closest('.modal-backdrop').classList.add('hidden');
      });
    });

    // Settings Modal Controls
    el.settingLang.addEventListener('click', e => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      applyLanguage(btn.dataset.lang);
      applySettingsToUI();
    });

    el.settingSound.addEventListener('change', e => {
      settings.sound = e.target.checked;
      window.storageManager.saveSettings(settings);
      applySettingsToUI();
    });

    el.settingHaptics.addEventListener('change', e => {
      settings.vibrate = e.target.checked;
      window.storageManager.saveSettings(settings);
      applySettingsToUI();
    });

    el.settingSpeed.addEventListener('click', e => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      settings.speed = btn.dataset.speed;
      window.storageManager.saveSettings(settings);
      applySettingsToUI();
    });

    el.btnResetData.addEventListener('click', () => {
      showConfirmModal(
        I18N[settings.lang].confirmTitle,
        I18N[settings.lang].confirmResetMsg,
        () => {
          window.storageManager.resetAllData();
          settings = window.storageManager.getSettings();
          applySettingsToUI();
          applyLanguage(settings.lang);
          checkSavedGamePresence();
          el.modalSettings.classList.add('hidden');
        }
      );
    });

    // Result Modal Actions
    el.btnPlayAgain.addEventListener('click', () => {
      el.modalResult.classList.add('hidden');
      startNewGame();
    });
    el.btnResultTitle.addEventListener('click', () => {
      el.modalResult.classList.add('hidden');
      returnToTitleScreen();
    });
    el.btnShareX.addEventListener('click', shareResultOnX);
  }

  function loadStatsToUI() {
    const stats = window.storageManager.getStats();
    document.getElementById('stat-matches').textContent = stats.matches;
    document.getElementById('stat-wins').textContent = stats.wins;
    const rate = stats.matches > 0 ? Math.round((stats.wins / stats.matches) * 100) : 0;
    document.getElementById('stat-winrate').textContent = `${rate}%`;
    document.getElementById('stat-gammons').textContent = stats.gammons + stats.backgammons;
  }

  function showConfirmModal(title, message, onOk) {
    el.confirmTitle.textContent = title;
    el.confirmMessage.textContent = message;
    el.modalConfirm.classList.remove('hidden');

    const cleanUp = () => {
      el.confirmOkBtn.removeEventListener('click', handleOk);
      el.confirmCancelBtn.removeEventListener('click', handleCancel);
      el.modalConfirm.classList.add('hidden');
    };

    const handleOk = () => {
      cleanUp();
      if (onOk) onOk();
    };

    const handleCancel = () => {
      cleanUp();
    };

    el.confirmOkBtn.addEventListener('click', handleOk);
    el.confirmCancelBtn.addEventListener('click', handleCancel);
  }

  function shareResultOnX() {
    const text = encodeURIComponent(I18N[settings.lang].xShareTemplate);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  }

  // Launch on DOM Content Loaded
  window.addEventListener('DOMContentLoaded', initApp);
})();
