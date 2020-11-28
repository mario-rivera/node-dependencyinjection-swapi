import { SwapiInterface, SwapiResource } from "../../types";
import { URL } from 'url';
import { RequestInit, Response } from 'node-fetch';
import { ApiError } from "./Error/ApiError";

export class SwapiClient implements SwapiInterface
{
    fetch: Function;

    baseUrl: string;

    constructor(
        fetch: Function
    ){
        this.fetch = fetch;
    }

    setBaseUrl(url: string)
    {
        this.baseUrl = url;
    }

    async getResource(resource: SwapiResource, id?: number|string): Promise<any>
    {
        let url = new URL(`${resource}/`, this.baseUrl);
        if (id) {
            url = new URL(`${id}`, url);
        }

        let options: RequestInit = {method: 'GET'};

        return this.request(url, options);
    }

    async next(next: string): Promise<any>
    {
        let url = new URL(next);
        let options: RequestInit = {method: 'GET'};

        return this.request(url, options);
    }

    private async request(url: URL, options: Object): Promise<any>
    {
        const response: Response = await this.fetch(url, options);

        let body = await response.text();
        if (!response.ok) {
            throw new ApiError(response, body);
        }

        if (response.headers.get('content-type') == 'application/json') {
            body = JSON.parse(body);
        }

        return body;
    }
}
