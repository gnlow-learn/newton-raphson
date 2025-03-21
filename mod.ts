type F = (...xs: number[]) => number

const nr =
(
    f: F,
    dfs: F[],
    x0: number[],
    tol = 1e-6,
    maxIter = 10,
) => {
    let x = [...x0]

    for (let iter=0; iter<maxIter; iter++) {
        const fx = f(...x)
        console.log(x, "->", fx)
        if (Math.abs(fx) < tol) {
            console.log(iter)
            return x
        }

        const grad = dfs.map(df => df(...x))
        x = x.map((x, i) => x - fx / grad[i])
    }
    return x
}

console.log(nr(
    x => x**2-2,
    [x => 2*x],
    [-1],
)) // [ 1.414 ]

console.log(nr(
    (x, y) => (x-3)**2+(y-4)**2,
    [(_x, y) => 2*y-8, (x, _y) => 2*x-6],
    [5, 5],
))