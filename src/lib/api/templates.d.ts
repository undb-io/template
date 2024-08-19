export interface paths {
    "/bases/templates/tables/templates/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get templates records
         * @description Get templates records
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description record data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            total: number;
                            records: components["schemas"]["Record"][];
                        };
                    };
                };
            };
        };
        put?: never;
        /**
         * Create templates record
         * @description Create templates record
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        values: {
                            Title?: string | null;
                            Cover?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                            Summary?: string | null;
                            baseId: string;
                            spaceId: string;
                            Images?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                        };
                    };
                };
            };
            responses: {
                /** @description Record Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /**
         * Bulk delete templates records
         * @description Bulk delete templates records
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        filter: Record<string, never>;
                    };
                };
            };
            responses: {
                /** @description record data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            deletedCount: number;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /**
         * Bulk update templates records
         * @description Bulk update templates records
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        filter: Record<string, never>;
                        values: {
                            Title?: string | null;
                            Cover?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                            Summary?: string | null;
                            baseId?: string;
                            spaceId?: string;
                            Images?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                        };
                    };
                };
            };
            responses: {
                /** @description records updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BulkUpdateRecordsOutput"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/bases/templates/tables/templates/records/{recordId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get templates record by id
         * @description Get templates record by id
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    recordId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description record data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: components["schemas"]["Record"] & unknown;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete templates record by id
         * @description Delete templates record by id
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    recordId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description record data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        /**
         * Update templates record
         * @description Update templates record
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    recordId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        values: {
                            Title?: string | null;
                            Cover?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                            Summary?: string | null;
                            baseId?: string;
                            spaceId?: string;
                            Images?: ({
                                id: string;
                                url: string;
                                signedUrl?: string | null;
                                name: string;
                                token: string;
                                size: number;
                                type: string;
                            }[] | null) | {
                                /** @enum {string} */
                                type: "set";
                                value: {
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null;
                            } | unknown;
                        };
                    };
                };
            };
            responses: {
                /** @description Record Updated */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/bases/templates/tables/templates/records/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk create templates record
         * @description Bulk create templates record
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        records: {
                            id?: string;
                            values: {
                                Title?: string | null;
                                Cover?: ({
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null) | {
                                    /** @enum {string} */
                                    type: "set";
                                    value: {
                                        id: string;
                                        url: string;
                                        signedUrl?: string | null;
                                        name: string;
                                        token: string;
                                        size: number;
                                        type: string;
                                    }[] | null;
                                } | unknown;
                                Summary?: string | null;
                                baseId: string;
                                spaceId: string;
                                Images?: ({
                                    id: string;
                                    url: string;
                                    signedUrl?: string | null;
                                    name: string;
                                    token: string;
                                    size: number;
                                    type: string;
                                }[] | null) | {
                                    /** @enum {string} */
                                    type: "set";
                                    value: {
                                        id: string;
                                        url: string;
                                        signedUrl?: string | null;
                                        name: string;
                                        token: string;
                                        size: number;
                                        type: string;
                                    }[] | null;
                                } | unknown;
                            };
                        }[];
                    };
                };
            };
            responses: {
                /** @description Record Created */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            createdCount: number;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bases/templates/tables/templates/records/{recordId}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Duplicate templates record by id
         * @description Duplicate templates record by id
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    recordId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description record data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            recordId: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bases/templates/tables/templates/records/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk duplicate templates records
         * @description Bulk duplicate templates records
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        filter: Record<string, never>;
                    };
                };
            };
            responses: {
                /** @description records updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BulkDuplicateRecordsOutput"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bases/templates/tables/templates/subscription": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Subscribe templates record events
         * @description Subscribe templates record events
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description subscription event schema */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/event-stream": {
                            event?: unknown;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        RecordId: string;
        RecordValues: {
            id: string;
            Title?: string | null;
            createdAt: string;
            createdBy: string;
            updatedAt: string;
            updatedBy: string;
            autoIncrement: number;
            Cover?: {
                id: string;
                url: string;
                signedUrl?: string | null;
                name: string;
                token: string;
                size: number;
                type: string;
            }[] | null;
            Summary?: string | null;
            baseId: string;
            spaceId: string;
            Images?: {
                id: string;
                url: string;
                signedUrl?: string | null;
                name: string;
                token: string;
                size: number;
                type: string;
            }[] | null;
        };
        RecordDisplayValues: {
            createdBy?: unknown;
            updatedBy?: unknown;
        };
        Record: {
            id: components["schemas"]["RecordId"];
            values: components["schemas"]["RecordValues"];
            displayValues: components["schemas"]["RecordDisplayValues"];
        };
        /** @description records count that has been updated */
        BulkUpdateRecordsOutput: {
            modifiedCount: number;
        };
        /** @description records count that has been updated */
        BulkDuplicateRecordsOutput: {
            count: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
