<template>
    <div class="user-summary">
        <h2 class="mt-5">Controleren</h2>
        <div class="form-group user-summary__section">
            <h3>Gekozen pakket</h3>
            <span class="form-group__return" @click="previousFormComponent('insurance-data', 2)">Wijzig</span>
            <ul>
                <li>Basispakket: {{ signUpFormData.insurance.insurancePackage.name }}</li>
                <li>Eigen risico: {{ convertNumToEuro(signUpFormData.insurance.ownRisk.price) }}</li>
                <li>
                    Anvullende verzekering:
                    {{ signUpFormData.insurance.optionalInsurance.id === 'zero' ? 'Geen aanvullende verzekering' : signUpFormData.insurance.optionalInsurance.name}}
                </li>
                <li>
                    Tandarts verzekering:
                    {{ signUpFormData.insurance.dentistInsurance.id === 'zero' ? 'Geen tandartsverzekering' : signUpFormData.insurance.dentistInsurance.name}}
                </li>
            </ul>
        </div>
        <div class="form-group">
            <h3>Totaalpremie</h3>
            <!-- Ik had eigenlijk ook nog iets willen implementeren dat de gebruiker ook ziet wat hij/zij per maand en kwartaal kwijt zou zijn -->
            <!-- Maar die tijd had ik niet meer. Opzich niet ingewikkeld, dan zou ik de prijsstructuur in het object wat anders moeten opzetten -->
            <!-- En dat ik dan op basis van de billingFrequency de juiste prijs selecteer. -->
            <ul>
                <li>Betaaltermijn: {{ signUpFormData.insurance.billingFrequency }}</li>
                <li>Totaalpremie: {{ convertNumToEuro(totalInsurancePrice) }}</li>
            </ul>
        </div>
        <div class="form-group user-summary__section">
            <h3>Adres en contactgegevens</h3>
            <span class="form-group__return" @click="previousFormComponent('personal-data', 1)">Wijzig</span>
            <ul>
                <li>Voornaam: {{ signUpFormData.personal.name }}</li>
                <li>Achternaam: {{ signUpFormData.personal.surnamePrefix +  signUpFormData.personal.surname}}</li>
                <li>Geslacht: {{ signUpFormData.personal.gender }}</li>
                <li>Geboortedatum: {{ signUpFormData.personal.birthday }}</li>
                <li>Burgerservicenummer: {{ signUpFormData.personal.bsn }}</li>
            </ul>
        </div>
        <button class="action-btn" @click.prevent="submitSignUp">Verzeker mij!</button>
    </div>
</template>

<script>
    import globalMethods from '@/mixins/global_methods'

    export default {
        name: "UserSummary",
        // De globalMethods mixing biedt een convert functie voor nummers naar een nederlandse valuta string
        mixins: [globalMethods],
        props: {
            signUpFormData: Object
        },
        computed: {
            // Met deze computed kan het totaalbedrag op een overzichtelijke wijze berekend worden.
            totalInsurancePrice() {
                return this.signUpFormData.insurance.insurancePackage.price + this.signUpFormData.insurance.optionalInsurance.price + this.signUpFormData.insurance.dentistInsurance.price
            },
        },
        methods: {
            previousFormComponent(formComponent, formIndex) {
                this.$emit('previous-form', {index: formIndex, component: formComponent});
            },
            submitSignUp() {
                console.log('Data wordt verzonden naar de back-end')
                console.log(this.signUpFormData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-summary {
        &__section {
            position: relative;
        }
    }
    .form-group {
        &__return {
            color: #008cff;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                color: #1da1f2;
                font-weight: 800;
            }
        }
    }
</style>