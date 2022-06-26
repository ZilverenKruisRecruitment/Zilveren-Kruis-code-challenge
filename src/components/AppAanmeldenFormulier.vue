<script>
// import { ValidationProvider } from "vee-validate";
import moment from "moment";

export default {
    data() {
        return {
            formValues: {
                aanmeldreden: "",
                voornaam: "",
                tussenvoegsels: "",
                achternaam: "",
                geslacht: "",
                geboortedatum: "",
                bsn: "",
                basisverzekering: "",
                betaaltermijn: "",
                eigenRisico: "",
                aanvullendeVerzekering: "",
                tandartsverzekering: ""
            }
        };
    },
    filters: {
        moment: function (date) {
            return moment(date).format("LL");
        }
    }
};
</script>

<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-8">
                <h1>Aanmelden</h1>

                <!-- <div>
                    <pre>
                            {{ JSON.stringify(formValues, null, 2) }}
                        </pre
                    >
                </div> -->

                <h2>Gegevens</h2>
                <div class="form-group">
                    <h3>Reden van aanmelding</h3>

                    <div class="form-input my-4">
                        <label
                            for="aanmeldreden"
                            id="aanmeldreden-label"
                            class="input__title"
                        >
                            Wat is de reden van uw aanvraag?
                        </label>
                        <div class="input__group">
                            <select
                                id="aanmeldreden"
                                class="form-control"
                                v-model="formValues.aanmeldreden"
                            >
                                <option>
                                    Nieuwe werkgever met collectiviteit bij
                                    Zilveren Kruis
                                </option>
                                <option selected>
                                    Overstappen per 1-1-2023 naar Zilveren Kruis
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <h3>Persoonlijke gegevens</h3>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="voornaam" class="input__title"
                                >Naam</label
                            >
                            <input
                                id="voornaam"
                                class="input__field form-control"
                                type="text"
                                v-model="formValues.voornaam"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="tussenvoegsels" class="input__title">
                                Tussenvoegsels
                            </label>
                            <input
                                id="tussenvoegsels"
                                class="input__field form-control"
                                type="text"
                                v-model="formValues.tussenvoegsels"
                                optional
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="achternaam" class="input__title"
                                >Achternaam</label
                            >
                            <input
                                id="achternaam"
                                class="input__field form-control"
                                type="text"
                                v-model="formValues.achternaam"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">Geslacht</label>
                            <div class="form-row">
                                <div class="radio custom-radio radio__option">
                                    <input
                                        id="man"
                                        value="man"
                                        class="radio__input custom-control-input"
                                        type="radio"
                                        name="geslacht"
                                        v-model="formValues.geslacht"
                                    />
                                    <label
                                        class="radio__label custom-control-label"
                                        for="man"
                                    >
                                        Man
                                    </label>
                                </div>
                                <div class="radio custom-radio radio__option">
                                    <input
                                        id="vrouw"
                                        value="vrouw"
                                        class="radio__input custom-control-input"
                                        type="radio"
                                        name="geslacht"
                                        v-model="formValues.geslacht"
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
                            <label class="input__title"> Geboortedatum </label>
                            <input
                                class="input__field form-control"
                                type="date"
                                v-model="formValues.geboortedatum"
                                pattern="\d{4}-\d{2}-\d{2}"
                            />
                        </div>
                    </div>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label class="input__title">
                                Burgerservicenummer
                            </label>
                            <input
                                class="input__field form-control is-invalid"
                                type="number"
                                v-model="formValues.bsn"
                            />
                        </div>
                        <div
                            class="input__feedback invalid-feedback mt-1"
                            aria-live="polite"
                        >
                            <span
                                >Helaas is het ingevoerde burgerservicenummer
                                niet geldig. Probeer het opnieuw.</span
                            >
                        </div>
                    </div>
                </div>

                <h2 class="mt-5">Verzekering</h2>
                <div class="form-group">
                    <h3>Basisverzekering</h3>
                    <p>
                        In Nederland is de basisverzekering verplicht. Iedereen
                        wordt voor de basisverzekering geaccepteerd. De overheid
                        bepaalt welke zorg hierin zit en dit is dus bij elke
                        verzekeraar hetzelfde.
                    </p>

                    <div class="input__group">
                        <label for="basisverzekering" class="input__title">
                            Kies uw basisverzekering
                        </label>
                        <div class="form-row">
                            <div class="radio__tile">
                                <div class="radio custom-radio radio__option">
                                    <input
                                        for="basisverzekering"
                                        value="Basis Budget"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-budget"
                                        class="radio__input custom-control-input"
                                        v-model="formValues.basisverzekering"
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
                                <div class="radio custom-radio radio__option">
                                    <input
                                        for="basisverzekering"
                                        value="Basis Zeker"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-zeker"
                                        class="radio__input custom-control-input"
                                        v-model="formValues.basisverzekering"
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
                                <div class="radio custom-radio radio__option">
                                    <input
                                        for="basisverzekering"
                                        value="Basis Exclusief (Restitutie)"
                                        type="radio"
                                        name="radio-insurance"
                                        id="radio-insurance-basis-exclusief-(restitutie)"
                                        class="radio__input custom-control-input"
                                        v-model="formValues.basisverzekering"
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
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label for="betaaltermijn" class="input__title">
                                Kies je betaaltermijn
                            </label>
                            <select
                                id="betaaltermijn"
                                class="form-control"
                                v-model="formValues.betaaltermijn"
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
                            <label for="eigenRisico" class="input__title">
                                Kies de hoogste van het eigen risico
                            </label>
                            <select
                                id="eigenRisico"
                                class="form-control"
                                v-model="formValues.eigenRisico"
                            >
                                <option>€ 385 - verplicht eigen risico</option>
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
                        verschillende vergoedingen. De hoogte van de vergoeding
                        verschilt per pakket.hoogte van de vergoeding verschilt
                        per pakket
                    </p>
                    <div class="form-input my-4">
                        <div class="input__group">
                            <label
                                for="aanvullendeVerzekering"
                                class="input__title"
                            >
                                Kies uw aanvullende verzekering
                            </label>
                            <select
                                id="aanvullendeVerzekering"
                                class="form-control"
                                v-model="formValues.aanvullendeVerzekering"
                            >
                                <option selected>
                                    Geen aanvullende verzekering geselecteerd
                                </option>
                                <option>Aanvullend 1 - € 21,38 per jaar</option>
                                <option>Aanvullend 2 - € 85,06 per jaar</option>
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
                                for="tandartsverzekering"
                                class="input__title"
                            >
                                Kies uw tandartsverzekering
                            </label>
                            <select
                                id="tandartsverzekering"
                                class="form-control"
                                v-model="formValues.tandartsverzekering"
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
                    <div>
                        <p>
                            <strong>Uw basisverzekering:&nbsp;</strong
                            >{{ formValues.basisverzekering }}
                        </p>
                        <p>
                            <strong>Uw eigen risico:&nbsp;</strong
                            >{{ formValues.eigenRisico }}
                        </p>
                        <p>
                            <strong>Uw aanvullende verzekering:&nbsp;</strong
                            >{{ formValues.aanvullendeVerzekering }}
                        </p>
                        <p>
                            <strong>Uw tandverzekering:&nbsp;</strong
                            >{{ formValues.tandartsverzekering }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <h3>Totaalpremie</h3>

                    <div>
                        <p>
                            <strong>Uw betaaltermijn:&nbsp;</strong
                            >{{ formValues.betaaltermijn }}
                        </p>
                        <p>
                            <strong>Uw totaalpremie:&nbsp;</strong
                            >{{ formValues.basisverzekering }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <h3>Adres en contactgegevens</h3>
                    <div>
                        <p>
                            <strong>Voor- en achternaam:&nbsp;</strong
                            >{{ formValues.voornaam }}&nbsp;{{
                                formValues.tussenvoegsels
                            }}&nbsp;{{ formValues.achternaam }}
                        </p>
                        <p>
                            <strong>Geslacht:&nbsp;</strong
                            >{{ formValues.geslacht }}
                        </p>
                        <p>
                            <strong>Geboortedatum:&nbsp;</strong
                            >{{ formValues.geboortedatum | moment }}
                        </p>
                        <p><strong>BSN:&nbsp;</strong>{{ formValues.bsn }}</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card card--filled-secondary h-auto">
                    <div class="card-body">
                        <div class="sf-contactblok-content">
                            <h3 class="mb-2">We staan voor je klaar</h3>
                            <p class="mb-5">Twijfel je? Heb je een vraag?</p>
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
                                Open op maandag t/m vrijdag van 08:00 tot 17:00
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
