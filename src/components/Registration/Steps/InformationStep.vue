<template>
    <h2>Gegevens</h2>
    <div class="form-group">
        <h3>Reden van aanmelding</h3>
        <div class="form-input my-4">
            <label id="aanmeldreden-label" class="input__title">
                Wat is de reden van uw aanvraag?
            </label>
            <div class="input__group">
                <select class="form-control">
                    <option
                        value="Nieuwe werkgever met collectiviteit bij Zilveren Kruis"
                    >
                        Nieuwe werkgever met collectiviteit bij Zilveren Kruis
                    </option>
                    <option
                        selected
                        value="Overstappen per 1-1-2023 naar Zilveren Kruis"
                    >
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
                <label class="input__title">Naam</label>
                <input class="input__field form-control" type="text" />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Tussenvoegsels </label>
                <input class="input__field form-control" type="text" />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Achternaam</label>
                <input class="input__field form-control" type="text" />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Geslacht</label>
                <div class="form-row">
                    <div class="radio custom-radio radio__option">
                        <input
                            id="man"
                            class="radio__input custom-control-input"
                            type="radio"
                            name="geslacht"
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
                            class="radio__input custom-control-input"
                            type="radio"
                            name="geslacht"
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
                <input class="input__field form-control" type="text" />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Burgerservicenummer </label>
                <input
                    class="input__field form-control is-invalid"
                    type="text"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span
                    >Helaas is het ingevoerde burgerservicenummer niet geldig.
                    Probeer het opnieuw.</span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InformationStep'
};
</script>
