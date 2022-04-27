import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller= new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();//cancela o F5 da pagina após o submit
    controller.adiciona();
})