////////////////////////////////
// Part 1
////////////////////////////////
console.log(`My comfort level: 5`);
////////////////////////////////
// Easy Going
////////////////////////////////
for (let index = 1; index <= 20; index++) {
  console.log(index);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let index = 0; index < 200; index += 2) {
  console.log(index);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let index = 0; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(`FizzBuzz`);
  }
  if (index % 3 !== 0) {
    console.log(`Fizz`);
  } else if (index % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(index);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;
wolfy[3] = `Gotham City`;
dart.push(`Hawkins`);
wolfy[0] = `Gameboy`;
//console.log(wolfy, sharky, plantee, porgee, dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const name of ninjaTurtles) {
  console.log(name.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));

favMovies.sort();
console.log(favMovies.indexOf("Titanic"));
/* The index of Titanic changes since the array elements are sorted. The array is mutated*/
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift()); //returns length
favMovies.splice(favMovies.indexOf("Django Unchained"), 0, "Avatar");
console.log(favMovies); //array was permanently changed. Splice mutates.
console.log(Math.ceil(favMovies.length / 2));
console.log(favMovies.length);
let okMovies = favMovies.slice(favMovies.length / 2 - 1);
console.log(`Mediocre movies: ${okMovies}`); //array is a copy
console.log(favMovies.indexOf("Fast and Furious"));
//The array and it's allocated space in memory stay the same. We are able to change the contents.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1)
console.log(whereIsWaldo)
whereIsWaldo[1].splice(whereIsWaldo[1].indexOf("Neff"), 1, "No One") 
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])
////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let index = 0; index < 20; index++) {
   console.log("Love me, pet me! HSSSSSS!")    
   if (index%2==0) {
    //if even do things
    rand = Math.floor(Math.random()*100);
    if (rand >=60) {
        console.log("...human...why you taking pictures of me?...")
    } else if(rand <= 30) {
        console.log("...the catnip made me do it...")
    }    
    else{
        console.log("...why does the red dot always get away...")
    }
   } else {
    //nothing happens for odd
   } 
    }

////////////////////////////////
//  Find the Median
////////////////////////////////
