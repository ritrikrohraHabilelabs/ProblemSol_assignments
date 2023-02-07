let a = 5;
let first = "";
for (let i = 0; i < a; i++) {
  for (let j = 0; j <= i; j++) {
    first += "*";
  }
  first += "\n";
}
console.log(first);

//gap
console.log();

let b = 5;
let second = "";
for (let i = 0; i < b; i++) {
  for (let j = 0; j < b - i; j++) {
    second += "*";
  }
  second += "\n";
}
console.log(second);

//gap
console.log();

let c = 5; 
let third = "";
for (let i = 1; i <= c; i++) {
  for (let j = 1; j <= i; j++) {
    third += j;
  }
  third += "\n";
}
console.log(third);

//gap
console.log();

let d = 5; // height of pattern
let fourth = "";
for (let i = 0; i < d; i++) {
  for (let j = 1; j <= d - i; j++) {
    fourth += j;
  }
  fourth += "\n";
}
console.log(fourth);

//gap
console.log();

let e = 5;
let fifth = "";
for (let i = 1; i <= e; i++) {
  // for spaces
  for (let j = 1; j <= e - i; j++) {
    fifth += " ";
  }
  // for star
  for (let k = 0; k < 2 * i - 1; k++) {
    fifth += "*";
  }
  fifth += "\n";
}
console.log(fifth);

//gap
console.log();

let f = 5;
let sixth = "";
for (let i = 0; i < f; i++) {
  // for spaces
  for (let j = 0; j < i; j++) {
    sixth += " ";
  }
  // for star
  for (let k = 0; k < 2 * (f-i) - 1; k++) {
    sixth += "*";
  }
  sixth += "\n";
}
console.log(sixth);