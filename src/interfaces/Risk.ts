import type RiskOptions from "@/enums/RiskOptions"

interface IRisk {
    risk: RiskOptions
    price: Number,
}

export default IRisk
