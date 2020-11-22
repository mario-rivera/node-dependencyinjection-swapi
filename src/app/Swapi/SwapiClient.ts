import { SwapiInterface, SwapiResource, SwapiResponse } from "../../../types/swapi";
import { URL } from 'url';

export class SwapiClient implements SwapiInterface
{
    fetch: Function;

    baseUrl: URL;

    constructor(
        fetch: Function
    ){
        this.fetch = fetch;
    }

    setBaseUrl(url: string)
    {
        this.baseUrl = new URL(url);
    }

    async resourceById(resource: SwapiResource, id: number): Promise<SwapiResponse>
    {
        return {};
    }
}
