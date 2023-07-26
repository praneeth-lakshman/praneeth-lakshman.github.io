import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","avatar.png","favicon.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.1159243f.js","app":"_app/immutable/entry/app.b6f66ac1.js","imports":["_app/immutable/entry/start.1159243f.js","_app/immutable/chunks/scheduler.8d27d9d0.js","_app/immutable/chunks/singletons.5c7427fe.js","_app/immutable/chunks/paths.b9b337d6.js","_app/immutable/entry/app.b6f66ac1.js","_app/immutable/chunks/scheduler.8d27d9d0.js","_app/immutable/chunks/index.52fc8ad2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
