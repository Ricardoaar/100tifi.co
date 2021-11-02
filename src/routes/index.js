import header from '../templates/header.js';
import home from '../pages/home.js';
import error404 from '../pages/error404.js';
import character from '../pages/character.js';
import getHash from '../utils/getHash.js';
import resolveRoute from '../utils/resolveRoute.js';

const routes = {
    '/': home,
    '/:id': character,
    '/error404': error404,
    '/contact': 'Contact'
}

async function router() {
    const headerEl = document.getElementById('header') || null;
    const contentEl = document.getElementById('content') || null;
    // noinspection ES6RedundantAwait

    let hash = getHash();
    let route = await resolveRoute(hash);
    console.log(route)
    // noinspection ES6RedundantAwait
    headerEl.innerHTML = await header();
    let render = routes[route] ? routes[route] : error404;
    contentEl.innerHTML = await render();
}

export default router;
