<template>
    <div class="main-placeholder">
        <!-- HEADER -->
        <site-header></site-header>

        <!-- CONTENT HERE -->
         <registration-form></registration-form>

        <!-- FOOTER -->
        <site-footer></site-footer>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import RegistrationForm from '../RegistrationForm/RegistrationForm.vue';
import SiteHeader from '../SiteHeader/SiteHeader.vue';
import SiteFooter from '../SiteFooter/SiteFooter.vue';

export default defineComponent({
    name: 'registration-page',
    components: {
        RegistrationForm,
        SiteHeader,
        SiteFooter,
    }
})
</script>
