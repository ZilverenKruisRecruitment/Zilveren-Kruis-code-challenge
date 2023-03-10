<template>
    <div>
        <h2 class="mt-5">Controleren</h2>
        <div class="form-group">
            <h3>Gekozen pakket</h3>
            <h4>{{ formStore.registerData.insurance.basicInsurance }}</h4>

            <h3>Eigen Risico</h3>
            <h4>{{ formStore.registerData.risk }}</h4>

            <h3>Aanvullend Verzekering</h3>
            <h4></h4>

            <h3>Total Per Month</h3>
            <h4></h4>
        </div>
        <div class="form-group">
            <h3>Totaalpremie</h3>
        </div>
        <div class="form-group">
            <h3>Adres en contactgegevens</h3>
            <h4>J. van Naam</h4>
            <label>Rijksstraatweg 7</label>
            <p>3631AA Nieuwersluis</p>
            <label>j.vandrouwen@valsplat.nl</label>
            <p>06 55 757 877</p>
        </div>
        <div class="form-group">
            <h3>Over de overstap</h3>
            <ul>
                <li>Ik wil per 1 januari 2023 overstappen naar Zilveren Kruis</li>
                <li>Wij zeggen je huidige basisverzekering en aanvullende verzekering voor je op.</li>
            </ul>
        </div>
        <div class="form-group">
            <h3>Bankgegevens</h3>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">IBAN Rekeningnummer</label>
                    <input v-model.trim="formStore.registerData.personalDetails.lastName" placeholder="NL 00 BUNQ 1234567890"
                        class="input__field form-control" type="text" />
                </div>
            </div>
            <div class="form-input my-4 radio-buttons">
                <div class="input__group">
                    <label class="input__title">Betaalwijze</label>
                    <div class="form-row">
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.paymentMethod" :id="constantEnums.PaymentMethods.Auto"
                                :value="constantEnums.PaymentMethods.Auto" class="radio__input custom-control-input"
                                type="radio" name="betaalwijze" />
                            <label class="radio__label custom-control-label" :for="constantEnums.PaymentMethods.Auto">
                                Automatisch Incasso
                            </label>
                        </div>
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.paymentMethod" :id="constantEnums.PaymentMethods.PerMail"
                                :value="constantEnums.PaymentMethods.PerMail" class="radio__input custom-control-input"
                                type="radio" name="betaalwijze" />
                            <label class="radio__label custom-control-label" :for="constantEnums.PaymentMethods.PerMail">
                                Rekening Per Email
                            </label>
                        </div>
                    </div>
                    <label></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFormDataStore } from '@/stores/form'
import { mapStores } from 'pinia';
import ExtraInsuranceOptions from '@/enums/AdditionalInsuranceOptions';
import DentistInsuranceOptions from '@/enums/DentistInsuranceOptions';
import GenderOptions from '@/enums/GenderOptions';
import InsuranceOptions from '@/enums/InsuranceOptions';
import PaymentInterval from '@/enums/PaymentInterval';
import ReasoningOptions from '@/enums/ReasoningOptions';
import RiskOptions from '@/enums/RiskOptions';
import PaymentMethods from "@/enums/PaymentMethod"

export default defineComponent({
    name: "ControlDetails",
    computed: {
        ...mapStores(useFormDataStore),
    },
    data() {
        return {
            constantEnums: {
                ReasoningOptions,
                GenderOptions,
                InsuranceOptions,
                PaymentInterval,
                RiskOptions,
                ExtraInsuranceOptions,
                DentistInsuranceOptions,
                PaymentMethods,
            }
        }
    },
})
</script>
<style>
.radio-buttons {
    user-select: none;
}
</style>
