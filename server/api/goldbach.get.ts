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
    let i = n
    let gb: string[] = []
    let text: string = '<h1>Goldbach\'s conjecture</h1>'
    gb = Prime.conjGoldbach(String(i))
    const dash = '─'
    let asc = '┌'
    let des = ''
    let p = 1
    const half = n / 2
    for (let k = 3; k < n; k++) {
        while (Prime.getPrime(p).toNumber() < k) p++
        if (n == k + 1) des = '└' + des
        else if (Prime.getPrime(p).toNumber() == k) {
            if (half > k) asc += '┬'
            else des = '┴' + des
        } else {
            if (half > k) {
                if (k % 2 != 0) asc += dash
            } else {
                if (k % 2 != 0) des = dash + des
            }
        }
    }

    const pair: number[] = new Array(gb.length)
    let row: string = ''
    for (const z of gb) {
        const px = n - Number(z)
        pair[pair.length++] = px
        row = dash
        for (let j = 3; j < px; j += 2) {
            const found = pair.indexOf(j)
            if (found != -1) { row += '┼' } else { row += dash }
        }
        row += '┐' + px + ' + ' + z + '<br>'
        text += row
    }
    text += asc + '<br>' + des + '<br>'
    text += 'x = ' + x + '\t gb = ' + gb.length + ' = ' + gb.toString()
    setResponseHeader(req, "Content-Type", "text/html; charset=utf-8")
    return text
})


