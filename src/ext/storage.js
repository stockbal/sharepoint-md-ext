export class ExtStorage {
  /**
   * Returns the current extension settings
   * @returns {Promise<any>}
   */
  static getSettings() {
    return new Promise((resolve, reject) => {
      // read current extension settings
      chrome.storage.sync.get('settings', ({ settings }) => {
        if (!settings) {
          settings = {};
        }

        resolve(settings);
      });
    });
  }

  /**
   * Sets the current extension settings
   * @param settings the new settings
   * @param afterSetFunction callback function after
   */
  static setSettings(settings, afterSetFunction = () => {}) {
    chrome.storage.sync.set({ settings }, () => {
      afterSetFunction();
    });
  }
}
