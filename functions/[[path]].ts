import handle from 'hono-remix-adapter/cloudflare-pages';
import { getLoadContext } from '../load-context';
// @ts-ignore - the server build file is generated by `remix vite:build`
import * as build from '../build/server';
import server from '../server';

export const onRequest = handle(build, server, { getLoadContext });
