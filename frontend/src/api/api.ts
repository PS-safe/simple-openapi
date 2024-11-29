/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Example API
 * This is a sample server Petstore server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration.ts';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface DtosLoginRequest
 */
export interface DtosLoginRequest {
    /**
     * 
     * @type {string}
     * @memberof DtosLoginRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof DtosLoginRequest
     */
    'username'?: string;
}
/**
 * 
 * @export
 * @interface DtosLoginResponse
 */
export interface DtosLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof DtosLoginResponse
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof DtosLoginResponse
     */
    'token'?: string;
    /**
     * 
     * @type {string}
     * @memberof DtosLoginResponse
     */
    'username'?: string;
}
/**
 * 
 * @export
 * @interface DtosRegisterRequest
 */
export interface DtosRegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof DtosRegisterRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof DtosRegisterRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof DtosRegisterRequest
     */
    'username'?: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Login
         * @summary Login
         * @param {DtosLoginRequest} loginRequest LoginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost: async (loginRequest: DtosLoginRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('authLoginPost', 'loginRequest', loginRequest)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register
         * @summary Register
         * @param {DtosRegisterRequest} registerRequest RegisterRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authRegisterPost: async (registerRequest: DtosRegisterRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequest' is not null or undefined
            assertParamExists('authRegisterPost', 'registerRequest', registerRequest)
            const localVarPath = `/auth/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * Login
         * @summary Login
         * @param {DtosLoginRequest} loginRequest LoginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authLoginPost(loginRequest: DtosLoginRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DtosLoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authLoginPost(loginRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authLoginPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Register
         * @summary Register
         * @param {DtosRegisterRequest} registerRequest RegisterRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authRegisterPost(registerRequest: DtosRegisterRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DtosLoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authRegisterPost(registerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authRegisterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * Login
         * @summary Login
         * @param {DtosLoginRequest} loginRequest LoginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(loginRequest: DtosLoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<DtosLoginResponse> {
            return localVarFp.authLoginPost(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Register
         * @summary Register
         * @param {DtosRegisterRequest} registerRequest RegisterRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authRegisterPost(registerRequest: DtosRegisterRequest, options?: RawAxiosRequestConfig): AxiosPromise<DtosLoginResponse> {
            return localVarFp.authRegisterPost(registerRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Login
     * @summary Login
     * @param {DtosLoginRequest} loginRequest LoginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authLoginPost(loginRequest: DtosLoginRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authLoginPost(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register
     * @summary Register
     * @param {DtosRegisterRequest} registerRequest RegisterRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authRegisterPost(registerRequest: DtosRegisterRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authRegisterPost(registerRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


