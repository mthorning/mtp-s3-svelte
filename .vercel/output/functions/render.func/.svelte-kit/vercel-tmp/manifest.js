export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","spinner.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		entry: {"file":"_app/immutable/start-ac8350fc.js","imports":["_app/immutable/start-ac8350fc.js","_app/immutable/chunks/index-46cd8f91.js","_app/immutable/chunks/index-297b380d.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "admin",
				pattern: /^\/admin\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0,2],
				leaf: 4
			},
			{
				type: 'page',
				id: "auth",
				pattern: /^\/auth\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "admin/images",
				pattern: /^\/admin\/images\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0,2],
				leaf: 5
			},
			{
				type: 'page',
				id: "admin/photos",
				pattern: /^\/admin\/photos\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0,2],
				leaf: 6
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
