/**
 * @see {@link https://developer.chrome.com/extensions/manifest}
 */
module.exports = {
  name: '__MSG_extName__',
  description: '__MSG_extDescription__',
  author: 'Ludwig Stockbauer-Muhr <ludwig.stockbauer-muhr@msg.group>',
  version: '0.1.0',
  icons: {
    '16': 'icons/Icon16.png',
    '32': 'icons/Icon32.png',
    '48': 'icons/Icon48.png',
    '64': 'icons/Icon64.png',
    '128': 'icons/Icon128.png'
  },
  /**
   * @see {@link https://developer.chrome.com/extensions/declare_permissions}
   */
  permissions: [
    '<all_urls>',
    '*://*/*',
    'contextMenus',
    'activeTab',
    'tabs',
    'background',
    'unlimitedStorage',
    'storage'
  ],
  browser_action: {
    // default_title: 'title',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  commands: {},
  content_scripts: [
    {
      js: ['js/manifest.js', 'js/vendor.js', 'js/content.js'],
      css: ['css/content.css'],
      run_at: 'document_end',
      matches: ['<all_urls>'],
      all_frames: true
    }
  ],
  default_locale: 'en',
  manifest_version: 2,
  content_security_policy: "script-src 'self'; object-src 'self'",
  web_accessible_resources: ['js/content.js', 'css/content.css', 'fonts/element-icons.ttf']
};
