//ES5
function getMessage() {
  const year = new Date().getFullYear();
  return "The year is " + year;
}
console.log(getMessage());

//Es6
function getMessageTemplate() {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}
console.log(getMessageTemplate());
