<template>
    <div id="app" class="main-placeholder">
        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>

                    <PersonalDetails v-show="formState === constantEnums.FormState.Details" />
                    <InsuranceDetails v-show="formState === constantEnums.FormState.Insurance" />
                    <ControlDetails v-show="formState === constantEnums.FormState.Control" />

                    <div class="form-row">
                        <button class="radio__tile" v-show="formState !== constantEnums.FormState.Details"
                            @click="handleFormContinue(false)">{{ getFormRevertString }}</button>
                        <button class="radio__tile" @click="handleFormContinue(true)">{{ getFormContinueString }}</button>
                    </div>
                    <button class="custom-cancel-btn" @click="cancelForm()">Annuleer Bijschrijven</button>
                </div>
                <div class="col-4">
                    <div class="card card--filled-secondary h-auto">
                        <div class="card-body">
                            <div class="sf-contactblok-content">
                                <h3 class="mb-2">We staan voor je klaar</h3>
                                <p class="mb-5">
                                    Twijfel je? Heb je een vraag?
                                </p>
                                <div class="phonenumber mb-2">
                                    <a href="tel:0900 040 03 09">
                                        <span class="sr-only">
                                            Telefoonnummer
                                        </span>
                                        0900 040 03 09
                                    </a>
                                    <div class="popover__container ml-1">
                                        <button id="info-phone" type="button"
                                            class="btn popover__btn btn--popover btn-none">
                                            <span class="sr-only">
                                                Informatie weergeven
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <small>
                                    Open op maandag t/m vrijdag van 08:00 tot
                                    17:00
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type Register from "@/interfaces/Register"
import ReasoningOptions from '@/enums/ReasoningOptions'
import GenderOptions from '@/enums/GenderOptions'
import InsuranceOptions from '@/enums/InsuranceOptions'
import PaymentInterval from '@/enums/PaymentInterval'
import RiskOptions from '@/enums/RiskOptions'
import ExtraInsuranceOptions from '@/enums/AdditionalInsuranceOptions'
import DentistInsuranceOptions from '@/enums/DentistInsuranceOptions'
import { useFormDataStore } from '@/stores/form'
import { mapStores } from 'pinia';
import PersonalDetails from "@/components/PersonalDetails.vue"
import InsuranceDetails from "@/components/InsuranceDetails.vue"
import ControlDetails from "@/components/ControlDetails.vue"
import FormState from "@/enums/FormState"

export default defineComponent({
    components: {
        PersonalDetails, InsuranceDetails, ControlDetails
    },
    data() {
        return {
            formState: FormState.Details,
            formData: {
                reasoning: ReasoningOptions.New,
                personalDetails: {},
                insurance: {},
                risk: {},
                additionalInsurance: {},
            } as Register,
            constantEnums: {
                ReasoningOptions,
                GenderOptions,
                InsuranceOptions,
                PaymentInterval,
                RiskOptions,
                ExtraInsuranceOptions,
                DentistInsuranceOptions,
                FormState
            }
        }
    },
    beforeMount() { // defaults
        this.formData.insurance.paymentInterval = PaymentInterval.PerYear;
        this.formData.risk = RiskOptions.MandatoryDeductible;
        this.formData.additionalInsurance.additionalInsuranceSelection = ExtraInsuranceOptions.None;
        this.formData.additionalInsurance.dentistInsurance = DentistInsuranceOptions.None;
    },
    computed: {
        ...mapStores(useFormDataStore),
        getFormContinueString() {
            switch (this.formState) {
                case FormState.Details: {
                    return "Ga verder naar verzekering ->"
                }
                case FormState.Insurance: {
                    return "Ga verder naar controle ->"
                }
                case FormState.Control: {
                    return "Verstuur mijn aanvraag ->"
                }
            }
        },
        getFormRevertString() {
            switch (this.formState) {
                case FormState.Insurance: {
                    return "<- Terug naar gegevens"
                }
                case FormState.Control: {
                    return "<- Terug naar verzekerings"
                }
            }
        },
    },
    methods: {
        handleFormContinue(continuing: boolean): void {
            continuing ? this.formState++ : this.formState--
            if (this.formState > FormState.Control) { // form submitted
                this.formState--
                alert("Bedankt voor uw aanvraag") // placeholder alert; real impl. would involve plugin
            }
        },
        cancelForm(): void {
            this.$router.push('/')
        }
    }
})
</script>
<style>
.custom-cancel-btn {
    float: right;
}
</style>
