const person = {
    married: true
};

// person.married = !person.married

// if (person.married) {
//   person.married = false;
// } else {
//   person.married = true;
// }

person.married ? (person.married = false) : (person.married = true);


console.log(person);