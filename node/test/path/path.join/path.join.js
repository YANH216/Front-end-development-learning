const path = require('path');

// ../会抵消前面的一层路径， ../../会抵消两层
// path.join  路径拼接
const pathStr = path.join('/a', '/b/c', '../', './d', '/e')
console.log(pathStr);   // \a\b\d\e

