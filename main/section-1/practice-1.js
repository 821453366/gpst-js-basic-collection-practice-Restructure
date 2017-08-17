'use strict';

function includes(collection, ch) {

    return  collection.indexOf(ch) > -1;
}

module.exports = function collectSameElements(collectionA, collectionB) {

    return collectionA.filter(item => includes(collectionB, item));
}
