import type AdditionalInsuranceOptions from "@/enums/AdditionalInsuranceOptions"

interface IExtraInsurance {
    option: AdditionalInsuranceOptions
    pricePerYear: Number,
}

export default IExtraInsurance
