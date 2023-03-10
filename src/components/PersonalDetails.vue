<template>
    <div>
        <h2>Gegevens</h2>
        <div class="form-group">
            <h3>Reden van aanmelding</h3>
            <div class="form-input my-4">
                <label id="aanmeldreden-label" class="input__title">
                    Wat is de reden van uw aanvraag?
                </label>
                <div class="input__group">
                    <select v-model="formStore.registerData.reasoning" class="form-control">
                        <option disabled value="">Selecteer reden van uw aanvraag: </option>
                        <option selected>
                            {{ constantEnums.ReasoningOptions.New }}
                        </option>
                        <option>
                            {{ constantEnums.ReasoningOptions.Transfer }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <h3>Persoonlijke gegevens</h3>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">Naam</label>
                    <input v-model.trim="formStore.registerData.personalDetails.firstName" placeholder="voornaam"
                        class="input__field form-control" type="text" />
                </div>
            </div>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Tussenvoegsels
                    </label>
                    <input v-model.trim="formStore.registerData.personalDetails.infixes" placeholder="tussenvoegsels"
                        class="input__field form-control" type="text" />
                </div>
            </div>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">Achternaam</label>
                    <input v-model.trim="formStore.registerData.personalDetails.lastName" placeholder="achternaam"
                        class="input__field form-control" type="text" />
                </div>
            </div>
            <div class="radio-buttons form-input my-4">
                <div class="input__group">
                    <label class="input__title">Geslacht</label>
                    <div class="form-row">
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.personalDetails.gender" id="man"
                                :value="constantEnums.GenderOptions.male" class="radio__input custom-control-input"
                                type="radio" name="geslacht" />
                            <label class="radio__label custom-control-label" for="man">
                                Man
                            </label>
                        </div>
                        <div class="radio custom-radio radio__option">
                            <input v-model="formStore.registerData.personalDetails.gender" id="vrouw"
                                :value="constantEnums.GenderOptions.female" class="radio__input custom-control-input"
                                type="radio" name="geslacht" />
                            <label class="radio__label custom-control-label" for="vrouw">
                                Vrouw
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Geboortedatum
                    </label>
                    <input v-model="formStore.registerData.personalDetails.birthDate" class="input__field form-control"
                        type="date" :min="`${getOldestPossibleBirthYear}-01-01`"
                        :max="`${getYoungestPossibleBirthYear}-01-01`" />
                </div>
                <div class="input__feedback invalid-feedback mt-1" aria-live="polite">
                    <span v-show="invalidBirthDatePresent">Helaas is het ingevoerde
                        geboortedatum niet geldig. Probeer het
                        opnieuw.</span>
                </div>
            </div>
            <div class="form-input my-4">
                <div class="input__group">
                    <label class="input__title">
                        Burgerservicenummer
                    </label>
                    <input placeholder="123456782" v-model.trim="formStore.registerData.personalDetails.bsnNumber"
                        :class="{ 'is-invalid': invalidBSNNumberPresent }" class="input__field form-control" type="text" />
                </div>
                <div class="input__feedback invalid-feedback mt-1" aria-live="polite">
                    <span v-show="invalidBSNNumberPresent">Helaas is het ingevoerde
                        burgerservicenummer niet geldig. Probeer het
                        opnieuw.</span>
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
    name: "PersonalDetails",
    computed: {
        ...mapStores(useFormDataStore),
        invalidBSNNumberPresent(): Boolean {
            let bsnNumberLength = 0
            if (this.formStore.registerData.personalDetails.bsnNumber) {
                bsnNumberLength = this.formStore.registerData.personalDetails.bsnNumber.toString().length
            } else {
                return false
            }
            return !(bsnNumberLength === 8 || bsnNumberLength === 9)
        },
        invalidBirthDatePresent(): Boolean {
            const birthYear = parseInt(this.formStore.registerData.personalDetails.birthDate!.substring(0, 4))
            return !(birthYear > (this.getOldestPossibleBirthYear) && birthYear <= this.getYoungestPossibleBirthYear)
        },
        getCurrentYear() {
            return new Date().getFullYear()
        },
        getOldestPossibleBirthYear(): Number {
            const oldestPossibleYearDeviation = 120
            return this.getCurrentYear - oldestPossibleYearDeviation
        },
        getYoungestPossibleBirthYear(): Number {
            const youngestPossibleYearDeviation = 17 // not sure what constraint is here, just assuming 18+
            return this.getCurrentYear - youngestPossibleYearDeviation
        },
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
<style>
.radio-buttons {
    user-select: none;
}
</style>
