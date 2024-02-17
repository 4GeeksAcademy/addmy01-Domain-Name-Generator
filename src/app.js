/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = ["org", "net", "com"];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let div = document.createElement(`div`);
          div.innerText = `${pronoun}${adjective}${noun}.${extension}`;

          // Remove trailing dot if it exists
          // if (domain.endsWith(".")) {
          //   domain = domain.slice(0, -1);
          // }
          document.body.appendChild(div);
          // console.log(domain);
        }
      }
    }
  }
};
