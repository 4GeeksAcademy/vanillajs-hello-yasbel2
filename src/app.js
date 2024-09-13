/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi Abuela", "El Cartero", "Mi pájaro"];
  let action = ["comió", "orinó", "aplastó", "rompió"];
  let what = ["mis deberes", "mi telefono", "El coche"];
  let when = [
    "Antes de clase",
    "Cuando estaba durmiendo",
    "Cuando estaba haciendo ejercicio",
    "Mientras comía",
    "Cuando estaba rezando"
  ];
  let whoindice = Math.floor(Math.random() * who.length);
  let actionindice = Math.floor(Math.random() * action.length);
  let whatindice = Math.floor(Math.random() * what.length);
  let whenindice = Math.floor(Math.random() * when.length);
  document.querySelector(".excuse").innerHTML =
    who[whoindice] +
    " " +
    action[actionindice] +
    " " +
    what[whatindice] +
    " " +
    when[whenindice];
};
