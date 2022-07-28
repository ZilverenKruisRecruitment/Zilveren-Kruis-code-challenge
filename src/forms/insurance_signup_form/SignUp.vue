<template>
    <div class="insurance-signup-form">
        <h1>Aanmelden</h1>

        <!-- Met event emitters zorg ik dat deze component snapt welke formcomponent ingeladen moet worden -->
        <ReasonRequest
            v-if="activeFormComponent === 'reason-request'"
            @next-form="switchNextForm"
            :iterativeData="signUpFormData"
        />
        <PersonalData
            v-if="activeFormComponent === 'personal-data'"
            @next-form="switchNextForm"
            :iterativeData="signUpFormData"
        />
        <InsuranceData
            v-if="activeFormComponent === 'insurance-data'"
            @next-form="switchNextForm"
            :iterativeData="signUpFormData"
        />
        <UserSummary
            v-if="activeFormComponent === 'user-summary'"
            @next-form="switchNextForm"
            @previous-form="switchPreviousForm"
            :signUpFormData="signUpFormData"
        />
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
            activeFormIndex: 0, // De index die correspondeert aan de active form component
            // Hier wordt alle formdata opgeslagen die in de components ingevuld worden.
            signUpFormData: {
                // Deze property gaat op true als de gebruiker iets wilde wijzigen. Dan weet de component
                // dat deze data gebruikt kan worden. Op deze manier hoef ik niet hier al een hele dataschema te maken
                // waardoor de code meer gescheiden blijft in zijn eigen componenten.
                iterate: false
            },
            formComponents: [
                'reason-request',
                'personal-data',
                'insurance-data',
                'user-summary'
            ]
        };
    },
    methods: {
        // Deze functie wijzigt de actieve component op basis van een emitted event
        switchNextForm(formdata) {
            this.signUpFormData[formdata.key] = formdata.value;
            this.activeFormIndex++;
            this.activeFormComponent = this.formComponents[this.activeFormIndex];
        },
        // Deze functie laat de gebruiker terug gaan naar oudere onderdelen
        switchPreviousForm(form) {
            this.signUpFormData.iterate = true;
            this.activeFormIndex = form.index;
            this.activeFormComponent = form.component;
        }
    }
};
</script>

<style scoped></style>
