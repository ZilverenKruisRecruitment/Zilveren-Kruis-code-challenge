export default {
    methods: {
        scrollToError(error) {
            let errorPosition = this.$refs['input-' + error].getBoundingClientRect().top + window.scrollY;
            window.scrollTo({top: errorPosition, left: 0, behavior: 'smooth'})
        }
    }
}