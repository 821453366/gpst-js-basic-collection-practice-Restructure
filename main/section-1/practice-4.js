'use strict';

'use strict';

function includes(collection, ch) {
    return collection.indexOf(ch) > -1;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let array = [];

    let result = collectionA.filter(item => includes(objectB.value, item.key));
    result.forEach(item => array.push(item.key));

    return array;
}
