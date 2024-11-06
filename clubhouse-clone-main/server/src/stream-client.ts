import { StreamClient } from "@stream-io/node-sdk";

const apiKey="948hgb9rc338";
const secret="cns5ad28ysfrr9yyhczcs38u4473fxbsn5rnsbk2fx5ug77qa8bjeeqycdzq65xa";

export const client = new StreamClient(apiKey, secret);
