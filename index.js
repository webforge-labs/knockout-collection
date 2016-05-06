define(['knockout'], function(ko) {

  return function KnockoutCollection(items, options) {
    var that = this;

    if (options && options.reference === true) {
      this.items = items;
    } else {
      this.items = ko.observableArray(items);
    }

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

    this.remove = function(item) {
      var key = that.key(item);

      var items = that.items();
      for (var index = 0; index < items.length; index++) {
        if (that.key(items[index]) == key) {
          that.items.splice(index, 1);
          return;
        }
      }
    };

    this.removeAll = function() {
      that.items.removeAll();
    };

    this.toArray = function() {
      return that.items.slice();
    };

    // initialize corerctly, because the first subscription will not be triggered
    this.length = that.items().length;
    that.items.subscribe(function(items) {
      that.length = items.length;
    });
  };
});