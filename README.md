

# knockout-collection [![Build Status](https://travis-ci.org/webforge-labs/knockout-collection.svg?branch=master)](https://travis-ci.org/webforge-labs/knockout-collection)

A knockout observable array as hashmap

## usage

```js
var item1 = {
  id: ko.observable(1),
  label: 'Item 1'
};

var item2 = {
  id: ko.observable(2),
  label: 'Item 2'
}

var collection = new KnockoutCollection([item1], { key: 'id' });

expect(collection.get(2)).to.be.undefined;

collection.add(item2);

expect(collection.get(2)).to.have.property('label', 'Item 2');

collection.remove(item1);
collection.remove(item2);

expect(collection.toArray()).to.have.length(0);
```

## api

If you need direct access to the underlying `ko.observableArray` you can use `collection.items`. Use this only to bind, not to modify.

### construction

You can pass an array as items.
```js
new KnockoutCollection(['my', 'array', 'items']);
```

If you want to manage an `ko.observableArray` you can pass it as `items` and set the option: `reference`:

```js
var items = ko.observableArray([item1, item2]);
var collection = new KnockoutCollection(items, { key: 'id', reference: true });

collection.remove(item1);

// items() will be [item2]
```

#### .add(item)

adds an item to the collection which is identified by the value of the (observable-)property with name `options.key`.  
**The item is only added, if it isn't already contained in the collection**

#### .remove(item)

removes the item from the collection. If it isnt available in the collection nothing is done

#### .get(keyValue)

returns the item with the value of the (observable-)property with name `options.key` equal to `keyValue`.  
it will return `undefined` if the collection does not contain the item.

#### .contains(item)

checks if the item is contained in the collection.

#### .length

You can use the length property as you would use it for an array:

```js
var collection = new KnockoutCollection(['i1', 'i2']);

console.log(collection.length === 2); // is true
```

#### .removeAll()

Removes all items from the collection
#### .toArray()

returns an array with all items of the collection. The array is a copy.
