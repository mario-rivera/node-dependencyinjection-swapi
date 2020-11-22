export interface SwapiInterface {
    resourceById(resource:SwapiResource, id: number): Promise<SwapiResponse>;
}

type SwapiResource  = 'people' | 'films' | 'vehicles';

type SwapiResponse = Object;

export interface Person {
    birth_year?: string
}

export interface PeopleRepositoryInterface {
    all(): Promise<Person[]>,
    find(id: number): Promise<Person>
}