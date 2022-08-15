
export default function contar(tempArray) {
    let contar = tempArray.reduce((acum, item) => {
        if (!acum[item]) acum[item] = 0
        acum[item]++
        return acum
    }, {})

    let ordenado = Object.keys(contar)
        .map(key => ({
            nombre: key,
            valor: contar[key]
        }))
        .sort((a, b) => a.valor < b.valor ? 1 : -1)

    return ordenado
}

