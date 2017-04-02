# Example

```
$ npm install sensitive-words --save
```

```javascript
// const { sensitiveWords } = require('sensitive-words');
// ES2015 modules
import { sensitiveWords } from 'sensitive-words';

const filtered = sensitiveWords(
  'The new Apple macbook pro has touchbar',
  ['macbook', 'touchbar', 'new']
);

console.log(filtered);
// The xxx Apple xxx pro has xxx
```
