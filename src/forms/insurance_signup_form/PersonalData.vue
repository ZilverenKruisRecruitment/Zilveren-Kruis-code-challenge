<template>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Naam</label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="signUpFormData.name"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>
                     Er is nog geen naam ingevuld, of het is te lang (max 50 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">
                    Tussenvoegsels
                </label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="signUpFormData.surnamePrefix"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>
                    De tussenvoegsel is te lang (max 50 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Achternaam</label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="signUpFormData.surname"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>
                    Er is nog geen achternaam ingevuld, of het is te lang(max 58 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Geslacht</label>
                <div class="form-row">
                    <div
                        class="radio custom-radio radio__option"
                        v-for="(gender, index) in signUpFormOptions.gender"
                        :key="index"
                    >
                        <input
                            :id="gender"
                            class="radio__input custom-control-input"
                            type="radio"
                            name="geslacht"
                            :value="gender"
                            v-model="signUpFormData.gender"
                        />
                        <label
                            class="radio__label custom-control-label"
                            :for="gender"
                        >
                            {{ gender }}
                        </label>
                    </div>
                </div>
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>
                    Er is geen geslacht geselecteerd.
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">
                    Geboortedatum
                </label>
                <input
                    class="input__field form-control"
                    type="date"
                    v-model="signUpFormData.birthday"
                    ref="datepicker"
                    @click="openDatePicker"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span>
                    Er is geen geboortedatum geselecteerd.
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">
                    Burgerservicenummer
                </label>
                <input
                    class="input__field form-control"
                    type="number"
                    v-model="signUpFormData.bsn"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
            >
                <span
                >Helaas is het ingevoerde
                    burgerservicenummer niet geldig. Probeer het
                    opnieuw.</span
                >
            </div>
        </div>
        <button class="action-btn" @click.prevent="nextFormComponent">Volgende</button>
    </div>
</template>

<script>
    export default {
        name: "PersonalData",
        props: {
            iterativeData: Object,
        },
        data() {
            return {
                // Alle opties voor dit formulier
                signUpFormOptions: {
                    gender: ['Man', 'Vrouw'],
                },
                signUpFormData: {
                    name: '',
                    surnamePrefix: '',
                    surname: '',
                    gender: '',
                    birthday: '',
                    bsn: ''
                }
            }
        },
        mounted() {
            // Met deze check controleer ik of de gebruiker hier terug kwam, en dus al data heeft. Anders behoud ik de standaardwaarden
            if (this.iterativeData.iterate === true) {
                this.signUpFormData = this.iterativeData.personal;
            }
        },
        methods: {
            // Omdat de HTML datepicker standaard alleen werkt met het icoontje, heb ik het zo aan het hele
            // vak gekoppelt.
            openDatePicker() {
                this.$refs.datepicker.showPicker();
            },
            // Ik wil dat de persoonsgegevens in een eigen blokje komen, dus geef ik de gehele data aan een key
            nextFormComponent() {
                this.$emit('next-form', {key: 'personal', value: this.signUpFormData});
            }
        }
    }
</script>

<style scoped>

</style>