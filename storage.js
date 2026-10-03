/**
 * LocalStorage 永続化＆I18N辞書基盤
 */
const I18N = {
  en: {
    backClubhouse: "‹ Back to Clubhouse",
    title: "Backgammon",
    subtitle: "Classic Board Game Collection",
    start: "Start Game",
    resume: "Resume Game",
    howToPlay: "How to Play",
    stats: "Achievements",
    settings: "Settings",
    mode: "Game Mode",
    single: "vs CPU",
    passPlay: "Pass & Play",
    difficulty: "CPU Skill",
    easy: "Easy",
    normal: "Normal",
    hard: "Hard",
    white: "White",
    black: "Black",
    pip: "Pip",
    rollDice: "Roll Dice",
    rollForTurn: "Opening Roll",
    rollDescription: "Highest roll plays first using both dice.",
    whiteTurn: "White's Turn",
    blackTurn: "Black's Turn",
    cpuThinking: "CPU Thinking...",
    confirmReset: "Reset saved state and start new game?",
    confirmTitle: "Return to title? Unsaved progress will be preserved.",
    giveUp: "Resign",
    victory: "Victory!",
    defeat: "Defeat...",
    shareText: "I just played Backgammon on Games Clubhouse!",
    shareBtn: "Share on X",
    playAgain: "Play Again",
    achievementsTitle: "Achievements",
    settingsTitle: "Game Settings",
    language: "Language",
    sound: "Sound FX",
    vibration: "Haptics",
    fastAnim: "Fast Animation",
    clearData: "Reset All Data",
    dataCleared: "All game data cleared."
  },
  ja: {
    backClubhouse: "‹ CLUB HOUSEへ戻る",
    title: "バックギャモン",
    subtitle: "クラシックボードゲーム コレクション",
    start: "ゲームスタート",
    resume: "つづきから",
    howToPlay: "あそびかた",
    stats: "実績・戦績",
    settings: "設定",
    mode: "対戦モード",
    single: "ひとりで（vs CPU）",
    passPlay: "2人で対戦",
    difficulty: "CPUの強さ",
    easy: "初級",
    normal: "中級",
    hard: "上級",
    white: "白 (先攻手)",
    black: "黒 (後攻手)",
    pip: "ピップ",
    rollDice: "ダイスを振る",
    rollForTurn: "オープニングロール (手番決定)",
    rollDescription: "双方がダイスを1個ずつ振り、大きい目が出た側が先攻となります。",
    whiteTurn: "白のターン",
    blackTurn: "黒のターン",
    cpuThinking: "CPUが考え中...",
    confirmReset: "進行中のゲームを破棄して新しく始めますか？",
    confirmTitle: "タイトル画面に戻りますか？",
    giveUp: "投了（ギブアップ）",
    victory: "勝利！",
    defeat: "敗北...",
    shareText: "Games Clubhouseのバックギャモンで対局しました！",
    shareBtn: "Xで共有する",
    playAgain: "もう一度遊ぶ",
    achievementsTitle: "実績・コレクション",
    settingsTitle: "ゲーム設定",
    language: "言語 (Language)",
    sound: "効果音",
    vibration: "振動 (バイブレーション)",
    fastAnim: "アニメーション高速化",
    clearData: "戦績・設定の初期化",
    dataCleared: "全データをリセットしました。"
  }
};

class StorageManager {
  constructor() {
    this.prefix = "gc_bg_";
  }

  getSettings() {
    const raw = localStorage.getItem(this.prefix + "settings");
    return raw ? JSON.parse(raw) : {
      lang: "ja",
      sound: true,
      haptics: true,
      fastAnim: false
    };
  }

  saveSettings(settings) {
    localStorage.setItem(this.prefix + "settings", JSON.stringify(settings));
  }

  getGameState() {
    const raw = localStorage.getItem(this.prefix + "gamestate");
    return raw ? JSON.parse(raw) : null;
  }

  saveGameState(state) {
    localStorage.setItem(this.prefix + "gamestate", JSON.stringify(state));
  }

  clearGameState() {
    localStorage.removeItem(this.prefix + "gamestate");
  }

  getAchievements() {
    const raw = localStorage.getItem(this.prefix + "achievements");
    return raw ? JSON.parse(raw) : {
      firstWin: false,
      gammonWin: false,
      backgammonWin: false,
      sixPrime: false
    };
  }

  unlockAchievement(key) {
    const ach = this.getAchievements();
    if (!ach[key]) {
      ach[key] = true;
      localStorage.setItem(this.prefix + "achievements", JSON.stringify(ach));
    }
  }

  clearAll() {
    localStorage.removeItem(this.prefix + "settings");
    localStorage.removeItem(this.prefix + "gamestate");
    localStorage.removeItem(this.prefix + "achievements");
  }
}

window.storageManager = new StorageManager();
