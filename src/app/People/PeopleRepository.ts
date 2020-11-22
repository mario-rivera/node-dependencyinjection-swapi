import { PeopleRepositoryInterface, SwapiInterface, Person } from "../../../types/swapi";

export class PeopleRepository implements PeopleRepositoryInterface
{
    client: SwapiInterface;

    constructor(
        client: SwapiInterface
    ) {
        this.client = client;
    }

    async all(): Promise<Person[]>
    {
        return [];
    }

    async find(id: number): Promise<Person>
    {
        const person = {birth_year: 'bar'};
        
        return person;
    }
}
