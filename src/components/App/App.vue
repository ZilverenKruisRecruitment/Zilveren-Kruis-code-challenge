<template>
    <div id="app" class="main-placeholder"></div>
    <Header />
    <Form />
    <Footer />
</template>

<script lang="ts">
import Header from '../appcomponents/Header.vue';
import Form from '../appcomponents/Form.vue';
import Footer from '../appcomponents/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Form,
        Footer
    }
};
</script>
