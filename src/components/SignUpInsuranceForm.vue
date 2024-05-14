<template>
    <!-- CONTENT HERE -->
    <div class="container my-3">
        <div class="row">
            <div class="col-8">
                <h1>Aanmelden</h1>

                <h2>Gegevens</h2>
                <div class="form-group">
                    <h3>Reden van aanmelding</h3>
                    <div class="form-input my-4">
                        <label id="aanmeldreden-label" class="input__title">Wat is de reden van uw aanvraag?</label>
                        <div class="input__group">
                            <select class="form-control" v-model="userInput.reason">
                                <option
                                    v-for="option in formOptions.reasons"
                                    :key="option.value"
                                    :value="option.value"
                                    :disabled="option.disabled"
                                >
                                    {{ option.label }}
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
                            <input
                                class="input__field form-control"
                                type="text"
                                v-model="userInput.firstName"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Tussenvoegsels</label>
                            <input
                                class="input__field form-control"
                                type="text"
                                v-model="userInput.surName"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Achternaam</label>
                            <input
                                class="input__field form-control"
                                type="text"
                                v-model="userInput.lastName"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Geslacht</label>
                            <div class="form-row">
                                <div
                                    class="radio custom-radio radio__option"
                                >
                                    <input
                                        id="man"
                                        class="radio__input custom-control-input"
                                        type="radio"
                                        name="geslacht"
                                        value="Man"
                                        v-model="userInput.gender"
                                    />
                                    <label
                                        class="radio__label custom-control-label"
                                        for="man"
                                    >
                                        Man
                                    </label>
                                </div>
                                <div
                                    class="radio custom-radio radio__option"
                                >
                                    <input
                                        id="vrouw"
                                        class="radio__input custom-control-input"
                                        type="radio"
                                        name="geslacht"
                                        value="Vrouw"
                                        v-model="userInput.gender"
                                    />
                                    <label
                                        class="radio__label custom-control-label"
                                        for="vrouw"
                                    >
                                        Vrouw
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Geboortedatum</label>
                            <VueDatePicker format="dd/MM/yyyy" locale="nl" model-type="dd MMM. yyyy" :enable-time-picker="false" v-model="userInput.birthday"></VueDatePicker>
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Burgerservicenummer</label>
                            <input
                                class="input__field form-control"
                                :class="{ 'is-invalid' : !isValidBSN(userInput.bsn) }"
                                type="text"
                                v-model="userInput.bsn"
                            />
                        </div>
                        <div
                            class="input__feedback invalid-feedback mt-1"
                            aria-live="polite"
                            v-if="!isValidBSN(userInput.bsn)"
                        >
                            <span>Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.</span>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

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
                        <label class="input__title">Kies uw basisverzekering</label>
                        <div class="form-row">
                            <div class="radio__tile" v-for="option in formOptions.insurances" :key="option.value">
                                <div
                                    class="radio custom-radio radio__option"
                                    :class="{ 'radio__tile--choice': userInput.insurancePackage.value === option.value }"
                                >
                                    <div class="badge radio__tile-badge" v-if="option.mostSelected">Meest gekozen</div>
                                    <input
                                        :value="option"
                                        type="radio"
                                        name="radio-insurance"
                                        :id="option.id"
                                        class="radio__input custom-control-input"
                                        v-model="userInput.insurancePackage"
                                    />
                                    <label
                                        :for="option.id"
                                        class="radio__label custom-control-label"
                                    >
                                        <p class="radio__description">{{ option.label }}</p>
                                        <p class="radio__price">&euro; {{ formatPrice(option.value) }} per maand</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Kies je betaaltermijn</label>
                            <select class="form-control" v-model="userInput.paymentTerm">
                                <option
                                    v-for="option in formOptions.paymentTerms"
                                    :key="option.value"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group" v-if="userInput.insurancePackage.value">
                    <h3>Eigen risico</h3>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Kies de hoogste van het eigen risico</label>
                            <select class="form-control" v-model="userInput.ownRisk">
                                <option
                                    v-for="option in formOptions.ownRisks"
                                    :key="option.value"
                                    :value="option.value"
                                >
                                    {{ option.label }}
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
                            <label class="input__title">Kies uw aanvullende verzekering</label>
                            <select
                                class="form-control"
                                v-model="userInput.additionalInsurance"
                            >
                                <option
                                    v-for="option in formOptions.additionalInsurances"
                                    :key="option.value"
                                    :value="option"
                                >
                                  {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Kies uw tandartsverzekering</label>
                            <select class="form-control" v-model="userInput.dentalInsurance">
                                <option
                                    v-for="option in formOptions.dentalInsurances"
                                    :key="option.value"
                                    :value="option"
                                >
                                  {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="divider"></div>

                <h2 class="mt-5">Controle</h2>
                <div class="form-group">
                    <h3>Gekozen pakket</h3>
                    <h3 class="h3">
                        <span v-if="fullName">{{ fullName }}</span> <span v-if="birthDay">{{ birthDay }}</span>
                    </h3>
                    <div v-if="userInput.insurancePackage.value">
                        <p class="input__title">Basisverzekering</p>
                        <div class="d-flex justify-content-between">
                           <p>{{ userInput.insurancePackage.label }}</p>
                           <p>&euro; {{ formatPrice(formatPriceMonthToYear(userInput.insurancePackage.value, userInput.paymentTerm)) }}</p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="mt-3" v-if="userInput.insurancePackage.value">
                        <p class="input__title">Eigen risico</p>
                        <div class="d-flex justify-content-between">
                           <p>&euro; {{ formatPrice(userInput.ownRisk) }}</p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="mt-3" v-if="userInput.additionalInsurance.value">
                        <p class="input__title">Aanvullende verzekering</p>
                        <div class="d-flex justify-content-between">
                           <p>{{ userInput.additionalInsurance.label }}</p>
                           <p>&euro; {{ formatPrice(formatPriceYearToMonth(userInput.additionalInsurance.value, userInput.paymentTerm)) }}</p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="mt-3" v-if="userInput.dentalInsurance.value">
                        <p class="input__title">Tandartsverzekering</p>
                        <div class="d-flex justify-content-between">
                           <p>{{ userInput.dentalInsurance.label }}</p>
                           <p>&euro; {{ formatPrice(formatPriceYearToMonth(userInput.dentalInsurance.value, userInput.paymentTerm)) }}</p>
                        </div>
                        <div class="divider"></div>
                    </div>
                </div>
                <div class="form-group card card--filled-secondary h-auto mt-5 px-3 py-4" v-if="pricePerTerm">
                    <h4>Totaalpremie <u>{{ userInput.paymentTerm.toLowerCase() }}</u>, in {{ new Date().getFullYear() }}</h4>
                    <p class="total-price">&euro; {{ pricePerTerm }}</p>
                </div>
                <div class="form-group">
                    <h3>Adres en contactgegevens</h3>
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
                                    <button
                                        id="info-phone"
                                        type="button"
                                        class="btn popover__btn btn--popover btn-none"
                                    >
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

<script setup>
    import { computed, ref } from 'vue';
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    const formOptions = {
        reasons: [
            {
                label: 'Er is nog niets geselecteerd',
                value: '',
                disabled: true,
            },
            {
                label: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
                value: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
            },
            {
                label: 'Overstappen per 1-1-2023 naar Zilveren Kruis',
                value: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
            },
        ],
        insurances: [
            {
                id: 'radio-insurance-basis-budget',
                label: 'Basis Budget',
                value: 125
            },
            {
                id: 'radio-insurance-basis-zeker',
                label: 'Basis Zeker',
                value: 130,
                mostSelected: true
            },
            {
                id: 'radio-insurance-basis-exclusief-(restitutie)',
                label: 'Basis Exclusief (Restitutie)',
                value: 150
            },
        ],
        paymentTerms: [
            {
                label: 'Per maand',
                value: 'Per maand'
            },
            {
                label: 'Per kwartaal',
                value: 'Per kwartaal'
            },
            {
                label: 'Per jaar',
                value: 'Per jaar'
            }
        ],
        ownRisks: [
            {
                label: '€ 385 - verplicht eigen risico',
                value: 385
            },
            {
                label: '€ 885 - korting van € 22 per jaar',
                value: 885
            }
        ],
        additionalInsurances: [
            {
                label: 'Geen aanvullende verzekering geselecteerd',
                value: ''
            },
            {
                label: 'Aanvullend 1 - € 21,38 per jaar',
                value: 21.38
            },
            {
                label: 'Aanvullend 2 - € 85,06 per jaar',
                value: 85.06
            },
            {
                label: 'Aanvullend 3 - € 198,63 per jaar',
                value: 198.63
            },
            {
                label: 'Aanvullend 4 - € 359,73 per jaar',
                value: 359.73
            }
        ],
        dentalInsurances: [
            {
                label: 'Geen tandartsverzekering geselecteerd',
                value: ''
            },
            {
                label: 'Tand 1 - € 80,28 per jaar',
                value: 80.28
            },
            {
                label: 'Tand 2 - € 221,65 per jaar',
                value: 221.65
            },
            {
                label: 'Tand 3 - € 449,36 per jaar',
                value: 449.36
            },
        ]
    };

    const userInput = ref({
        reason: '',
        firstName: '',
        surName: '',
        lastName: '',
        gender: '',
        birthday: '',
        bsn: '',
        insurancePackage: {},
        paymentTerm: 'Per maand',
        ownRisk: 385,
        additionalInsurance: {
            label: 'Geen aanvullende verzekering geselecteerd',
            value: '',
        },
        dentalInsurance: {
            label: 'Geen tandartsverzekering geselecteerd',
            value: '',
        },
    });


    //src: https://github.com/willemverbuyst/bsn-js/blob/main/src/validator.ts
    const isValidBSN = (bsn) => {
	    if (bsn.length < 8 || bsn.length > 9) return false

        const numbers = Array.from(String(bsn), Number)
        const lastNumber = numbers[numbers.length - 1]

        if (typeof lastNumber === 'number' && !numbers.includes(NaN)) {
            return ((numbers.slice(0, -1).reduce((a, b, i, arr) => b * (arr.length + 1 - i) + a, 0) - lastNumber) % 11 === 0)
        }

        return false
    };

    //src: ChatGPT
    const formatPrice = price =>  {
        // Convert price to a string and split it into integer and decimal parts
        let [integerPart, decimalPart] = price.toFixed(2).toString().split(".");

        // Add comma for thousands separator
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        // Concatenate integer and decimal parts with comma
        return integerPart + "," + decimalPart;
    };

    // To show correct price for the insurance package when switching to quarterly and yearly
    const formatPriceMonthToYear = (price, term) => {
        if (!price && !term) return;
        let pricePerTerm = 0;

        switch (term) {
            case 'Per maand':
                pricePerTerm = Number(price);
            break;
            case 'Per kwartaal':
                pricePerTerm = Number(price) * 3;
            break;
            case 'Per jaar':
                pricePerTerm = Number(price) * 12;
            break;
        }

        return Number(pricePerTerm.toFixed(2));
    }

    // To show correct price for prices that are yearly based such as additional insurance and dental. Recalculating for monly and quarterly
    const formatPriceYearToMonth = (price, term) => {
        if (!price && !term) return;
        let pricePerTerm = 0;
        let pricePerMonth = Number((price / 12).toFixed(2));
        switch (term) {
            case 'Per maand':
                pricePerTerm = pricePerMonth;
            break;
            case 'Per kwartaal':
                pricePerTerm = pricePerMonth * 3;
            break;
            case 'Per jaar':
                pricePerTerm = price;
            break;
        }

        return Number(pricePerTerm.toFixed(2));
    }

    // Full name
    const fullName = computed(() => `${ userInput.value.firstName } ${ userInput.value.surName } ${ userInput.value.lastName }`);

    // Birthday
    const birthDay = computed(() => {
        if (!userInput.value.birthday) return;
        return `(${ userInput.value.birthday })`;
    });

    //Price based on terms
    const pricePerTerm = computed(() => {
        let finalPrice = 0;
        // Additional insurance and dental are displayed per year. Recalculate these per month and quarter and rerender the final price.
        let basicInsurance = 0;
        let additionalInsurancePricePerMonth = 0;
        let dentalPricePerMonth = 0;

        if (userInput.value.insurancePackage.value) basicInsurance = userInput.value.insurancePackage.value;
        if (userInput.value.additionalInsurance.value) additionalInsurancePricePerMonth = Number((userInput.value.additionalInsurance.value / 12).toFixed(2));
        if (userInput.value.dentalInsurance.value) dentalPricePerMonth = Number((userInput.value.dentalInsurance.value / 12).toFixed(2));


        switch (userInput.value.paymentTerm) {
            case 'Per maand':
                finalPrice = basicInsurance + additionalInsurancePricePerMonth + dentalPricePerMonth;
            break;
            case 'Per kwartaal':
                finalPrice = basicInsurance * 3 + additionalInsurancePricePerMonth * 3 + dentalPricePerMonth * 3;
            break;
            case 'Per jaar':
                finalPrice = basicInsurance * 12 + Number(userInput.value.additionalInsurance.value) + Number(userInput.value.dentalInsurance.value)
            break;
        }

        return finalPrice > 0 ? formatPrice(finalPrice) : null
    });
</script>

<style scoped>
    .divider {
        border-top: 2px solid;
        border-color: #dcebf3;
    }

    .total-price {
        font-size: 1.75rem;
    }
</style>
