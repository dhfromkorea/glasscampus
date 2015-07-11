var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'glasscampus'
    },
    port: 3000,
    db: 'mongodb://localhost/glasscampus-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'glasscampus'
    },
    port: 3000,
    db: 'mongodb://localhost/glasscampus-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'glasscampus'
    },
    port: 3000,
    db: 'mongodb://localhost/glasscampus-production'
  }
};

module.exports = config[env];
