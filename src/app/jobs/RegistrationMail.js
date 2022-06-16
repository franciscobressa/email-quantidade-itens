import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    async handle(data) {
        let stringfado = JSON.stringify(data.data)
        await Mail.sendMail({
            to: "to@example.com",
            from: "from@example.com", // String
            subject: "Total de Itens",
            text: stringfado + " produtos disponíveis na loja",
        }).catch(err => {
            console.log(err)
        })
    }
};