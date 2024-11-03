import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono<{ Bindings: Env }>();

app.use('*', async (c, next) => {
	const corsMiddlewareHandler = cors({
		origin: c.env.CORS_ORIGIN ?? '*',
	});
	return corsMiddlewareHandler(c, next);
});

app.get('/', (c) => {
	return c.json({
		message: 'Hello',
	});
});

export default app;
