let username: string = "Jihana";
const array: number[] = [1, 2, 3];
// username = 0;

console.log(array);
const students: { name: string; age: number } = {
  age: 26,
  name: "Jihana",
};
console.log(students);

type Details = {
  name: string;
  age: number;
};
const userDetails: Details = {
  age: 26,
  name: "jihana",
};
function getUserName(userDetails: Details): string {
  return userDetails.name;
}
const newvalue = getUserName(userDetails);
newvalue.