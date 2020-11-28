import { PeopleRepositoryInterface, SwapiInterface, Person, SwapiResources } from "../../types";

export class PeopleRepository implements PeopleRepositoryInterface
{
    client: SwapiInterface;

    constructor(
        client: SwapiInterface
    ) {
        this.client = client;
    }

    async find(id: number): Promise<Person>
    {
        const response = await this.client.getResource(SwapiResources.PEOPLE, id);
        return response as Person;
    }

    async* all(): AsyncGenerator<Person>
    {
        let next = null;
        let response = await this.client.getResource(SwapiResources.PEOPLE);

        do {
            for (const person of response.results) {
                yield person as Person;
            }

            next = response.next || null;
            if (next) {
                response = await this.client.next(next);
            }
        } while(next);
    }

    async count(): Promise<number>
    {
        let response = await this.client.getResource(SwapiResources.PEOPLE);
        return response.count;
    }
}
