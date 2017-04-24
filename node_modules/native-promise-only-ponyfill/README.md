# native-promise-only-ponyfill

A thin wrapper for [Native Promise Only](https://github.com/getify/native-promise-only). When Native Promise Only determines that the Promise API is not natively available, it sets the global `Promise` variable. By using this module instead of Native Promise Only, the global `Promise` variable will not be set.

## Usage

```javascript
var Promise = require('native-promise-only-ponyfill');
```
