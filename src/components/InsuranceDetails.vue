<template>
    <div>
        <h2 class="mt-5">Verzekering</h2>
        <div class="form-group">
            <h3>Basisverzekering</h3>
            <p>
                In Nederland is de basisverzekering verplicht.
                Iedereen wordt voor de basisverzekering
                geaccepteerd. De overheid bepaalt welke zorg hierin
                zit en dit is dus bij elke verzekeraar hetzelfde.
            </p>
            <div class="input__group">
                <label class="input__title">
                    Kies uw basisverzekering
                </label>
                <div class="form-row">
                    <div class="radio__tile">
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.insurance.basicInsurance"
                                :value="constantEnums.InsuranceOptions.Budget" type="radio" name="radio-insurance"
                                id="radio-insurance-basis-budget" class="radio__input custom-control-input" />
                            <label for="radio-insurance-basis-budget" class="radio__label custom-control-label">
                                <p class="radio__description">
                                    Basis Budget
                                </p>
                                <p class="radio__price">
                                    € 1.393,26 per jaar
                                </p>
                            </label>
                        </div>
                    </div>
                    <div class="radio__tile radio__tile--choice">
                        <div class="badge radio__tile-badge">
                            Meest gekozen
                        </div>
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.insurance.basicInsurance"
                                :value="constantEnums.InsuranceOptions.Sure" type="radio" name="radio-insurance"
                                id="radio-insurance-basis-zeker" class="radio__input custom-control-input" />
                            <label for="radio-insurance-basis-zeker" class="radio__label custom-control-label">
                                <p class="radio__description">
                                    Basis Zeker
                                </p>
                                <p class="radio__price">
                                    € 1.483,54 per jaar
                                </p>
                            </label>
                        </div>
                    </div>
                    <div class="radio__tile">
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.insurance.basicInsurance"
                                :value="constantEnums.InsuranceOptions.Exclusive" type="radio" name="radio-insurance"
                                id="radio-insurance-basis-exclusief-(restitutie)"
                                class="radio__input custom-control-input" />
                            <label for="radio-insurance-basis-exclusief-(restitutie)"
                                class="radio__label custom-control-label">
                                <p class="radio__description">
                                    Basis Exclusief (Restitutie)
                                </p>
                                <p class="radio__price">
                                    € 1.624,62 per jaar
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Kies je betaaltermijn
                    </label>
                    <select v-model="formStore.registerData.insurance.paymentInterval" class="form-control">
                        <option>{{ constantEnums.PaymentInterval.PerMonth }}</option>
                        <option>{{ constantEnums.PaymentInterval.PerQuarterly }}</option>
                        <option selected>{{ constantEnums.PaymentInterval.PerYear }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <h3>Eigen risico</h3>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Kies de hoogste van het eigen risico
                    </label>
                    <select v-model="formStore.registerData.risk" class="form-control">
                        <option>
                            {{ constantEnums.RiskOptions.MandatoryDeductible }}
                        </option>
                        <option>
                            {{ constantEnums.RiskOptions.Discount }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <h3>Aanvullende verzekering</h3>
            <p>
                Onze aanvullende verzekeringen kennen ruim 100
                verschillende vergoedingen. De hoogte van de
                vergoeding verschilt per pakket.hoogte van de
                vergoeding verschilt per pakket
            </p>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Kies uw aanvullende verzekering
                    </label>
                    <select v-model="formStore.registerData.additionalInsurance.additionalInsuranceSelection"
                        class="form-control">
                        <option selected>
                            Geen aanvullende verzekering
                            geselecteerd
                        </option>
                        <option>
                            Aanvullend 1 - € 21,38 per jaar
                        </option>
                        <option>
                            Aanvullend 2 - € 85,06 per jaar
                        </option>
                        <option>
                            Aanvullend 3 - € 198,63 per jaar
                        </option>
                        <option>
                            Aanvullend 4 - € 359,73 per jaar
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Kies uw tandartsverzekering
                    </label>
                    <select v-model="formStore.registerData.additionalInsurance.dentistInsurance" class="form-control">
                        <option selected>
                            Geen tandartsverzekering geselecteerd
                        </option>
                        <option>Tand 1 - € 80,28 per jaar</option>
                        <option>Tand 2 - € 221,65 per jaar</option>
                        <option>Tand 3 - € 449,36 per jaar</option>
                    </select>
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

export default defineComponent({
    name: "InsuranceDetails",
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
            }
        }
    },
})
</script>
