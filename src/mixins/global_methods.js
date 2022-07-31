export default {
    methods: {
        convertNumToEuro(price) {
            return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price)
        }
    }
}