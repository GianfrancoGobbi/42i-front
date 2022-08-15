// var locations = [
//     {
//         "name": "Manhattan",
//         "type": "locality",
//         "center": "40.7903:-73.9597",
//         "context": [
//             { "type": "place", "name": "New York City", "center": "40.7648:-73.9808" },
//             { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" },
//             { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }
//         ]
//     },
//     {
//         "name": "Newark",
//         "type": "place",
//         "center": "40.7357:-74.1724",
//         "context": [
//             { "type": "region", "name": "New Jersey", "center": "40.1502478924:-74.3893168105238" },
//             { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }
//         ]
//     },
//     {
//         "name": "Soho",
//         "type": "neighborhood",
//         "center": "40.7229:-73.9988",
//         "context": [
//             { "type": "locality", "name": "Manhattan", "center": "40.7903:-73.9597" },
//             { "type": "place", "name": "New York City", "center": "40.7648:-73.9808" },
//             { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" },
//             { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }
//         ]
//     },
//     {
//         "name": "San Justo",
//         "type": "place",
//         "center": "-34.68333:-58.55",
//         "context": [
//             { "type": "region", "name": "Buenos Aires", "center": "-34.5997:-58.38194" },
//             { "type": "country", "name": "Argentina", "center": "-36.252002:-63.954193" }
//         ]
//     },
//     {
//         "name": "Buenos Aires",
//         "type": "place",
//         "center": "9.1735:-83.3165",
//         "context": [
//             { "type": "region", "name": "Puntarenas", "center": "9.96667:-84.83333" },
//             { "type": "country", "name": "Costa Rica", "center": "10.2577944410312:-84.2009147613538" }
//         ]
//     },
//     {
//         "name": "Greenwich Village",
//         "type": "neighborhood",
//         "center": "40.7284:-74.0029",
//         "context": [
//             { "type": "locality", "name": "Manhattan", "center": "40.7903:-73.9597" },
//             { "type": "place", "name": "New York City", "center": "40.7648:-73.9808" },
//             { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" },
//             { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }
//         ]
//     },
//     {
//         "name": "Palermo",
//         "type": "place",
//         "center": "-34.58889:-58.43056"
//     },
//     {
//         "name": "Mendoza",
//         "center": "-32.89028:-68.84722",
//         "context": [
//             { "type": "country", "name": "Argentina", "center": "-36.252002:-63.954193" }
//         ]
//     }
// ]



export default function orderlocation(locations) {
    if (locations.context) {
        let locdes = [{ "name": locations.name, "type": locations.type, "center": locations.center }].concat(locations.context)
        let finallocation = {}
        let country = (locdes.filter(loc => loc.type === "country"))
        let region = locdes.filter(loc => loc.type === "region")
        let place = locdes.filter(loc => loc.type === "place")
        let locality = locdes.filter(loc => loc.type === "locality")
        let neighborhood = locdes.filter(loc => loc.type === "neighborhood")
        finallocation = country[0]
        if (region.length !== 0) finallocation["region"] = region[0]
        if (region.length === 0) finallocation["region"] = {}
        if (place.length !== 0) finallocation.region["place"] = place[0]
        if (place.length === 0) finallocation.region["place"] = {}
        if (locality.length !== 0) finallocation.region.place["locality"] = locality[0]
        if (locality.length === 0) finallocation.region.place["locality"] = {}
         // eslint-disable-next-line
        if (neighborhood.length =! 0) finallocation.region.place.locality["neighborhood"] = neighborhood[0]
        if (neighborhood.length === 0) finallocation.region.place.locality["neighborhood"] = {}
        return finallocation
    }
    else {
        return locations
    }
}


let todas = [{ "name": "Manhattan", "type": "locality", "center": "40.7903:-73.9597", "context": [{ "type": "place", "name": "New York City", "center": "40.7648:-73.9808" }, { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" }, { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }] }, { "name": "Newark", "type": "place", "center": "40.7357:-74.1724", "context": [{ "type": "region", "name": "New Jersey", "center": "40.1502478924:-74.3893168105238" }, { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }] }, { "name": "Soho", "type": "neighborhood", "center": "40.7229:-73.9988", "context": [{ "type": "locality", "name": "Manhattan", "center": "40.7903:-73.9597" }, { "type": "place", "name": "New York City", "center": "40.7648:-73.9808" }, { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" }, { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }] }, { "name": "San Justo", "type": "place", "center": "-34.68333:-58.55", "context": [{ "type": "region", "name": "Buenos Aires", "center": "-34.5997:-58.38194" }, { "type": "country", "name": "Argentina", "center": "-36.252002:-63.954193" }] }, { "name": "Buenos Aires", "type": "place", "center": "9.1735:-83.3165", "context": [{ "type": "region", "name": "Puntarenas", "center": "9.96667:-84.83333" }, { "type": "country", "name": "Costa Rica", "center": "10.2577944410312:-84.2009147613538" }] }, { "name": "Greenwich Village", "type": "neighborhood", "center": "40.7284:-74.0029", "context": [{ "type": "locality", "name": "Manhattan", "center": "40.7903:-73.9597" }, { "type": "place", "name": "New York City", "center": "40.7648:-73.9808" }, { "type": "region", "name": "New York", "center": "42.751210955:-75.4652471468304" }, { "type": "country", "name": "United States", "center": "39.3812661305678:-97.9222112121185" }] }, { "name": "Palermo", "type": "place", "center": "-34.58889:-58.43056" }, { "name": "Mendoza", "center": "-32.89028:-68.84722", "context": [{ "type": "country", "name": "Argentina", "center": "-36.252002:-63.954193" }] }]
let ok = todas.map(location => orderlocation(location))
console.log(ok)


