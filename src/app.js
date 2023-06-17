/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//

window.onload = function() {
  //write your code here 
  document.getElementById("excuse").innerHTML = generateExcuse();
  let generateExcuse = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
  //To create a consistent excuse, you have to concatenate one item from each array in the proper order.
    let subjectIndex = Math.floor(Math.random() * who.length); // random subject
    // console.log(who[subjectIndex]); // result
    let verbIndex = Math.floor(Math.random() * action.length); // random verb
    // console.log(action[verbIndex]); // result
    let objectIndex = Math.floor(Math.random() * what.length); // random object
    // console.log(what[objectIndex]); // result
    let clauseIndex = Math.floor(Math.random() * when.length); // random dependent clause
    // console.log(when[clauseIndex]); // result

  //Call the function onload and set the excuse into the innerHTML of the #excuse HTML element.
  console.log(
      document.getElementById("excuse").innerHTML =
        who[subjectIndex] +
        action[verbIndex] +
        what[objectIndex] +
        when[clauseIndex])
  }
}