define(['knockout'], function(ko) {

  // Interface: http://www.doctrine-project.org/api/common/2.5/class-Doctrine.Common.Collections.Collection.html
  return function KnockoutCollection(items, options) {
    var that = this;

    this.items = ko.observableArray(items);

    this.key = function(item) {
      return ko.unwrap(item[options.key]);
    };

    this.add = function(item) {
      if (!that.contains(item)) {
        this.items.push(item);
      }
    };

    this.containsKey = function(key) {
      var items = that.items();
      for (var index = 0; index < items.length; index++) {
        if (that.key(items[index]) == key) {
          return true;
        }
      }

      return false;
    };

    this.contains = function(item) {
      return that.containsKey(that.key(item));
    };

    this.get = function(key) {
      var items = that.items();
      for (var index = 0; index < items.length; index++) {
        if (that.key(items[index]) == key) {
          return items[index];
        }
      }

      return undefined;
    };

    this.removeElement = function(item) {
      var key = that.key(item);

      var items = that.items();
      for (var index = 0; index < items.length; index++) {
        if (that.key(items[index]) == key) {
          that.items.splice(index, 1);
          return;
        }
      }
    };

    this.toArray = function() {
      return that.items.slice();
    };
  };
});