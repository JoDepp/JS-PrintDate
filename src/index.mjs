import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
</div>
`;

//function, because it's not a one liner we'll open it up and use backets
//which didn't work for me :/ * figured out why wrote it below
const todayDate = (date = new Date()) => {
  const days = date.getDay();
  const months = date.getMonth();
  const years = date.getFullYear();
  //return a template literal string
  return `${months}/${days}/${years}`;
}

console.log(todayDate());
//In JavaScript, January is month number 0, February is number 1, ...Finally, December is month number 11.
//In JavaScript, the first day of the week (day 0) is Sunday.
//Some countries in the world consider the first day of the week to be Monday.

// different way that worked
const d = new Date();
console.log(d);

