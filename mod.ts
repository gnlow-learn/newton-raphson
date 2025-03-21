type F = (...xs: number[]) => number

const nr =
(
    f: F,
    dfs: F[],
    x0: number[],
    tol = 1e-6,
    maxIter = 100,
) => {
    let x = [...x0]

    for (let iter=0; iter<maxIter; iter++) {
        const fx = f(...x)
        const grad = dfs.map(df => df(...x))

        const diff = Math.hypot(...grad)
        console.log(diff)
        if (diff < tol) return x

        x = x.map((x, i) => x - fx / grad[i])
    }
    return x
}

console.log(nr(
    x => x**2-2,
    [x => 2*x],
    [2],
)) // [ 1.414 ]
