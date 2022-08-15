export default function buscarplace(locations) {
    let regionsureña = locations.filter((l) => l.region).filter((l) => l.region.center).sort((a, b) => a.region.center > b.region.center ? 1 : -1)
    let latitudsur = regionsureña[0].region.center.split(":").map((l) => l * 111.1)
    let filtroplaces = (locations.filter((l) => l.region).filter((l) => l.region.place.center))
    let filtroplaces2 = locations.filter((l) => l.type === "place")
     // eslint-disable-next-line
    let aux = {}
    let nuevomap = filtroplaces.map((l) => aux = { "name": l.region.place.name, "type": l.region.place.type, "center": l.region.place.center }).concat(filtroplaces2)
    let filtroredonda = nuevomap.filter((p) => latitudsur[0] - 50 < p.center.split(":")[0] * 111.1 && p.center.split(":")[0] * 111.1 < latitudsur[0] + 50
        && latitudsur[1] - 50 < p.center.split(":")[1] * 111.1 && p.center.split(":")[1] * 111.1 < latitudsur[1] + 50
    )
    return filtroredonda
}

