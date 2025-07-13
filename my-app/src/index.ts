
// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return  Response.json({
// 			message:"Hello World"
// 		});
// 	},
// } satisfies ExportedHandler<Env>;


export default {
	async fetch(request:Request,env:Env,ctx:ExecutionContext){
			console.log(request.method);
			console.log(request.body);
			console.log(request.headers);
			
			if(request.method=="GET"){
				return Response.json({
					message:"Get request"
				})
			} else if(request.method=="POST"){
				return Response.json({
					message:"Post request"
				}) 
			} else {
				return Response.json({
					message:"Not Get/Postbnp request"
				})
			}
	}
}