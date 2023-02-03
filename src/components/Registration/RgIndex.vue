<template>
    <div class="container my-3">
        <div class="row">
            <h1>Aanmelden</h1>
        </div>
        <div v-if="!submitted" class="row">
            <div class="col-12 col-md-8">
                <component v-bind:is="steps[currentStep].component" />
                <div
                    v-if="currentStep !== 0"
                    class="d-flex justify-content-start position-absolute"
                >
                    <button v-on:click="previous" class="previousBtn">
                        Terug
                    </button>
                </div>
                <div
                    v-if="currentStep < steps.length - 1"
                    class="d-flex justify-content-end"
                >
                    <button v-on:click="next" class="nextBtn">Ga Verder</button>
                </div>
                <div
                    v-if="currentStep === 2"
                    class="d-flex justify-content-end"
                >
                    <button v-on:click="next" class="nextBtn">
                        Verstuur mijn aanvraag
                    </button>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div>
                    <ShoppingCart v-if="currentStep !== 0" />
                    <ContactCard />
                    <InfoCard v-if="currentStep !== 1" />
                </div>
            </div>
        </div>
        <div v-else>
            <h4>Thank you for registration!</h4>
        </div>
    </div>
</template>
<script lang="ts">
import Information from './Steps/InformationStep.vue';
import Controle from './Steps/ControleStep.vue';
import Insurance from './Steps/InsuranceStep.vue';
import ContactCard from '../Custom/ContactCard.vue';
import InfoCard from '../Custom/InfoCard.vue';
import ShoppingCart from '../Custom/ShoppingCart.vue';

export default {
    name: 'RegistrationIndex',
    data() {
        return {
            currentStep: 0,
            submitted: false,
            steps: [
                {
                    component: Information,
                    label: 'information'
                },
                {
                    component: Insurance,
                    label: 'insurance'
                },
                {
                    component: Controle,
                    label: 'controle'
                }
            ]
        };
    },
    methods: {
        next() {
            this.currentStep += 1;
        },
        previous() {
            this.currentStep -= 1;
        }
    },
    components: {
        Information,
        Insurance,
        Controle,
        ContactCard,
        InfoCard,
        ShoppingCart
    }
};
</script>
<style>
.previousBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    width: 239px;
    height: 40px;

    border-color: #0068bd;
    background: #ffffff;
    border-radius: 20px;
    color: #0068bd;

    flex: none;
    order: 0;
    flex-grow: 0;
}
.nextBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    width: 239px;
    height: 40px;
    background: #0068bd;
    border-color: #0068bd;
    border-radius: 20px;
    color: white;
    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>
