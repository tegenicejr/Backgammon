class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'gch_bg_settings';
    this.STATE_KEY = 'gch_bg_save';
    this.STATS_KEY = 'gch_bg_stats';
  }

  getSettings() {
    const raw = localStorage.getItem(this.SETTINGS_KEY);
    return raw ? JSON.parse(raw) : {
      lang: 'en',
      sound: true,
      haptics: true,
      fastAnim: false
    };
  }

  saveSettings(settings) {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
  }

  getStats() {
    const raw = localStorage.getItem(this.STATS_KEY);
    return raw ? JSON.parse(raw) : {
      gamesPlayed: 0,
      whiteWins: 0,
      blackWins: 0,
      gammons: 0,
      backgammons: 0
    };
  }

  saveStats(stats) {
    localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
  }

  getSaveState() {
    const raw = localStorage.getItem(this.STATE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  saveState(state) {
    localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
  }

  clearSaveState() {
    localStorage.removeItem(this.STATE_KEY);
  }

  clearAllData() {
    localStorage.removeItem(this.SETTINGS_KEY);
    localStorage.removeItem(this.STATE_KEY);
    localStorage.removeItem(this.STATS_KEY);
  }
}

const storage = new StorageManager();
