// flow-typed signature: 038d794ae7e84d07c9dc63d2f3a525bc
// flow-typed version: <<STUB>>/whatwg-fetch_v3.0.0/flow_v0.97.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'whatwg-fetch'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'whatwg-fetch' {
  declare type CredentialsType = 'omit' | 'same-origin' | 'include'

  declare type ResponseType =  'default' | 'error'

  declare type BodyInit = string | URLSearchParams | FormData | Blob | ArrayBuffer | $ArrayBufferView

  declare type RequestInfo = Request | URL | string

  declare type RequestOptions = {|
    body?: ?BodyInit;

    credentials?: CredentialsType;
    headers?: HeadersInit;
    method?: string;
    mode?: string;
    referrer?: string;
    signal?: ?AbortSignal;
  |}

  declare type ResponseOptions = {|
    status?: number;
    statusText?: string;
    headers?: HeadersInit;
  |}

   declare type HeadersInit = Headers | {[string]: string}

   declare export function fetch(input: RequestInfo, init?: RequestOptions): Promise<Response>

   declare export class Headers {
    @@iterator(): Iterator<[string, string]>;
    constructor(init?: HeadersInit): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): Iterator<[string, string]>;
    forEach((value: string, name: string, headers: Headers) => any, thisArg?: any): void;
    get(name: string): null | string;
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: string): void;
    values(): Iterator<string>;
  }

  declare interface AbortSignal {
    aborted: boolean;
    addEventListener(type: string, listener: (Event) => mixed, options?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: string, listener: (Event) => mixed, options?: EventListenerOptionsOrUseCapture): void;
  }

  declare export class Request {
    constructor(input: RequestInfo, init?: RequestOptions): void;
    clone(): Request;

    url: string;

    credentials: CredentialsType;
    headers: Headers;
    method: string;
    mode: ModeType;
    referrer: string;
    signal: ?AbortSignal;

    // Body methods and attributes
    bodyUsed: boolean;

    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
  }

  declare export class Response {
    constructor(input?: ?BodyInit, init?: ResponseOptions): void;
    clone(): Response;
    static error(): Response;
    static redirect(url: string, status?: number): Response;

    type: ResponseType;
    url: string;
    ok: boolean;
    status: number;
    statusText: string;
    headers: Headers;

    // Body methods and attributes
    bodyUsed: boolean;

    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
  }

  declare export class DOMException extends Error {
    constructor(message?: string, name?: string): void;
  }
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'whatwg-fetch/dist/fetch.umd' {
  declare module.exports: any;
}

declare module 'whatwg-fetch/fetch' {
  declare module.exports: any;
}

// Filename aliases
declare module 'whatwg-fetch/dist/fetch.umd.js' {
  declare module.exports: $Exports<'whatwg-fetch/dist/fetch.umd'>;
}
declare module 'whatwg-fetch/fetch.js' {
  declare module.exports: $Exports<'whatwg-fetch/fetch'>;
}
