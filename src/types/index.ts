export interface Query {
    name: string,
    status: string,
    page: number | null,
}
export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    location: {
        name: string,
        url: string,
    }
}

export interface Query {
    name: string,
    status: string,
    page: number | null,
}


export interface Status {
    id: string,
    name: LifeStatus,
}

export type LifeStatus = 'unknown' | 'dead' | 'alive'