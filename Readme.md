###Peela
[![build status](https://secure.travis-ci.org/rootslab/peela.png?branch=master)](http://travis-ci.org/rootslab/peela) 
[![NPM version](https://badge.fury.io/js/peela.png)](http://badge.fury.io/js/peela)

[![NPM](https://nodei.co/npm/peela.png?downloads=true&stars=true)](https://nodei.co/npm/peela/)

[![NPM](https://nodei.co/npm-dl/peela.png)](https://nodei.co/npm/peela/)

> **_Peela_**, a tiny (LIFO) **Stack**.

> If you need a fast (FIFO) __Queue__, try __[Train](https://github.com/rootslab/train)__.

###Install

```bash
$ npm install peela [-g]
// clone repo
$ git clone git@github.com:rootslab/peela.git
```
> __require__ 

```javascript
var Peela = require( 'peela' );
```
> See [examples](example/).

###Run Tests

```bash
$ cd peela/
$ npm test
```
###Constructor

> Create an instance, optionally with an Array of elements.

```javascript
Peela( [ Array elements ] )
// or
new Peela( [ Array elements ] )
```

###Properties

```javascript
// an array representing the stack
Peela.stack : Array
```

###Methods

> Arguments within [ ] are optional.

```javascript
/*
 * Push one or multiple objects into the stack. it uses
 * the same signature as Array#push.
 * It returns the current number of items.
 */
Peela#push( [ Object obj1 [, Object obj2 .. ] ] ) : Number

/*
 * Concatenate an Array to the stack head, optionally reversing it
 * before the operation.
 * It returns the current Peela instance.
 *
 * NOTE: It accepts a single argument, that could be also
 * a generic element.
 * NOTE: the action of reversing the array to concatenate, could be
 * useful if you want to re-push ( previously popped ) K items into
 * the stack, for example, try:
 * var p = Peela( [ 0, 1, 2, 3, 4 ] );
 * p.concat( p.pop( 3 ), true )
 */
Peela#concat( [ Array array [, Boolean reverse ] ] ) : Peela

/* 
 * Evict one or multiple elements, if a number k was specified,
 * it returns an array of K elements, with K <= k.
 * If k > size(), all elements are returned.
 *
 * NOTE: #pop() a single element from the stack, it does not
 * return an Array, but the element itself.
 * NOTE: For popping all elements you could also do Peela#pop( Infinity )
 */
Peela#pop( [ Number k ] ) : Array

/*
 * Get the head element or an element at a certain index.
 */
Peela#head( [ Number index ] ) : Object

/*
 * Get the stack size.
 */
Peela#size() : Number

/*
 * Return the index of an element in the stack, optionally
 * starting the search from an offset index.
 * If element was not found, it returns -1.
 */
Peela#indexOf( Object el [, Number offset ] ) : Object

/*
 * Empty the stack for default.
 * If bool is set to false, no action will be done.
 * It returns the number of elements evicted.
 */
Peela#flush( [ Boolean bool ] ) : Number

```

------------------------------------------------------------------------


### MIT License

> Copyright (c) 2014 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN T