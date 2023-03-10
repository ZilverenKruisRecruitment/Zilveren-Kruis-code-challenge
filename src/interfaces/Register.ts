import type IGender from "./Gender"
import type IInsurance from "./Insurance"
import type IReasoning from "./Reasoning"
import type IPayment from "./Payment"
import type IRisk from "./Risk"
import type IExtraInsurance from "./ExtraInsurance"
import type IDentistInsurance from "./DentistInsurance"

interface IRegister {
    reasoning: IReasoning,
    personalDetails: {
        firstName: String,
        infixes: String, // tussenvoegsels
        lastName: String,
        gender: IGender,
        birthDate: String,
        bsnNumber: Number
    },
    insurance: {
        basicInsurance: IInsurance
        paymentInterval: IPayment
    },
    risk: IRisk,
    additionalInsurance: {
        additionalInsuranceSelection: IExtraInsurance,
        dentistInsurance: IDentistInsurance
    }
}

export default IRegister
