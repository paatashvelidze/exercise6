from python.script import *
a, b, c, d, e, f = 5, 3, 7, 4, 2, 10
x, y, z, is_admin = True, False, True, False
expected1 = (a + b * c) > (d - e) and x or y
actual1 = or_func( and_func(  greater_than( add(a, multiply(b, c)),  subtract(d, e)),x),y)
print(f"1) Expected: {expected1}, Actual: {actual1}")

expected2 = (a - b) * (c + d) <= e and z and not x
actual2 =and_func(
    and_func(
        less_equal(
            multiply(
             subtract(a, b),
             add(c,d)),
                   e), z),
    not_func(x)
)
print(f" {expected2},{actual2}")

expected3 = (a + b + c) % d == 0 or (f > e and is_admin)
actual3=and_func(

    or_func(equal
            (mod
             (add
              
              (add(a,b),c))
              ,0),
            greater_than(f,e))
    ,is_admin)
print(f"{expected3},{actual3}")

expected4 = not (x or y) and (a * a > b * c)
actual4 = and_func(not_func(or_func(x,y)),(greater_than(multiply(a,a),multiply(b,c))))
print(f"{expected4},{actual4}")