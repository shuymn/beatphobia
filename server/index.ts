import { Hono } from 'hono';
import { cache } from 'hono/cache';
import api from './api';

const app = new Hono();

app.get(
	'/favicon.ico',
	cache({
		cacheName: 'favicon',
		cacheControl: 'public, max-age=3600, s-maxage=3600',
	}),
);

app.get(
	'/assets/*',
	cache({
		cacheName: 'assets',
		cacheControl: 'public, max-age=31536000, immutable',
	}),
);

app.route('/api', api);

export default app;
