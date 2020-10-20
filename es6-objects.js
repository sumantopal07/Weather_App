const name = 'Andrew';

const userAge = 27;

//Object Property ShortHand Syntax
const user={
    name ,
    userAge,
    location: 'India'
}

//console.log(user)

//Object destructuring

const product = {
    label : 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//console.log(product);

// let {label:productLabel,stock=1,rating=4 }=product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction =(type,{label,stock})=>{

    console.log(type,label,stock);
}

transaction('order',product);