<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
        <AppHeader />

        <!-- CONTENT HERE -->
        <AppAanmeldenFormulier />

        <!-- FOOTER -->
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAanmeldenFormulier from "./components/AppAanmeldenFormulier.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
    components: {
        AppAanmeldenFormulier,
        AppHeader,
        AppFooter
    },
    name: "App"
};
</script>

<style lang="scss"></style>
