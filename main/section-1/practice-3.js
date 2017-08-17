'use strict';

function includes(collection, ch) {
    return collection.indexOf(ch) > -1;
}

module.exports = function collectSameElements(collectionA, objectB) {

    return collectionA.filter(item => includes(objectB.value, item));
}
