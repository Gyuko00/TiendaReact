import data from '../../data/data.json'

export const pedirDatos = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 500)
    });
}

export const pedirItemPorId = (id) => {
    return new Promise((res, rej) => {
        const item = data.find((el) => el.id === id)
        if (item) {
            res(item)
        } else {
            rej({ error: "El producto no existe" })
        }
    })
}



