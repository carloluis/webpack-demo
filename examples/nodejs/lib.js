const fs = __non_webpack_require__('fs');
const path = __non_webpack_require__('path');

console.log('fs.readdir type:', typeof fs.readdir);

function foo() {
    console.log('foo using -> path.join:', path.join('/users', 'carloluis'));
}

module.exports = {
    reformat: require('reformat-number'),
    foo
};
