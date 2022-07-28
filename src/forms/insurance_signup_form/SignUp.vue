<template>
    <div class="col-8">
        <h1>Aanmelden</h1>

        <ReasonRequest v-if="activeFormComponent === 'reason-request'"/>
        <PersonalData v-if="activeFormComponent === 'personal-data'"/>
        <InsuranceData v-if="activeFormComponent === 'insurance-data'"/>
        <UserSummary v-if="activeFormComponent === 'user-summary'"/>
    </div>
</template>

<script>
import ReasonRequest from '@/forms/insurance_signup_form/ReasonRequest';
import PersonalData from '@/forms/insurance_signup_form/PersonalData';
import InsuranceData from '@/forms/insurance_signup_form/InsuranceData';
import UserSummary from '@/forms/insurance_signup_form/UserSummary';

export default {
    name: 'SignUp',
    components: {
        ReasonRequest,
        PersonalData,
        InsuranceData,
        UserSummary
    },
    data() {
        return {
            activeFormComponent: "reason-request", // Deze property bepaald welk formelement beschikbaar is
            signUpFormData: {}, // Hier wordt alle formdata opgeslagen die in de components ingevuld worden
        };
    },
    methods: {
        // Deze functie wijzigt de actieve component op basis van een emitted event
        switchActiveForm(form) {
            this.activeFormComponent = form;
        }
    }
};
</script>

<style scoped></style>
