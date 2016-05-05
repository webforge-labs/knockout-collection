

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

collection.removeElement(item1);
collection.removeElement(item2);

expect(collection.toArray()).to.have.length(0);
```

## api

If you need direct access to the underlying `ko.observableArray` you can use `collection.items`.

#### .add(item)

adds an item to the collection which is identified by the value of the (observable-)property with name `options.key`.  
**The item is only added, if it isn't already contained in the collection**

#### .removeElement(item)

removes the item from the collection. If it isnt available in the collection nothing is done

#### .get(keyValue)

returns the item with the value of the (observable-)property with name `options.key` equal to `keyValue`.  
it will return `undefined` if the collection does not contain the item.

#### .contains(item)

checks if the item is contained in the collection.

#### .toArray()

returns an array with all items of the collection. The array is a copy.
