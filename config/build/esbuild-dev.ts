import ESBuild from 'esbuild';
import config from './esbuild-config';

const PORT = Number(process.env.PORT) || 3200;

ESBuild.context({
  ...config
}).then(ctx => {
  ctx.serve({
    servedir: config.outdir,
    port: PORT
  })
  .then(({host, port}) => console.log(`Server started on http://localhost:` + port))
  .catch(err => console.log(err))
});
