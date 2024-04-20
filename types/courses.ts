export interface ISubject {
    id: number,
    title: string
}

export interface ICourse {
    id: number
    subject: number
    title: string
    description: string
    path: string,
    icon?: string
}