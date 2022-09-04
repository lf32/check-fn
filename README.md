# check-fn

[![npm version](https://img.shields.io/npm/v/check-fn.svg?style=flat-square)](https://www.npmjs.org/package/check-fn)
[![install size](https://packagephobia.com/badge?p=check-fn)](https://packagephobia.com/result?p=check-fn)
[![npm downloads](https://img.shields.io/npm/dt/check-fn.svg?style=flat-square)](http://npm-stat.com/charts.html?package=check-fn)

## What is dis?

> A list of bool functions that checks for type of a JS variable .

This uses the strict equality operator (===) while checking.

## Content
  - [What is dis?](#what-is-dis)
  - [Content](#content)
  - [Installation](#installation)
  - [Important](#important)
  - [Usage](#usage)
    - [checkNum](#checknum)
    - [checkBigInt](#checkbigint)
    - [checkStr](#checkstr)
    - [checkBool](#checkbool)
    - [checkSym](#checksym)
    - [checkUnd](#checkund)
    - [checkObj](#checkobj)
    - [checkFn](#checkfn)
  - [LICENSE](#license)


## Installation

```
npm i check-fn --save
```

## Important 
> Add this line at your top of the javascript file and import any function you want.

```javascript 
import { 
    checkNum, 
    checkBigInt,
    checkStr,
    checkBool,
    checkSym,
    checkUnd,
    checkObj,
    checkFn
 } from 'check-fn';
```

## Usage

> Make use of the following functions in your code. 

###  checkNum

```javascript 
checkNum(42); 
// true
```

###  checkBigInt

```javascript 
checkBigInt(42n); 
// true
```

###  checkStr

```javascript 
checkStr("foo"); 
// true
```

###  checkBool

```javascript 
checkBool(true); 
// true
```

###  checkSym

```javascript 
checkSym(Symbol()); 
// true
```

###  checkUnd

```javascript 
let bar; 
checkUnd(bar); 
// true
```

###  checkObj

```javascript 
checkObj({"rainbow": "🌈"}); 
// true
```

###  checkFn

```javascript 
const bazz = () => { console.log("🦄") }
checkFn(bazz); 
// true
```

> **Congratulations You Can make your Code even shorter than before.**

## LICENSE

 MIT License