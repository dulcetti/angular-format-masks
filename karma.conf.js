module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-touch/angular-touch.js',
      './bower_components/angular-sanitize/angular-sanitize.js',
      './bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'tests/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['spec', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    htmlReporter: {
      outputFile: 'tests/units.html',
      pageTitle: 'Testes',
      subPageTitle: 'Descrição de todos os testes do projeto',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    }
  })
}
