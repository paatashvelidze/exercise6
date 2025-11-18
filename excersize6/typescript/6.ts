export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    return a / b;
}

export function mod(a: number, b: number): number {
    return a % b;
}

export function andFunc(a: boolean, b: boolean): boolean {
    return a && b;
}

export function orFunc(a: boolean, b: boolean): boolean {
    return a || b;
}

export function notFunc(a: boolean): boolean {
    return !a;
}

export function greaterThan(a: number, b: number): boolean {
    return a > b;
}

export function lessEqual(a: number, b: number): boolean {
    return a <= b;
}

export function equal(a: any, b: any): boolean {
    return a == b;
}

const a = 5, b = 3, c = 7, d = 4, e = 2, f = 10;
const x = true, y = false, z = true, isAdmin = false;
const tg =0;
const expected2 = (a - b) * (c + d) <= e && z && !x;
const actual2= andFunc(
    andFunc(
        lessEqual(
            multiply(
                subtract(a, b),
                add(c, d)
            ),
            e
        ),
        z
    ),
    notFunc(x)
);
console.log(expected2,actual2)
const expected3 = (a + b + c) % d == 0 || (f > e && isAdmin);
const actual3 = orFunc(
    equal(mod(add(add(a, b), c), d),0),
    andFunc(
        greaterThan(f, e),
        isAdmin
    )
);
console.log(expected3, actual3)
const actual4 = andFunc(
    notFunc(
        orFunc(x, y)
    ),
    greaterThan(
        multiply(a, a),
        multiply(b, c)
    )
);
console.log(actual4,actual4)
