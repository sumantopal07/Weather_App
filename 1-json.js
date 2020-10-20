const fs=require('fs');

const dataBuffer=fs.readFileSync('1-json.json');

let current_object=JSON.parse(dataBuffer.toString());

current_object.name="Sumanto";
current_object.age=20;

fs.writeFileSync('1-json.json',JSON.stringify(current_object));


// const dataBuffer=fs.readFileSync('1-json.json');

// console.log(typeof(dataBuffer));

// console.log(JSON.parse(dataBuffer.toString()).price);


// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     price: 2,
// }

// const bookJSON=JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON);


// const bookJSON=JSON.stringify(book);

// console.log(bookJSON);


// const parsedData=JSON.parse(bookJSON);

// console.log(typeof(parsedData.price));