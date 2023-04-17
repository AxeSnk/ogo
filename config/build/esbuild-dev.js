const ESBuild = require('esbuild');
const config = require('./esbuild-config');

const PORT = process.env.PORT || 3200;

const runWatchAndServer = async () => {
  const ctx = await ESBuild.context(config)

   await ctx.watch()

   const { host, port } = await ctx.serve({
    servedir: config.outdir ,
    port: PORT,
   })
     
   return new Promise((res, rej) => {
     res({host, port})
   })
}

runWatchAndServer()
 .then(({host, port}) =>  console.log(`Server started on http://localhost:` + port))
 .catch(console.error)
