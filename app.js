// task 1

const palindrom = (txt) => {
  let res = "";
  for (let i = txt.length - 1; i >= 0; i--){
    res += txt[i];
  }return txt === res ? true : false; 
};

// task 2

const firstNotDup = (txt) => {
  for (let i = 0; i < txt.length; i++){
    if(txt.indexOf(txt[i]) === txt.lastIndexOf(txt[i]))
    return txt[i];
  }
};

// Task 3 

const camelCase = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.substring(1);
};
const upCamelCase = (txt) => {
  let splitted = txt.split(" ");
  return splitted.reduce((acc, cur, index) => {
    if (index === 0 ) {
      acc = acc + cur;
    }else   acc = acc + ` ${camelCase(cur)}`;
    return acc;
  },"");
};

//Task 4: 

const suffix = (num) => {
  let x = num % 10,
      y = num % 100;
  if (x == 1 && y != 11) {
      return num + "st";
  }
  if (x == 2 && y != 12) {
      return num + "nd";
  }
  if (x == 3 && y != 13) {
      return num + "rd";
  }
  return num + "th";
};

//task 5

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const repetitive = (ar) =>{
  return ar.reduce((acc, cur) =>{
    if (acc[cur]){
      acc[cur] ++;
    }else acc[cur] =1;
    return acc;
  },{});
};

//task 6 

let array1 = [84, 43, 2, 23, 42, 2, 34];
let array2 = [16, 32, 1, 31, 34, 52, 123, 1];

let concate = array1.concat(array2);
let unicalElements = new Set(concate);

//task 7 

function readyToPutInTheDOM(arr) {
  return arr.map((el) => {
    return `<h1>${el.name}</h1><h2>${el.age}</h2>`
  })
}
console.log(readyToPutInTheDOM([
{ name: "Angelina Jolie",
  age: 80,
},
{
  name: "Eric Jones",
  age: 2,
},
{
  name: "Paris Hilton",
  age: 5,
},
{
  name: "Kayne West",
  age: 16,
},
{
  name: "Bob Ziroll",
  age: 100,
},
  ])
);

/* Task 8 */

let nummss = [45,84,7,55,43]
const sumOfDifferences = (arr) => {
  let sort = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < sort.length - 1 ; i++){
      sum += sort[i] - sort[i + 1];
  } return sum;
};


