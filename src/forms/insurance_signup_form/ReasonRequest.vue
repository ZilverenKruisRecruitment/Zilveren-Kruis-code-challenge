<template>
    <div class="form-group">
        <h3>Reden van aanmelding</h3>
        <div class="form-input my-4">
            <label id="aanmeldreden-label" class="input__title">
                Wat is de reden van uw aanvraag?
            </label>
            <div class="input__group">
                <select
                    class="form-control"
                    v-model="signUpFormData.reasonSignUp"
                >
                    <option v-for="(reason, index) in signUpFormOptions.signUpReasons" :key="index">{{reason}}</option>
                </select>
            </div>
        </div>

        <button class="action-btn" @click.prevent="nextFormComponent">Volgende</button>
    </div>
</template>

<script>
    export default {
        name: "ReasonRequest",
        props: {
            iterativeData: Object,
        },
        data() {
            return {
                // Door alle opties in een data object te zetten blijft het overzichtelijk en makkelijk
                // maintainable. Grote kans dat dit soort opties sowieso uit een database moeten komen.
                signUpFormData: {
                    reasonSignUp: 'Overstappen per 1-1-2023 naar Zilveren Kruis'
                },
                signUpFormOptions: {
                    signUpReasons: [
                        'Overstappen per 1-1-2023 naar Zilveren Kruis',
                        'Nieuwe werkgever met collectiviteit bij Zilveren Kruis'
                    ]
                }
            }
        },
        mounted() {
            // Met deze check controleer ik of de gebruiker hier terug kwam, en dus al data heeft. Anders zet ik standaardwaarden
            if (this.iterativeData.iterate === true) {
                this.signUpFormData = this.iterativeData;
            }
        },
        methods: {
            // Deze functie zorgt voor de volgende component en stuurt de formdata mee naar de parent
            // in een key-value pair style voor flexibiliteit
           nextFormComponent() {
               this.$emit('next-form', {key: 'reasonSignUp', value: this.signUpFormData.reasonSignUp});
           }
        }
    }
</script>

<style scoped>

</style>