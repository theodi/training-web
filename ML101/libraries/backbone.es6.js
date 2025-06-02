/**
 * 2021-09-07
 * https://github.com/adaptlearning/adapt_framework/issues/2697
 * https://github.com/adaptlearning/adapt_framework/issues/3236
 * Added ES6-style constructor and static property inheritance rather than just
 * copying the enumerable static properties each time.
 */
define('backbone.es6', [
  'underscore',
  'backbone',
  'backbone.controller'
], function(_, Backbone) {

  var hasNativeClassSupport = true;
  try {
    eval('class A {}');
  } catch (err) {
    hasNativeClassSupport = false;
  }

  var classes = [
    Backbone.View,
    Backbone.Model,
    Backbone.Collection,
    Backbone.Router,
    Backbone.History,
    Backbone.Controller
  ];

  if (hasNativeClassSupport) {
    // Transform Backbone classes into ES6 Classes
    ['View', 'Model', 'Collection', 'Router', 'History', 'Controller'].forEach(function(name) {
      Backbone['_' + name] = Backbone[name];
      Backbone[name] = eval('class ' + name + ' extends Backbone["_' + name + '"] { }; ' + name + ';');
    });
  }

  var getChild = function (parent, protoProps) {
    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    var hasConstructor = protoProps && _.has(protoProps, 'constructor');
    if (hasNativeClassSupport && hasConstructor) {
      return eval('class e extends protoProps.constructor { }; e;');
    }
    if (hasNativeClassSupport) {
      return eval('class e extends parent { }; e;');
    }
    if (hasConstructor) {
      return protoProps.constructor;
    }
    return function () { return parent.apply(this, arguments); };
  };

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child = getChild(parent, protoProps);

    // Create static property inheritance chain
    Object.setPrototypeOf(child, parent);

    // Add new static properties values to the constructor function, if supplied.
    _.extend(child, staticProps);

    // Set the prototype  inheritance chain
    // Add new prototype properties to class prototype
    if (!hasNativeClassSupport) {
      child.prototype = _.create(parent.prototype, protoProps);
    } else {
      child.prototype = {};
      Object.setPrototypeOf(child.prototype, parent.prototype);
      _.extend(child.prototype, protoProps);
    }
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  classes.forEach(function(Class) {
    Class.extend = extend;
  });

  // Fixes for Backbone.Collection in ES6 class environment
  Backbone.Collection.prototype.model = Backbone.Model;
  Backbone.Collection.prototype.modelId = function(t) {
    return t[(this.model.prototype && this.model.prototype.idAttribute) || 'id'];
  };
  Backbone.Collection.prototype._prepareModel = function(t, e) {
    if (this._isModel(t)) {
      if (!t.collection) {
        t.collection = this;
      }
      return t;
    }
    e = e ? _.clone(e) : {};
    e.collection = this;
    var n;
    if (this.model === Backbone.Model || this.model.prototype instanceof Backbone.Model) {
      var Class = this.model;
      n = new Class(t, e);
    } else {
      n = this.model(t, e);
    }
    if (!n.validationError) {
      return n;
    }
    this.trigger('invalid', this, n.validationError, e);
    return false;
  };

});
