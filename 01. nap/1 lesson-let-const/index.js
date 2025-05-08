let count = 1;
console.log(count);
count = 2; // it's OK
console.log(count);

const name1 = 'Szabolcs';
console.log(name1);
//name1 = 'Nagy';
//console.log(name1); // error: TypeError: Assignment to constant variable.

const user = {
    firstName: 'Szabolcs',
    lastName: 'Nagy',
    age: 49
};
//console.log(user);
user.age = 50; // ok — properties módosíthatók
//console.log(user);
console.log(`Sziasztok ${user.lastName} ${user.firstName} vagyok ${user.age} éves programozó.`);


