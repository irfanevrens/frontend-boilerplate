### Coding standarts

* Use `const` for _read-only_ declarations.
```js
const apiUrl = '/api/v1/auth';
```

* If you must reassign references, use `let` instead of `var`
```js
  let loggedIn = false;
```

* Use the literal syntax for object creation.
```js
  // bad
  const item = new Object();

  // good
  const item = {};
```
* Use single quotes instead of double quotes
```js
  // bad
  let greeting = "Hello!";

  // good
  let greeting = 'Hello!';
```
* Use template strings instead of `+`
```js
  // bad
  let greeting = 'Hello '+username+'!';

  // good
  let greeting = 'Hello ${username}!';
```

* Use object method shorthand
```js
  // bad
  const atom = {
    value: 1,

    addValue: function (value) {
      return atom.value + value;
    },
  };

  // good
  const atom = {
    value: 1,

    addValue(value) {
      return atom.value + value;
    },
  };
```

* Use the literal syntax for Array creation like we did with objects
```js
  // bad
  const items = new Array();

  // good
  const items = [];
```

* **Important**  Never name a parameter `arguments`. This will override the `arguments` object that is given to every function scope.

  ```js
  // bad
  function foo(name, options, arguments) {
    // ...
  }

  // good
  function foo(name, options, args) {
    // ...
  }
  ```

* Use default parameter syntax rather than mutating function arguments.

  ```js
  // really bad
  function handleThings(opts) {
    // No! We shouldn't mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
  }

  // still bad
  function handleThings(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // ...
  }

  // good ES6 feature
  function handleThings(opts = {}) {
    // ...
  }

  ```
* Never mutate or reassign parameters in functions.

* Use arrow functions. (We know it is hard to develop a new habit but please)

  ```js
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```

* Always use `class`. Avoid manipulating `prototype` directly.

  ```js
    // bad
    function Queue(contents = []) {
      this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    };

    // good
    class Queue {
      constructor(contents = []) {
        this.queue = [...contents];
      }
      pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
      }
    }
  ```

* Use `extends` for inheritance

  ```js
  // bad
  const inherits = require('inherits');
  function PeekableQueue(contents) {
    Queue.apply(this, contents);
  }
  inherits(PeekableQueue, Queue);
  PeekableQueue.prototype.peek = function () {
    return this.queue[0];
  };

  // good
  class PeekableQueue extends Queue {
    peek() {
      return this.queue[0];
    }
  }
  ```

* Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

  ```js
  // bad
  const AirbnbStyleGuide = require('./AirbnbStyleGuide');
  module.exports = AirbnbStyleGuide.es6;

  // ok
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  export default AirbnbStyleGuide.es6;

  // best
  import { es6 } from './AirbnbStyleGuide';
  export default es6;
  ```

* Use shortcuts for booleans, but explicit comparisons for strings and numbers.

  ```js
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }
  ```

* Avoid unnecessary ternary statements
  ```js
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;

  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
  ```

* Use braces with all multi-line blocks
  ```js
  // bad
  if (test)
    return false;

  // good
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function foo() { return false; }

  // good
  function bar() {
    return false;
  }
  ```

*  Use `/** ... */` for multi-line comments.
*  Start all comments with a __space__ to make it easier to read.

* Use // FIXME: to annotate problems.
  ```js
  class Calculator extends Abacus {
   constructor() {
     super();

     // FIXME: shouldn't use a global here
     total = 0;
   }
  }
  ```

  * Use soft tabs (space character) set to 2 spaces.

### Naming Conventions

* Avoid single letter names. Be descriptive with your naming
* Use camelCase when naming `objects`, `functions`, and `instances`.
* Use PascalCase only when naming `constructors` or `classes`.
* **Important** A base filename should exactly match the name of its default export.
```js
// CheckBox.js
class CheckBox {
  // ...
}
export default CheckBox;
//Another file
import CheckBox from './CheckBox.js';
```

* For default object properties use `Object.assign` in constructor or functions
```js
class Automobile{
  constructor(options){
    let defaults = {some:'default'};
    Object.assign(defaults,options);
    this.options = defaults;
  }
}
```
