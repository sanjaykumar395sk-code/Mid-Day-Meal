
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mid-day-meal-scheme/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/mid-day-meal-scheme/mid-day-meal-scheme/home",
    "route": "/mid-day-meal-scheme"
  },
  {
    "renderMode": 2,
    "route": "/mid-day-meal-scheme/mid-day-meal-scheme/home"
  },
  {
    "renderMode": 2,
    "route": "/mid-day-meal-scheme/mid-day-meal-scheme/calculator"
  },
  {
    "renderMode": 2,
    "redirectTo": "/mid-day-meal-scheme/mid-day-meal-scheme/home",
    "route": "/mid-day-meal-scheme/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5381, hash: 'd1e5d331d4beed13c9cc04228ba9b562968f6243794672d47d5552f361f78798', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 974, hash: '3af657741c14c7ed7b450ec0f57d31809e80c7717348bf9a15b88c2b0f335558', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'mid-day-meal-scheme/home/index.html': {size: 21542, hash: 'c83d16af247986db35bfb19d858f9b7a2a5781cc1f7d7196a8c66d43f8d61bcb', text: () => import('./assets-chunks/mid-day-meal-scheme_home_index_html.mjs').then(m => m.default)},
    'mid-day-meal-scheme/calculator/index.html': {size: 24530, hash: '301ccea75bff0a5700b255e02c99584cd05cc12ccdd9299d172a557978fc988b', text: () => import('./assets-chunks/mid-day-meal-scheme_calculator_index_html.mjs').then(m => m.default)},
    'styles-RPWJNIGO.css': {size: 316010, hash: 'Rh0Eed34zMU', text: () => import('./assets-chunks/styles-RPWJNIGO_css.mjs').then(m => m.default)}
  },
};
