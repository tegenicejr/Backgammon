// Storage Manager for Games Clubhouse: Backgammon
class StorageManager {
  constructor() {
    this.SETTINGS_KEY = 'clubhouse_bg_settings';
    this.SAVE_KEY = 'clubhouse_bg_gamestate';
    this.STATS_KEY = 'clubhouse_bg_stats';

    this.defaultSettings = {
      lang: 'en',
      sound: true,
      vibrate: true,
      speed: 'normal'
    };

    this.defaultStats = {
      matches: 0,
      wins: 0,
      gammons: 0,
      backgammons: 0
    };
  }

  getSettings() {
    try {
      const data = localStorage.getItem(this.SETTINGS_KEY);
      return data ? { ...this.defaultSettings, ...JSON.parse(data) } : { ...this.defaultSettings };
    } catch (e) {
      return { ...this.defaultSettings };
    }
  }

  saveSettings(settings) {
    try {
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  getStats() {
    try {
      const data = localStorage.getItem(this.STATS_KEY);
      return data ? { ...this.defaultStats, ...JSON.parse(data) } : { ...this.defaultStats };
    } catch (e) {
      return { ...this.defaultStats };
    }
  }

  saveStats(stats) {
    try {
      localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save stats:', e);
    }
  }

  recordMatchResult(isWin, winType) {
    const stats = this.getStats();
    stats.matches += 1;
    if (isWin) {
      stats.wins += 1;
      if (winType === 'gammon') stats.gammons += 1;
      if (winType === 'backgammon') stats.backgammons += 1;
    }
    this.saveStats(stats);
    return stats;
  }

  getSavedGame() {
    try {
      const data = localStorage.getItem(this.SAVE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  saveGame(state) {
    try {
      localStorage.setItem(this.SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save game state:', e);
    }
  }

  clearSavedGame() {
    try {
      localStorage.removeItem(this.SAVE_KEY);
    } catch (e) {
      console.error('Failed to clear saved game:', e);
    }
  }

  resetAllData() {
    try {
      localStorage.removeItem(this.SETTINGS_KEY);
      localStorage.removeItem(this.SAVE_KEY);
      localStorage.removeItem(this.STATS_KEY);
    } catch (e) {
      console.error('Failed to reset data:', e);
    }
  }
}

window.storageManager = new StorageManager();
