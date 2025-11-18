function add(x: number, y: number): number          { return x + y; }
function subtract(x: number, y: number): number     { return x - y; }
function multiply(x: number, y: number): number     { return x * y; }
function divide(x: number, y: number): number       { return Math.trunc(x / y); }
function mod(x: number, y: number): number          { return x % y; }

function andFunc(x: boolean, y: boolean): boolean   { return x && y; }
function orFunc(x: boolean, y: boolean): boolean    { return x || y; }
function notFunc(x: boolean): boolean               { return !x; }

function greaterThan(x: number, y: number): boolean { return x > y; }
function lessEqual(x: number, y: number): boolean   { return x <= y; }
function equal(x: number, y: number): boolean       { return x === y; }