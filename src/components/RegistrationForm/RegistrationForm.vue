<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-8">
                <h1>Aanmelden</h1>

                <h2>Gegevens</h2>
                <div class="form-group">
                    <h3>Reden van aanmelding</h3>
                    <div class="form-input my-4">
                        <label for="aanmeldreden" class="input__title">
                            Wat is de reden van uw aanvraag?
                        </label>
                        <div class="input__group">
                            <select id="aanmeldreden" class="form-control" v-model="selectedReason">
                                <option v-for="reason in reasons" :value="reason.value">{{ reason.text }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <h3>Persoonlijke gegevens</h3>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="first-name" class="input__title">Naam</label>
                            <input id="first-name" v-model="firstName" class="input__field form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="suffix" class="input__title">
                                Tussenvoegsels
                            </label>
                            <input id="suffix" v-model="suffix" class="input__field form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="last-name" class="input__title">Achternaam</label>
                            <input id="last-name" v-model="lastName" class="input__field form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <fieldset>
                                <legend class="col-form-label font-weight-bold">Geslacht</legend>
                                <div class="form-row">
                                    <div class="radio custom-radio radio__option">
                                        <input v-model="gender" value="Man" id="man"
                                            class="radio__input custom-control-input" type="radio" />
                                        <label class="radio__label custom-control-label" for="man">
                                            Man
                                        </label>
                                    </div>
                                    <div class="radio custom-radio radio__option">
                                        <input v-model="gender" value="Vrouw" id="vrouw"
                                            class="radio__input custom-control-input" type="radio" />
                                        <label class="radio__label custom-control-label" for="vrouw">
                                            Vrouw
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="date-of-birth" class="input__title">
                                Geboortedatum
                            </label>
                            <input v-model="dateOfBirth" id="date-of-birth" class="input__field form-control"
                                type="date" />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="bsn" class="input__title">
                                Burgerservicenummer
                            </label>
                            <input @blur="bsnValid" v-model="bsn" :class="{ 'is-invalid': !bsnValidVal }" id="bsn"
                                class="input__field form-control" type="text" required />
                        </div>
                        <div v-show="!bsnValidVal" class="input__feedback invalid-feedback mt-1" aria-live="polite">
                            <span>Helaas is het ingevoerde
                                burgerservicenummer niet geldig. Probeer het
                                opnieuw.</span>
                        </div>
                    </div>
                </div>

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
                        <fieldset>
                            <legend class="col-form-label font-weight-bold mb-2">
                                Kies uw basisverzekering
                            </legend>
                            <div class="form-row">
                                <div class="radio__tile" v-for="insurance in basicInsurances">
                                    <div v-if="insurance.value === 'b'" class="badge radio__tile-badge">
                                        Meest gekozen
                                    </div>
                                    <div class="radio custom-radio radio__option">
                                        <input v-model="selectedBasicInsurance" :value="insurance.value" type="radio"
                                            name="radio-insurance" :id="`radio-insurance-${insurance.value}`"
                                            class="radio__input custom-control-input" />
                                        <label :for="`radio-insurance-${insurance.value}`"
                                            class="radio__label custom-control-label">
                                            <p class="radio__description">
                                                {{ insurance.text }}
                                            </p>
                                            <p class="radio__price" v-for="term in insurance.prices">
                                                <span v-if="term[selectedTerm]">€ {{
                                                    term[selectedTerm]?.toLocaleString('nl-nl') }}</span>
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="term" class="input__title">
                                Kies je betaaltermijn
                            </label>
                            <select id="term" class="form-control" v-model="selectedTerm">
                                <option v-for="term in terms" :value="term.value">{{ term.text }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group" v-show="hasBasicInsurance">
                    <h3>Eigen risico</h3>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="risk" class="input__title">
                                Kies de hoogste van het eigen risico
                            </label>
                            <select id="risk" class="form-control">
                                <option>
                                    € 385 - verplicht eigen risico
                                </option>
                                <option>
                                    € 885 - korting van € 22 per jaar
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
                            <label for="additional" class="input__title">
                                Kies uw aanvullende verzekering
                            </label>
                            <select id="additional" class="form-control">
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
                            <label for="dentist" class="input__title">
                                Kies uw tandartsverzekering
                            </label>
                            <select id="dentist" class="form-control">
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

                <h2 class="mt-5">Controleren</h2>
                <div class="form-group">
                    <h3>Gekozen pakket</h3>
                    <div>{{ selectedReasonText }}</div>
                </div>
                <div class="form-group">
                    <h3>Totaalpremie</h3>
                    <p v-show="hasBasicInsurance"><strong>{{ totalPrice }}</strong></p>
                    <p v-show="hasBasicInsurance"><strong>Betaaltermijn</strong>: {{ readableTerm }}</p>
                </div>
                <div class="form-group">
                    <h3>Adres en contactgegevens</h3>
                    <p class="mb-2" v-show="fullName"><strong>Naam</strong>: {{ fullName }}</p>
                    <p class="mb-2" v-show="gender"><strong>Geslacht</strong>: {{ gender }}</p>
                    <p class="mb-2" v-show="readableDateOfBirth"><strong>Geboortedatum</strong>: {{ readableDateOfBirth
                        }}</p>
                    <p v-show="bsnValidVal && bsn.length > 0"><strong>Burgerservicenummer</strong>: {{ bsn }}</p>
                </div>
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
</template>

<script lang="ts">
import { json } from 'stream/consumers';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'registration-form',
    data() {
        return {
            selectedReason: 'b',
            reasons: [
                { text: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis', value: 'a' },
                { text: 'Overstappen per 1-1-2023 naar Zilveren Kruis', value: 'b' },
            ],
            gender: '',
            firstName: '',
            lastName: '',
            suffix: '',
            dateOfBirth: '',
            bsn: '', // Test with a real BSN: 123456782
            bsnValidVal: true,
            selectedBasicInsurance: null,
            basicInsurances: [
                { text: 'Basis Budget', value: 'a', prices: [{ year: 1393.26 }, { quarter: 349 }, { month: 117 }] },
                { text: 'Basis Zeker', value: 'b', prices: [{ year: 1483.54 }, { quarter: 371 }, { month: 124 }] },
                { text: 'Basis Exclusief (Restitutie)', value: 'c', prices: [{ year: 1624.62 }, { quarter: 407 }, { month: 136 }] },
            ],
            selectedTerm: 'year',
            terms: [
                { text: 'per maand', value: 'month' },
                { text: 'per kwartaal', value: 'quarter' },
                { text: 'per jaar', value: 'year' },
            ],
        }
    },
    computed: {
        fullName(): string | null {
            if (this.firstName.length > 0 && this.lastName.length > 0) {
                if (this.suffix) {
                    return `${this.firstName} ${this.suffix} ${this.lastName}`;
                } else {
                    return `${this.firstName} ${this.lastName}`;
                }
            }
            return null
        },
        selectedReasonText(): string {
            const result = this.reasons.find(reason => reason.value === this.selectedReason)?.text

            return result ? result : '';
        },
        readableDateOfBirth(): string | null {
            if (this.dateOfBirth.length > 0) {
                const dob = new Date(this.dateOfBirth);

                return dob.toLocaleDateString('nl-NL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
            }

            return null;
        },
        readableTerm(): string | undefined {
            const term = this.terms.find(t => t.value === this.selectedTerm)?.text;

            return term;
        },
        hasBasicInsurance(): boolean {
            return this.selectedBasicInsurance ? true : false;
        },
        totalPrice(): string | null {
            // XXX Here we would add up the selected insurance + options to the total price.

            return null;
        }
    },
    methods: {
        bsnValid() {
            if (this.bsn.length < 8 || this.bsn.length > 9) {
                this.bsnValidVal = false;
            }

            const numbers = Array.from(String(this.bsn), Number)
            const lastNumber = numbers[numbers.length - 1]

            if (typeof lastNumber === 'number' && !numbers.includes(NaN)) {
                this.bsnValidVal = (
                    (numbers
                        .slice(0, -1)
                        .reduce((a, b, i, arr) => b * (arr.length + 1 - i) + a, 0) -
                        lastNumber) %
                    11 ===
                    0
                )
            }
        },
        insurancePrice(price: number) {
            if (this.readableTerm === 'per jaar') {
                return price;
            } else if (this.readableTerm === 'per kwartaal') {
                return price / 4;
            } else {
                return (price / 12).toFixed(2);
            }
        }
    }
})
</script>
