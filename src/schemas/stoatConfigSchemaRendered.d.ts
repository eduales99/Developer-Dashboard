/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StoatConfigSchemaRendered {
  version: number;
  enabled?: boolean;
  comment_template: string;
  updated_at: string;
  plugins?: {
    [k: string]: {
      metadata?: {
        [k: string]: unknown;
      };
      static_hosting: {
        path: string;
        link: string;
        link_md: string;
        status: string;
        status_md: string;
        status_link: string;
        sha: string;
        updated_at: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
  };
}
