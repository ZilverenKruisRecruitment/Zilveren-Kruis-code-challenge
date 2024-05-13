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
                                <option v-for="option in formOptions.reasons" :key="option.value" :value="option.value" :disabled="option.disabled">{{ option.label }}</option>
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
                            <VueDatePicker format="dd/MM/yyyy" :enable-time-picker="false" v-model="userInput.birthday"></VueDatePicker>
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Burgerservicenummer</label>
                            <input
                                class="input__field form-control"
                                :class="!isValidBSN(userInput.bsn) && 'is-invalid'"
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
                                    :class="userInput.insurancePackage === option.value && 'radio__tile--choice'">
                                    <input
                                        :value="option.value"
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
                                        <p class="radio__price">&euro; {{ formatPrice(option.price) }} per maand</p>
                                    </label>
                                </div>
                            </div>
                            <div class="radio__tile">
                                <div class="radio custom-radio radio__option">
                                    <input
                                        value="Basis Budget"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-budget"
                                        class="radio__input custom-control-input"
                                    />
                                    <label
                                        for="radio-insurance-basis-budget"
                                        class="radio__label custom-control-label"
                                    >
                                        <p class="radio__description">Basis Budget</p>
                                        <p class="radio__price">&euro; 1.393,26 per jaar</p>
                                    </label>
                                </div>
                            </div>
                            <div class="radio__tile radio__tile--choice">
                                <div class="badge radio__tile-badge">Meest gekozen</div>
                                <div class="radio custom-radio radio__option">
                                    <input
                                        value="Basis Zeker"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-zeker"
                                        class="radio__input custom-control-input"
                                    />
                                    <label
                                        for="radio-insurance-basis-zeker"
                                        class="radio__label custom-control-label"
                                    >
                                        <p class="radio__description">Basis Zeker</p>
                                        <p class="radio__price">&euro; 1.483,54 per jaar</p>
                                    </label>
                                </div>
                            </div>
                            <div class="radio__tile">
                                <div
                                    class="radio custom-radio radio__option"
                                >
                                    <input
                                        value="Basis Exclusief (Restitutie)"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-exclusief-(restitutie)"
                                        class="radio__input custom-control-input"
                                    />
                                    <label
                                        for="radio-insurance-basis-exclusief-(restitutie)"
                                        class="radio__label custom-control-label"
                                    >
                                        <p class="radio__description">Basis Exclusief (Restitutie)</p>
                                        <p class="radio__price">&euro; 1.624,62 per jaar</p>
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
                            <select class="form-control">
                                <option>per maand</option>
                                <option>per kwartaal</option>
                                <option selected>per jaar</option>
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
                            <select class="form-control">
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
                            <label class="input__title">
                                Kies uw aanvullende verzekering
                            </label>
                            <select class="form-control">
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
                            <select class="form-control">
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
                </div>
                <div class="form-group">
                    <h3>Totaalpremie</h3>
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
    import { ref } from 'vue';
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
                price: 125,
                value: 'Basis Budget',
            },
            {
                id: 'radio-insurance-basis-zeker',
                label: 'Basis Zeker',
                price: 130,
                value: 'Basis Zeker',
            },
            {
                id: 'radio-insurance-basis-exclusief-(restitutie)',
                label: 'Basis Exclusief (Restitutie)',
                price: 150,
                value: 'Basis Exclusief (Restitutie)',
            },
        ]

    }

    const userInput = ref({
        reason: '',
        firstName: '',
        surName: '',
        lastName: '',
        gender: '',
        birthday: '',
        bsn: '',
        insurancePackage: 'Basis Zeker'
    });

    console.log('hello script setup')
    console.log(userInput.value);

    //src: https://github.com/willemverbuyst/bsn-js/blob/main/src/validator.ts
    const isValidBSN = (bsn) => {
	    if (bsn.length < 8 || bsn.length > 9) return false

        const numbers = Array.from(String(bsn), Number)
        const lastNumber = numbers[numbers.length - 1]

        if (typeof lastNumber === 'number' && !numbers.includes(NaN)) {
            return (
                (numbers
                    .slice(0, -1)
                    .reduce((a, b, i, arr) => b * (arr.length + 1 - i) + a, 0) -
                    lastNumber) %
                    11 ===
                0
            )
        }

        return false
    }

    //src: ChatGPT
    const formatPrice = price =>  {
    // Convert price to a string and split it into integer and decimal parts
    let [integerPart, decimalPart] = price.toFixed(2).toString().split(".");

    // Add comma for thousands separator
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Concatenate integer and decimal parts with comma
    return integerPart + "," + decimalPart;
}

// Example usage
console.log(formatPrice(10000025.89)); // Output: 1.250,00
</script>
