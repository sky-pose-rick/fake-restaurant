//import the modules
import { loadHome } from "./homeModule";
import { loadMenu } from "./menuModule";
import { loadContact } from "./contactModule";

//make the buttons load modules and load the home module by default
const content = document.querySelector('#content');
document.querySelector('#home-tab').addEventListener('click', ()=>loadHome(content));
document.querySelector('#menu-tab').addEventListener('click', ()=>loadMenu(content));
document.querySelector('#contact-tab').addEventListener('click', ()=>loadContact(content));
loadHome(content);