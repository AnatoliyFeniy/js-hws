//1
const arr = [
  { id: '1',
    name: "product1",
    price: 100
   },
  { id: '2',
    name: "product2",
    price: 120
   },
  { id: '3',
    name: "product3",
    price: 1050
   }
];
const get = arr.map(el => el.name);
console.log(get);
//2
const price = arr.map(num=>num.price * 1.15);
console.log(price);
//3
const filt=arr.filter(num=>num.price>1000);
console.log(filt);
//4
const find=arr.find(el=>el.id === '1');
console.log(find)