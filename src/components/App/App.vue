<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
        <CgHeader />

        <!-- CONTENT HERE -->
        <RegistrationIndex />
        <!-- FOOTER -->
        <CgFooter />
    </div>
</template>
<script lang="ts">
import CgHeader from '../Generic/CgHeader.vue';
import CgFooter from '../Generic/CgFooter.vue';
import RegistrationIndex from '../Registration/RgIndex.vue';

export default {
    name: 'App',
    components: { CgHeader, CgFooter, RegistrationIndex }
};
</script>
