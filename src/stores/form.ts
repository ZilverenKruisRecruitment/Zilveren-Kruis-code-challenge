import { defineStore } from 'pinia';
import type Register from "@/interfaces/Register"
import ReasoningOptions from '@/enums/ReasoningOptions'
import PaymentMethods from "@/enums/PaymentMethod"

export const useFormDataStore = defineStore('form', {
    state: () => {
        return {
            registerData: {
                reasoning: ReasoningOptions.New,
                personalDetails: {
                    firstName: undefined,
                    infixes: undefined,
                    lastName: undefined,
                    gender: undefined,
                    birthDate: "1970-01-01",
                    bsnNumber: undefined,
                },
                insurance: {
                    basicInsurance: undefined,
                    paymentInterval: undefined,
                },
                risk: undefined,
                additionalInsurance: {},
                bankNumber: undefined,
                paymentMethod: PaymentMethods.Auto
            } as Register
        }
    },
    actions: {

    }
})
