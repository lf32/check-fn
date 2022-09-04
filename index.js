"use strict"
const checkNum = (b) => { if (typeof (b) === "number") { return true } else { return false } }
const checkBigInt = (b) => { if (typeof (b) === "bigint") { return true } else { return false } }
const checkStr = (b) => { if (typeof (b) === "string") { return true } else { return false } }
const checkBool = (b) => { if (typeof (b) === "boolean") { return true } else { return false } }
const checkSym = (b) => { if (typeof (b) === "symbol") { return true } else { return false } }
const checkUnd = (b) => { if (typeof (b) === "undefined") { return true } else { return false } }
const checkObj = (b) => { if (typeof (b) === "object") { return true } else { return false } }
const checkFn = (b) => { if (typeof (b) === "function") { return true } else { return false } }

module.exports = {
    checkNum : checkNum,
    checkBigInt : checkBigInt,
    checkStr : checkStr,
    checkBool : checkBool,
    checkSym : checkSym,
    checkUnd : checkUnd,
    checkObj : checkObj,
    checkFn : checkFn
}
