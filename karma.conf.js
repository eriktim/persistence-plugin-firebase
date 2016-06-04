module.exports = function(config) {
  config.set({
    frameworks: ['jspm', 'jasmine'],
    jspm: {
      config: 'jspm.config.js',
      browser: 'jspm.browser.js',
      loadFiles: ['test/unit/**/*.spec.js'],
      serveFiles: ['src/**/*', 'test/unit/**/*.js']
    },
    files: [
      'node_modules/jasmine-promises/dist/jasmine-promises.js'
    ],
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
