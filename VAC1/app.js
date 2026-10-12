// const jsonData = '{"name": "Pankaj", "age": 22, "city": "Jaipur"}';

// const obj = JSON.parse(jsonData);

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);


// const student = {
//     name:"Pankaj",
//     age :22,
//     city:"Jaipur"
// };

// const jsonString = JSON.stringify(student);

// console.log(jsonString);
// console.log(typeof student);
// console.log(typeof jsonString);

// // 1. Removed the comma after "Pankaj"
// const data = '{"name": "Pankaj"}'; 

// // 2. Fixed spelling to console.log
// console.log(JSON.parse(data));


const student = {
    name : "Pankaj",
    address : {
        city : "Jaipur",
        state : "Rajasthan"
    }
}

console.log(student.name);
console.log(student.address.state);
console.log(student.address.city);
