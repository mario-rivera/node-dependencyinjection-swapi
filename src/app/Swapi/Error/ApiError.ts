import { Response } from 'node-fetch';

export class ApiError extends Error
{
    private response: Response;
    private body: string;

    constructor(response: Response, body: string) {
        super(response.statusText);
        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor)

        this.response = response;
        this.body = body;
        
    }

    getResponse(): Response
    {
        return this.response;
    }

    getCode(): number
    {
        return this.response.status;
    }

    getBody(): string
    {
        return this.body;
    }

    toString()
    {
        return `${this.message} (${this.getCode()})`;
    }
}
