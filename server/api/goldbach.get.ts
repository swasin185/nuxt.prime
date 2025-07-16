import Prime from "../math/Prime";
export default eventHandler(async (req) => {
    const query = getQuery(req);
    if (!query.x) {
        setResponseHeader(req, "Content-Type", "text/plain")
        return "Missing query parameter 'x'"
    }
    let x = query.x as string
    Prime.createPrimeArray(x)
    const n = query.x as number
    if (n % 2 != 0 && n > 2) {
        setResponseHeader(req, "Content-Type", "text/plain")
        return "Event number greater than 2 is required !"
    }
    let gb: string[] = []
    gb = Prime.conjGoldbach(String(n))
    const dash = '─'
    let asc = '─'
    let des = ''
    let p = 1
    const half = n / 2
    if (n == 4) {
        asc += '┐'
        des = '┘'
    }
    for (let k = 3; k < n; k += 2) {
        while (Prime.getPrime(p).toNumber() < k) p++
        if (Prime.getPrime(p).toNumber() == k) {
            if (half > k)
                asc += '┬'
            if (half == k) {
                asc += '┐'
                des = '┘'
            }
            if (half < k) des = '┴' + des
        } else {
            if (half >= k) asc += dash
            if (half <= k) des = dash + des
        }
    }
    let text: string = '<h1>Goldbach\'s conjecture</h1>'
    text += '<h5>Every even number greater than 2 can be expressed as the sum of two prime numbers. * 1 is not prime!</h5>'
    const pair: number[] = new Array(gb.length)
    let i = 0
    let row: string = ''
    for (const z of gb) {
        const px = n - Number(z)
        pair[i++] = px
        row = dash
        for (let j = 3; j < px; j += 2) {
            const found = pair.indexOf(j)
            if (found != -1)
                row += '┼'
            else 
                row += dash
        }
        row += '┐' + px + ' + ' + z + '<br>'
        text += row
    }
    text += asc + '<br>' + des + '<br>'
    text += 'x = ' + x + '\t gb = ' + gb.length + '<br>'
    setResponseHeader(req, "Content-Type", "text/html; charset=utf-8")
    return text
})


