
var data = new FormData()

export const HTTPDataHandler = (object) => {
    for(const props in object) {
        data.append(`${props}`, `${object[props]}`)
    }
    return data
}
