<template>
    <div>
        <h2 class="mt-5">Verzekering</h2>
        <div class="form-group" ref="insuranceInput">
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
                    <div
                        class="radio__tile"
                        :class="{'radio__tile--choice': insurance.options === 'featured'}"
                        v-for="(insurance, index) in signUpFormOptions.insuranceOptions"
                        :key="index"
                    >
                        <div class="badge radio__tile-badge" v-if="insurance.options === 'featured'">
                            Meest gekozen
                        </div>
                        <div class="radio custom-radio radio__option">
                            <input
                                :value="insurance"
                                type="radio"
                                name="radio-insurance"
                                :id="insurance.formId"
                                class="radio__input custom-control-input"
                                v-model="signUpFormData.insurancePackage"
                            />
                            <label
                                :for="insurance.formId"
                                class="radio__label custom-control-label"
                            >
                                <p class="radio__description">
                                    {{ insurance.name}}
                                </p>
                                <p class="radio__price">
                                    {{ convertNumToEuro(insurance.price) }} per jaar
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
                    <select
                        class="form-control"
                        v-model="signUpFormData.billingFrequency"
                    >
                        <option v-for="(option, index) in signUpFormOptions.billingFrequency" :key="index">
                            {{ option }}
                        </option>
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
                    <!-- Het blokje laat ik staan maar ik vervang de input door een tekstvak in -->
                    <!-- dezelfde stijl, dan verchijnt er niet ineens iets 'nieuws' voor de gebruiker -->
                    <!-- Vervolgens koppel ik er een functie aan zodat de gebruiker naar de basisverzekering toe scrolt -->
                    <div class="input__select-risk-warning" v-show="signUpFormData.insurancePackage === ''" @click="scrollToInsurance">
                        Kies eerst een basisverzekering.

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-up"><polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path></svg>
                    </div>
                    <select
                        class="form-control"
                        v-model="signUpFormData.ownRisk"
                        v-show="signUpFormData.insurancePackage !== ''"
                    >
                        <option v-for="(option, index) in signUpFormOptions.ownRisk" :key="index" :value="option">
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
                    <label class="input__title">
                        Kies uw aanvullende verzekering
                    </label>
                    <select
                        class="form-control"
                        v-model="signUpFormData.optionalInsurance"
                    >
                        <option
                            v-for="(insurance, index) in signUpFormOptions.optionalInsurance"
                            :value="insurance"
                            :key="index"
                        >
                            {{ insurance.name }} - {{ convertNumToEuro(insurance.price) }} per jaar
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
                    <select
                        class="form-control" v-model="signUpFormData.dentistInsurance"
                    >
                        <option
                            v-for="(insurance, index) in signUpFormOptions.dentistInsurance"
                            :value="insurance"
                            :key="index"
                        >
                            {{ insurance.name }} - {{ convertNumToEuro(insurance.price) }} per jaar
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <button class="action-btn" @click.prevent="nextFormComponent">Volgende</button>
    </div>
</template>

<script>
    import globalMethods from '@/mixins/global_methods'

    export default {
        name: "InsuranceData",
        // De globalMethods mixing biedt een convert functie voor nummers naar een nederlandse valuta string
        mixins: [globalMethods],
        props: {
            iterativeData: Object,
        },
        data() {
            return {
                // InsuranceData heeft wat meer opties
                signUpFormOptions: {
                    insuranceOptions: [
                        {
                            name: 'Basis Budget',
                            formId: 'radio-insurance-basis-budget',
                            price: 1393.26,
                            // Door typescript heb ik het principe geleerd om meer met uitgeschreven opties te werken
                            // zodat wanneer er ooit een ander soort stijl moet komen, de code niet gerefactured hoeft
                            // te worden. Dus inplaats van featured: true/false maak ik er options: 'option' van.
                            options: 'none'
                        },
                        {
                            name: 'Basis Zeker',
                            formId: 'radio-insurance-basis-zeker',
                            price: 1483.54,
                            options: 'featured'
                        },
                        {
                            name: 'Basis Exclusief (Restitutie)',
                            formId: 'radio-insurance-basis-exclusief-(restitutie)',
                            price: 1624.62,
                            options: 'none'
                        }
                    ],
                    billingFrequency: ['per jaar', 'per kwartaal', 'per maand'],
                    ownRisk: [
                        {
                            label: '€ 385 - verplicht eigen risico',
                            price: 385
                        },
                        {
                            label: '€ 885 - korting van € 22 per jaar',
                            price: 885
                        }
                    ],
                    optionalInsurance: [
                        {
                            id: 'zero',
                            name: 'Geen aanvullende verzekering geselecteerd',
                            price: 0,

                        },
                        {
                            id: 'aanvullend-1',
                            name: 'Aanvullend 1',
                            price: 21.38,
                        },
                        {
                            id: 'aanvullend-2',
                            name: 'Aanvullend 2',
                            price: 85.06,
                        },
                        {
                            id: 'aanvullend-3',
                            name: 'Aanvullend 3',
                            price: 198.63,
                        },
                        {
                            id: 'aanvullend-4',
                            name: 'Aanvullend 4',
                            price: 359.73,
                        }
                    ],
                    dentistInsurance: [
                        {
                            id: 'zero',
                            name: 'Geen tandartsverzekering geselecteerd',
                            price: 0
                        },
                        {
                            id: 'tand-1',
                            name: 'Tand 1',
                            price: 80.28
                        },
                        {
                            id: 'tand-2',
                            name: 'Tand 2',
                            price: 221.65
                        },
                        {
                            id: 'tand-3',
                            name: 'Tand 3',
                            price: 449.36
                        }
                    ]
                },
                // Formdata met standaardwaarden
                signUpFormData: {
                    insurancePackage: '',
                    billingFrequency: 'per jaar',
                    ownRisk: {
                        label: '€ 385 - verplicht eigen risico',
                        price: 385
                    },
                    optionalInsurance: {
                        id: 'zero',
                        name: 'Geen aanvullende verzekering geselecteerd',
                        price: 0
                    },
                    dentistInsurance: {
                        id: 'zero',
                        name: 'Geen tandartsverzekering geselecteerd',
                        price: 0
                    }
                }
            }
        },
        mounted() {
            // Met deze check controleer ik of de gebruiker hier terug kwam, en dus al data heeft. Anders behoud ik de standaardwaarden
            if (this.iterativeData.iterate === true) {
                this.signUpFormData = this.iterativeData.insurance;
            }
        },
        methods: {
            scrollToInsurance() {
                let insurancePosition = this.$refs.insuranceInput.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({top: insurancePosition, left: 0, behavior: 'smooth'})
            },
            nextFormComponent() {
                this.$emit('next-form', {key: 'insurance', value: this.signUpFormData});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
        &__select-risk-warning {
            border-radius: 24px;
            color: #002857;
            display: block;
            width: 100%;
            height: 2.5rem;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.625;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #002857;
            border-radius: 24px;
            cursor: pointer;

            svg {
                float: right;
            }
        }
    }
</style>