export interface Timeline {
    period:string,
    title:string,
    subtitle:string
}

export interface TimelineList {
    title?:string
    timeline?:Timeline[]
}