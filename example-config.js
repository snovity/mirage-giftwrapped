// mirage imports
var mirageImport = GiftWrap.require('ember-cli-mirage');

Mirage = mirageImport.default;
faker = mirageImport.faker;

// server configs
var mirageFactories = {
  user: Mirage.Factory.extend({
    firstName: faker.name.firstName,
    lastName: faker.name.lastName,
    email: faker.internet.email
  })
};

var mirageScenarios = {
  default: function(server) {
    server.createList('user', 3);
  }  
};

var mirageEndpoints = function() {
  this.get('/users')
};

// server instantiation
var Server = GiftWrap.require('ember-cli-mirage/server').default;

new Server({
  environment: 'development',

  factories: mirageFactories,
  fixtures: {},
  models: {},
  serializers: {},

  scenarios: mirageScenarios,
  baseConfig: mirageEndpoints,

  testConfig: undefined
});