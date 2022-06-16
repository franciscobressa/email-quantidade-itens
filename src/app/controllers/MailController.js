import Queue from "../lib/Queue"
import axios from "axios"

export default {
    async store(req, res) {
        let products = null

        await axios
            .get(
                "https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search"
            )
            .then(response => {
                products = response.data
            })
            .catch(error => {
                console.log(error)
            })

        await Queue.add(products.length)

        return res.json('Email enviado com sucesso')
    },
}