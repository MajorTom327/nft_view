import esbuild from 'esbuild';
import htmlPlugin from '@chialab/esbuild-plugin-html';
import * as R from 'ramda';
import http from 'http';


(async () => {
  const isDev = process.env.NODE_ENV === 'development'
  const isProd = process.env.NODE_ENV === 'production'

  const baseSettings = {
    entryPoints: [
      'src/index.html',
    ],

    bundle: true,
    sourcemap: false,
    target: 'es2015',
    format: 'esm',
    outdir: 'dist',
    platform: 'browser',

    external: [],
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    assetNames: 'assets/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
    plugins: [
      htmlPlugin()
    ]
  }

  const devSettings = {
    jsxDev: true,
    jsx: 'automatic',
  }

  const prodSettings = {
    minify: true,
    drop: ['debugger', 'console'],
    treeShaking: true,
  }

  const settings = R.compose(
    R.when(R.always(isDev), R.mergeDeepRight(devSettings)),
    R.when(R.always(isProd), R.mergeDeepRight(prodSettings)),
  )(baseSettings);

  if (isDev) {
    const context = await esbuild.context(settings)
    context.serve({
      servedir: 'dist',
      port: 3000,
    }, () => {
      console.log('Server started on http://localhost:3000');
    });

    // context.watch()

  } else {
    await esbuild.build(settings)
  };
})()
