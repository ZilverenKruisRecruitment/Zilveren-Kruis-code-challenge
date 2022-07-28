<!-- Errorvelden geef ik een conditional class op basis van de validator error boolean -->
<!-- De errorvelden gebruik ik v-show voor, omdat v-show relatief lichter is dan v-if -->

<!-- Alle inputs geef ik een @blur touch event vanuit vuelidate zodat gebruikers niet ervaren -->
<!-- dat ze bij hun eerste keer typen al een foutmelding krijgen, maar als het wél fout is en ze willen het verbeteren -->
<!-- dan gaat de error wél weg.  -->

<!-- Tot slot hebben alle velden ook een ref, zodat ik erheen kan scrollen als er een error is -->
<template>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-name">Naam</label>
                <input
                    class="input__field form-control"
                    :class="{'is-invalid': $v.signUpFormData.name.$error}"
                    type="text"
                    v-model="signUpFormData.name"
                    @blur="$v.signUpFormData.name.$touch()"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="$v.signUpFormData.name.$error"
                aria-live="polite"
            >
                <span>
                     Er is nog geen naam ingevuld, of het is te lang (max 50 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-surnamePrefix">
                    Tussenvoegsels
                </label>
                <input
                    class="input__field form-control"
                    :class="{'is-invalid': $v.signUpFormData.surnamePrefix.$error}"
                    type="text"
                    v-model="signUpFormData.surnamePrefix"
                    @blur="$v.signUpFormData.surnamePrefix.$touch()"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="$v.signUpFormData.surnamePrefix.$error"
                aria-live="polite"
            >
                <span>
                    De tussenvoegsel is te lang (max 50 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-surname">Achternaam</label>
                <input
                    class="input__field form-control"
                    :class="{'is-invalid': $v.signUpFormData.surname.$error}"
                    type="text"
                    v-model="signUpFormData.surname"
                    @blur="$v.signUpFormData.surname.$touch()"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="$v.signUpFormData.surname.$error"
                aria-live="polite"
            >
                <span>
                    Er is nog geen achternaam ingevuld, of het is te lang(max 58 tekens).
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-gender">Geslacht</label>
                <div class="form-row">
                    <div
                        class="radio custom-radio radio__option"
                        v-for="(gender, index) in signUpFormOptions.gender"
                        :key="index"
                    >
                        <input
                            :id="gender"
                            class="radio__input custom-control-input"
                            :class="{'is-invalid': $v.signUpFormData.gender.$error}"
                            type="radio"
                            name="geslacht"
                            :value="gender"
                            v-model="signUpFormData.gender"
                            @blur="$v.signUpFormData.gender.$touch()"
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
                v-show="$v.signUpFormData.gender.$error"
            >
                <span>
                    Er is geen geslacht geselecteerd.
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-birthday">
                    Geboortedatum
                </label>
                <input
                    class="input__field form-control"
                    :class="{'is-invalid': $v.signUpFormData.birthday.$error}"
                    type="date"
                    v-model="signUpFormData.birthday"
                    @blur="$v.signUpFormData.birthday.$touch()"
                    ref="datepicker"
                    @click="openDatePicker"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="$v.signUpFormData.birthday.$error"
                aria-live="polite"
            >
                <span>
                    Er is geen geboortedatum geselecteerd.
                </span>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title" ref="input-bsn">
                    Burgerservicenummer
                </label>
                <input
                    class="input__field form-control"
                    :class="{'is-invalid': $v.signUpFormData.bsn.$error}"
                    type="number"
                    v-model="signUpFormData.bsn"
                    @blur="$v.signUpFormData.bsn.$touch()"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                v-show="$v.signUpFormData.bsn.$error"
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
    // Met vuelidate kan ik simpel en effectief formulieren valideren op client-niveau.
    // Dit wordt gedaan om de gebruiksvriendelijkheid te verbeteren.
    import { validationMixin } from 'vuelidate'
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    // Ik heb een custom BSN validator gebouwd die hier een true of false terug geeft

    import { validateBsn } from '@/forms/custom_validators/custom_validation'
    import scrollToError from '@/mixins/scrollToError'

    export default {
        name: "PersonalData",
        mixins: [validationMixin, scrollToError],
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
        validations: {
            signUpFormData: {
                name: {
                    required,
                    maxLength: maxLength(50) // blijkbaar is de langste voornaam in Nederland 50 tekens
                },
                surnamePrefix: {
                    maxLength: maxLength(50)
                },
                surname: {
                    required,
                    maxLength: maxLength(58) // blijkbaar is de langste achternaam in Nederland 58 tekens
                },
                gender: {
                    required
                },
                birthday: {
                    required
                },
                bsn: {
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(9),
                    validBsn: validateBsn // Ik heb een custom BSN validator gebouwd die hier een true of false terug geeft
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
                this.$refs['datepicker'].showPicker();
            },

            nextFormComponent() {
                // Eerst controlleer ik of alle velden errorvrij zijn, dan pas mag de gebruiker door
                if (this.$v.signUpFormData.$invalid) {
                    let listOfErrorElements = [];

                    this.$v.signUpFormData.$touch();

                    // Deze loop controlleert welke velden een error heeft. En zet deze elementen in een array
                    for (const property in this.$v.signUpFormData) {
                        if (
                            typeof this.$v.signUpFormData[property] === 'object' &&
                            this.$v.signUpFormData[property].$error
                        ) {
                            listOfErrorElements.push(property)
                        }
                    }

                    // Als de code in dit blok zit, dan is er altijd een error. Dus ik kan gewoon het eerste element opgeven
                    this.scrollToError(listOfErrorElements[0]);

                } else {
                    // Ik wil dat de persoonsgegevens in een eigen blokje komen, dus geef ik de gehele data aan een key
                    this.$emit('next-form', {key: 'personal', value: this.signUpFormData});
                }
            }
        }
    }
</script>

<style scoped>

</style>