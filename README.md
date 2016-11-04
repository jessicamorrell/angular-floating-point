# angular-floating-point
Pretty floating point calculation results for Angular.

### Demo
Take a look at the [demo](https://mattspaulding.github.io/angular-floating-point/)

### Installation

Using bower:

```sh
$ bower install angular-floating-point --save
```

### Example

```js
angular.module('myApp', ['floatingPoint']).
  controller('myCtrl', function(floatingPoint) {
    
    var uglyResult = 6.1 * 6; //36.599999999999994
    var prettyResult = floatingPoint.makePretty(6.1 * 6); //36.6
  }
);
```
