import type IGender from "./Gender"
import type IInsurance from "./Insurance"
import type ReasoningOptions from "@/enums/ReasoningOptions"
import type PaymentInterval from "@/enums/PaymentInterval"
import type RiskOptions from "@/enums/RiskOptions"
import type AdditionalInsuranceOptions from "@/enums/AdditionalInsuranceOptions"
import type DentistInsuranceOptions from "@/enums/DentistInsuranceOptions"
import type PaymentMethods from "@/enums/PaymentMethod"

interface IRegister {
    reasoning?: ReasoningOptions,
    personalDetails: {
        firstName?: String,
        infixes?: String, // tussenvoegsels
        lastName?: String,
        gender?: IGender,
        birthDate?: String,
        bsnNumber?: Number
    },
    insurance: {
        basicInsurance?: IInsurance
        paymentInterval?: PaymentInterval
    },
    risk?: RiskOptions,
    additionalInsurance: {
        additionalInsuranceSelection?: AdditionalInsuranceOptions,
        dentistInsurance?: DentistInsuranceOptions
    },
    bankNumber?: String,
    paymentMethod?: PaymentMethods
}

export default IRegister
