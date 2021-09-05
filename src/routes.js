// alurapic/src/routes.js

import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [

    { path: '/home', component: Home, titulo: 'Home', name: "home", menu: true},
    { path: '/cadastro/', component: Cadastro, titulo: "Cadastro", name: "cadastro", menu: true },
    { path: '/cadastro/:id', component: Cadastro, titulo: "Cadastro", name: "altera", menu: false },
    { path: '*', component: Home , menu: false}

];