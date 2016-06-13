# Ember CLI Mirage Giftwrapped

Ember CLI Mirage is an awesome library, but it can't be used with pre-CLI
Ember apps. And sometimes that is
[exactly what you want](https://github.com/samselikoff/ember-cli-mirage/issues/641).

This repo is a Ember CLI Mirage v0.1.11 packaged together with its dependencies 
to a standalone JS file ready for use in pre-CLI Ember apps.

[ember-giftwrap](https://github.com/ef4/ember-giftwrap) was used for packaging. 

Confirmed to work with Ember 1.1

## Installation

Copy the files from `vendor` folder to your Ember app `vendor` folder
and add them to the vendor assets being built.

Order in which files are added is not important.
 
## Usage 

See `example-config.js` for a complete usage example. Server that does nothing
looks like this:

```js
var Server = GiftWrap.require('ember-cli-mirage/server').default;

new Server({
  environment: 'development',

  factories: {},
  fixtures: {},
  models: {},
  serializers: {},

  scenarios: { default: function() {} },
  baseConfig: function() {}
});
```