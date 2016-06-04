var gulp = require('gulp');
var Karma = require('karma').Server;

gulp.task('test', function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js'
  }, done).start();
});

gulp.task('cover', function(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    coverageReporter: {
      includeAllSources: true,
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      },
      reporters: [
        {type: 'html', dir: 'coverage'},
        {type: 'text'}
      ]
    }
  }, done).start();
});
