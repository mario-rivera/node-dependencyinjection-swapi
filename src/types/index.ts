export interface SwapiInterface {
    getResource(resource:SwapiResource, id?: number): Promise<any>;
    next(next: string): Promise<any>;
}

export interface Person {
    name: string,
    birth_year?: string,
    eye_color?: string,
    films?: string[],
    gender?: string,
    hair_color?: string,
    height?: string|number,
    homeworld?: string,
    mass?: string,
    skin_color?: string,
    created?: string,
    edited?: string
    species?: string[],
    starships?: string[],
    url?: string,
    vehicles?: string[]
}

export interface ResourceRepositoryInterface {
    all(): AsyncGenerator<Person>,
    find(id: number): Promise<Person>,
    count(): Promise<number>
};

export interface PeopleRepositoryInterface extends ResourceRepositoryInterface {

}

export enum SwapiResources {
    PEOPLE = 'people',
    FILMS = 'films',
    VEHICLES ='vehicles'
}

export type SwapiResource = SwapiResources.PEOPLE | SwapiResources.FILMS | SwapiResources.VEHICLES;
