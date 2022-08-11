<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
        <AppHeader />

        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>

                    <h2>Gegevens</h2>
                    <div class="form-group">
                        <h3>Reden van aanmelding</h3>
                        <div class="form-input my-4">
                            <label
                                for="reason-for-registration"
                                class="input__title"
                            >
                                Wat is de reden van uw aanvraag?
                            </label>
                            <div class="input__group">
                                <select
                                    id="reason-for-registration"
                                    class="form-control"
                                >
                                    <option>
                                        Nieuwe werkgever met collectiviteit bij
                                        Zilveren Kruis
                                    </option>
                                    <option selected>
                                        Overstappen per 1-1-2023 naar Zilveren
                                        Kruis
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Persoonlijke gegevens</h3>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="first-name" class="input__title">Naam</label>
                                <input
                                    id="first-name"
                                    class="input__field form-control"
                                    type="text"
                                    v-model="form.firstName"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="insertion" class="input__title">
                                    Tussenvoegsels
                                </label>
                                <input
                                    id="insertion"
                                    class="input__field form-control"
                                    type="text"
                                    v-model="form.insertion"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="last-name" class="input__title">Achternaam</label>
                                <input
                                    id="last-name"
                                    class="input__field form-control"
                                    type="text"
                                    v-model="form.lastName"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <fieldset class="input__group">
                                <legend class="input__title">Geslacht</legend>
                                <div class="form-row">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            id="man"
                                            class="radio__input custom-control-input"
                                            type="radio"
                                            name="geslacht"
                                            v-model="form.gender"
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
                                            v-model="form.gender"
                                        />
                                        <label
                                            class="radio__label custom-control-label"
                                            for="vrouw"
                                        >
                                            Vrouw
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="date-of-birth" class="input__title">
                                    Geboortedatum
                                </label>
                                <input
                                    id="date-of-birth"
                                    class="input__field form-control"
                                    type="date"
                                    v-model="form.dateOfBirth"
                                />
                            </div>
                        </div>
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="bsn" class="input__title">
                                    Burgerservicenummer
                                </label>
                                <input
                                    id="bsn"
                                    class="input__field form-control"
                                    type="number"
                                    placeholder="Add 9 numbers"
                                    maxlength="9"
                                    required
                                    v-model="form.bsn"
                                    @input="bsnValidation($event)"
                                />
                            </div>
                            <div
                                class="input__feedback invalid-feedback bsn-error d-none mt-1"
                                aria-live="polite"
                            >
                                <span
                                    >Helaas is het ingevoerde
                                    burgerservicenummer niet geldig. Probeer het
                                    opnieuw.</span
                                >
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
                        <fieldset class="input__group">
                            <legend class="input__title">
                                Kies uw basisverzekering
                            </legend>
                            <div class="form-row">
                                <div class="radio__tile">
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Budget"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-budget"
                                            class="radio__input custom-control-input"
                                            v-model="form.insurance"
                                        />
                                        <label
                                            for="radio-insurance-basis-budget"
                                            class="radio__label custom-control-label"
                                        >
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
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Zeker"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-zeker"
                                            class="radio__input custom-control-input"
                                            v-model="form.insurance"
                                        />
                                        <label
                                            for="radio-insurance-basis-zeker"
                                            class="radio__label custom-control-label"
                                        >
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
                                    <div
                                        class="radio custom-radio radio__option"
                                    >
                                        <input
                                            value="Basis Exclusief (Restitutie)"
                                            type="radio"
                                            name="radio-insurance"
                                            id="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__input custom-control-input"
                                            v-model="form.insurance"
                                        />
                                        <label
                                            for="radio-insurance-basis-exclusief-(restitutie)"
                                            class="radio__label custom-control-label"
                                        >
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
                        </fieldset>
                    </div>
                    <div class="form-group">
                        <div class="form-input my-4">
                            <div class="input__group">
                                <label for="payment-term" class="input__title">
                                    Kies je betaaltermijn
                                </label>
                                <select
                                    id="payment-term"
                                    class="form-control"
                                    v-model="form.paymentTerm"
                                >
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
                                <label for="deductible" class="input__title">
                                    Kies de hoogste van het eigen risico
                                </label>
                                <select
                                    id="deductible"
                                    class="form-control"
                                    v-model="form.deductible"
                                    v-bind:disabled="!form.insurance"
                                >
                                    <option>
                                        € 385 - verplicht eigen risico
                                    </option>
                                    <option>
                                        € 885 - korting van € 22 per jaar
                                    </option>
                                </select>
                                <span
                                    class="text-danger"
                                    v-if="!form.insurance"
                                    >Kies eerst een basisverzekering</span
                                >
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
                                <select
                                    id="additional"
                                    class="form-control"
                                    v-model="form.additional"
                                >
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
                                <label
                                    for="dental-insurance"
                                    class="input__title"
                                >
                                    Kies uw tandartsverzekering
                                </label>
                                <select
                                    id="dental-insurance"
                                    class="form-control"
                                    v-model="form.dentalInsurance"
                                >
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
                        <p class="h3 font-weight-bold">
                            {{ form.firstName }} {{ form.insertion }} {{ form.lastName }}
                            <span v-if="form.dateOfBirth !== ''"
                                >({{ form.dateOfBirth }})</span
                            >
                        </p>

                        <div class="border-bottom">
                            <strong>{{ form.insurance }}</strong>
                        </div>
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

                                        <ButtonInfo></ButtonInfo>
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

        <!-- FOOTER -->
        <RatingBar />
        <AppFooter />
    </div>
</template>

<script>
import ButtonInfo from './components/ButtonInfo';
import AppHeader from './components/AppHeader';
import RatingBar from './components/RatingBar';
import AppFooter from './components/AppFooter';

export default {
    name: 'App',
    components: {
        ButtonInfo,
        AppHeader,
        RatingBar,
        AppFooter
    },
    methods: {
        bsnValidation(e) {
            const errorMessage = document.querySelector('.bsn-error');
            e.target.addEventListener('change', e => {
                const bsnNumber = e.target.value;
                const length = bsnNumber.toString().length;
                if (length === 9) {
                    errorMessage.classList.add('d-none');
                    e.target.classList.remove('is-invalid');
                } else {
                    errorMessage.classList.remove('d-none');
                    e.target.classList.add('is-invalid');
                }
            });
        }
    },
    data() {
        return {
            form: {
                firstName: '',
                insertion: '',
                lastName: '',
                dateOfBirth: ''
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.text-danger {
    color: red !important;
}

</style>
