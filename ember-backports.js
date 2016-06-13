// backported Ember functions used by Mirage
Ember.isNone = function(obj) {
  return obj === null || obj === undefined;
};

Ember.isEmpty = function(obj) {
  var none = Ember.isNone(obj);
  if (none) {
    return none;
  }

  if (typeof obj.size === 'number') {
    return !obj.size;
  }

  var objectType = typeof obj;

  if (objectType === 'object') {
    var size = Ember.get(obj, 'size');
    if (typeof size === 'number') {
      return !size;
    }
  }

  if (typeof obj.length === 'number' && objectType !== 'function') {
    return !obj.length;
  }

  if (objectType === 'object') {
    var length = Ember.get(obj, 'length');
    if (typeof length === 'number') {
      return !length;
    }
  }

  return false;
};

Ember.isBlank = function(obj) {
  return Ember.isEmpty(obj) || typeof obj === 'string' && obj.match(/\S/) === null;
};