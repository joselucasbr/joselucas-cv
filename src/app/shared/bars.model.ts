export interface Bars {
    name:string,
    label:string,
    level:number
}

export interface BarsList {
    title?:string,
    bars?:Bars[]
}