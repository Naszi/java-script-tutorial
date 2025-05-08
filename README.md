# java-script-tutorial
JavaScript gyorstalpaló. Kis leírásokkal és példa kódokkal. Esetleges interjú válaszokkal.

1. nap — Modern JavaScript (ES6+) alapok
Tematika
let és const

Arrow functions (=>)

Destructuring (Object / Array)

Spread (...) és Rest parameters

Promises

Async / Await

1. let / const
Elmélet
let → block scope (nincs hoisting mint var-nál)

const → block scope + nem reassigntable (de object properties módosíthatók)

Gyakorlat
js
Copy
Edit
let count = 0;
count = 1; // ok

const name = 'John';
// name = 'Doe'; // error

const user = { name: 'John' };
user.name = 'Doe'; // ok — properties módosíthatók
Feladat
Deklarálj egy const user objectet (név + életkor)

Próbálj reassignt (hibát kapsz)

Módosítsd a name property-t (sikerül)

Mit kell tudni?
let → változó értékét később módosíthatod, de block-scope-ú (csak {}-n belül él)

const → értékét nem reassignt-olhatod (de ha object/array, annak elemeit tudod módosítani)

Miért fontos interjún?
Ez az alapja annak, hogy „tiszta” és hibamentes kódot írj (ne legyen rejtett reassignment bugod).
TS-ben főleg preferáljuk a const-ot, ahol lehet.

Példa (jó + rossz)
js
Copy
Edit
// let — változtatható
let counter = 1;
counter = 2; // OK

// const — nem reassigntolható
const name = 'John';
// name = 'Jane'; // ❌ Error

// const + object — property módosítható
const user = { name: 'John', age: 30 };
user.age = 31; // OK

// const + array — push működik
const nums = [1, 2, 3];
nums.push(4); // OK
Interjú tipp
Mindig mondd el:

„Ahol lehet, const-ot használok, mert így garantálom, hogy a változó referencia ne változzon meg, csak a belső tartalma (ha object/array)”

2. Arrow functions
Elmélet
Rövidebb szintaxis

Nem köt saját this-t (lexical this)

js
Copy
Edit
const add = (a, b) => a + b;

const square = x => x * x;

const greet = () => console.log('Hello');
Feladat
Írj egy double függvényt arrow function-nel

Írj egy isEven függvényt (bool visszatérési érték)

Mit kell tudni?
Rövidebb, tömörebb szintaxis

Nem köt saját this-t → lexical scope this

Nem lehet constructor function (nincs new arrow function-nel)

Miért fontos interjún?
Ez gyakran előjön modern JS-ben, pl. callbackeknél (map, filter, event handler)

Példa (használat)
js
Copy
Edit
const add = (a, b) => a + b;

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// this context (fontos)
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
Normál function-nel itt a this elveszne → arrow function megoldja

Interjú tipp
„Arrow function-nel elkerülöm a this-bind problémákat callbackekben vagy event handlerekben”

3. Destructuring
Elmélet
Object/array elemek gyors kiszedése

js
Copy
Edit
const user = { name: 'John', age: 30 };
const { name, age } = user;

const numbers = [1, 2, 3];
const [first, second] = numbers;
Feladat
Object destructuring: user objectből name + age

Array destructuring: egy numbers tömbből az első két elem

Mit kell tudni?
Object vagy array elemek gyors kiszedése

Új név is adható (alias)

Miért fontos interjún?
Tiszta, olvasható kód → gyakran REST API válasznál is ez van

Példa
js
Copy
Edit
// Object destructuring
const user = { name: 'Alice', age: 25 };
const { name, age } = user; // name='Alice', age=25

// Alias
const { name: userName } = user; // userName='Alice'

// Array destructuring
const [first, second] = [10, 20, 30]; // first=10, second=20

// Nested destructuring
const user2 = { profile: { email: 'a@b.com' } };
const { profile: { email } } = user2;
Interjú tipp
„Destructuringgel tisztábban tudok paramétereket kinyerni API válaszból vagy function argumentumból”

4. Spread és Rest
Elmélet
Spread → kiterjeszt (másolás, összefésülés)

Rest → maradékot összegyűjt

js
Copy
Edit
const arr = [1, 2, 3];
const newArr = [...arr, 4];

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
Feladat
Merge-elj két tömböt spread-del

Készíts egy függvényt, ami rest paraméterrel bárhány számot összead

Mit kell tudni?
Spread → kiterjeszt (másolás, merge)

Rest → maradék összegyűjtése (pl. paraméterek)

Miért fontos interjún?
Modern JS-ben nagyon gyakori pattern — főleg props átadás React-ben, object klónozás

Példa
js
Copy
Edit
// Spread array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1,2,3,4]

// Spread object
const user = { name: 'Alice' };
const userWithAge = { ...user, age: 30 };

// Rest param
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6

// Destructuring + rest
const { name, ...rest } = { name: 'Alice', age: 25, city: 'Paris' };
// name='Alice', rest={ age:25, city:'Paris' }
Interjú tipp
„Spread-del tudok tisztán másolni és merge-elni, resttel pedig rugalmasan kezelni argumentumokat”

5. Promises
Elmélet
Aszinkron műveletek kezelése

js
Copy
Edit
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data received'), 1000);
  });

fetchData().then(data => console.log(data));
Feladat
Írj egy fakeApiCall függvényt, ami 2 másodperc múlva visszaad egy szöveget Promise-szal

Mit kell tudni?
Aszinkron műveletek (pl. API hívás) kezelése

then és catch chaining

Miért fontos interjún?
Aszinkron kódot mindig tudni kell kezelni (API call, DB query)

Példa
js
Copy
Edit
const fakeApiCall = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data received!'), 2000);
});

fakeApiCall()
  .then(data => console.log(data)) // Data received!
  .catch(err => console.error(err));
Interjú tipp
„Promise-szal tudom láncolni a műveleteket és kezelni a hibákat (reject) biztonságosan”

6. Async / Await
Elmélet
Promise kezelése szinkron kinézetű kóddal

js
Copy
Edit
async function getData() {
  const data = await fetchData();
  console.log(data);
}
Feladat
Használj await-et a fakeApiCall-ra

Console.log-olj eredményt

Mit kell tudni?
Promise-t kezelhetünk szinkron kinézetű kóddal (könnyebb olvasni)

await csak async function-ben használható

Miért fontos interjún?
Modern, olvashatóbb kód → backend Node.js-ben is rengetegszer van

Példa
js
Copy
Edit
async function getData() {
  try {
    const data = await fakeApiCall();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();
Interjú tipp
„Async/await-tel olvashatóbb és könnyebben hibakezelhető kódot írok Promise helyett”

Összefoglaló gyakorlófeladat
Készíts egy kis scriptet (kb. 20-30 sor):

Definiálj egy user objectet (name, age).
Használj destructuring-et, hogy kinyerd a name-et.
Készíts egy arrow function-t, ami a user nevét és egy köszönést ad vissza.
Használj spread-et, hogy új property-t adj hozzá (pl. city).
Készíts egy fake API call-t, ami 2 mp múlva visszaad egy message-et.
Async/await-tel hívd meg és console.log-olj mindent.


2. nap
OOP JavaScript — ES6 Classes
1. Class
Mit jelent?
A class egy sablon (blueprint), amiből objektumokat példányosítunk (new keyword)

Példa
js
Copy
Edit
class Person {
  // class body ide jön
}
Miért jó?
Tiszta, olvashatóbb szintaxist ad az OOP-hez a régi prototype chain helyett.

2. Constructor
Mit jelent?
A class constructor metódusa fut le, amikor példányosítunk egy objektumot (new ClassName())

Példa
js
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Példányosítás
const alice = new Person('Alice', 30);
console.log(alice.name); // 'Alice'
console.log(alice.age);  // 30
Fontos tudni
constructor csak 1 db lehet class-ban

Az objektum property-k itt kerülnek beállításra

3. Methods (Metódusok)
Mit jelent?
A class-hoz tartozó metódusok az objektum viselkedését írják le.
Nem kell function kulcsszó → class method shorthand

Példa
js
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  isAdult() {
    return this.age >= 18;
  }
}

const bob = new Person('Bob', 20);
bob.greet(); // 'Hello, my name is Bob'
console.log(bob.isAdult()); // true
Fontos tudni
Metódusok automatikusan a prototype-on vannak → memóriahatékony

Arrow function-t ne használj class metódusnak (elveszti this binding)

4. Inheritance (Öröklődés)
Mit jelent?
Egy class örökölhet egy másik class-tól → újrahasznosíthatjuk mezőket/metódusokat

Kulcsszavak:

extends → öröklés

super() → parent constructor meghívása

Példa
js
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // hívjuk a parent constructor-t
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}`);
  }
}

const carol = new Employee('Carol', 28, 'Developer');
carol.greet(); // Hello, my name is Carol
carol.work();  // Carol is working as a Developer
Fontos tudni
super() kötelező a constructor-ban, ha van saját constructor

Child class hozzáadhat új property-t/metódust

Örökli a parent class összes metódusát

5. Static methods (Statikus metódusok)
Mit jelent?
A static metódus a class-hoz tartozik (nem a példányhoz).
Nem kell példányosítani a class-t → közös utility metódusok

Példa
js
Copy
Edit
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.multiply(4, 5)); // 20
Fontos tudni
Nem érhető el példányról → csak class-ról (MathUtils.add() igen, instance.add() nem)

Tipikus use-case: utility/helper metódusok

6. super metódus hívás (override)
Mit jelent?
Child class-ban felülírhatunk egy parent metódust, és opcionálisan hívhatjuk az eredetit is super.metódusnév()

Példa
js
Copy
Edit
class Person {
  greet() {
    console.log('Hello from Person');
  }
}

class Employee extends Person {
  greet() {
    super.greet(); // hívjuk parent greet-et
    console.log('Hello from Employee');
  }
}

const dev = new Employee();
dev.greet();
// Hello from Person
// Hello from Employee
Interjú Tipp — Összefoglaló táblázat
Fogalom	Kulcsszó/szintaxis	Mit csinál
Class	class	OOP blueprint
Constructor	constructor	Property-k inicializálása
Method	method() {}	Példány metódus
Inheritance	extends, super	Öröklés
Static	static method() {}	Class metódus, példánytól független
super	super() / super.method()	Parent constructor/metódus hívás

Gyakorló Feladat (ha kéred, megoldom is)
Készíts egy Animal class-t (name property + speak metódus)
Készíts egy Dog class-t, ami örökli Animal-t → legyen egy bark() metódusa
Példányosíts egy Dog objektumot, hívd meg a metódusokat