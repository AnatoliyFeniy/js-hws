//1
const arr = [
  { id: '1',
    name: "product1",
    price: 100,
    avaible: true,
    sail: 0.8
   },
  { id: '2',
    name: "product2",
    price: 120,
    avaible: false,
    sail: 0
   },
  { id: '3',
    name: "product3",
    price: 1050,
    avaible: true,
    sail: 0
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
console.log(find);
//5
const avaible=arr.every(el=>el.avaible === true);
console.log(avaible);
//6
const sail=arr.some(el=>el.sail > 0 && el.sail <= 0.99);
console.log(sail);
//7
const get2 = arr.map(el => el.price);
console.log(get2);
//8
const max = Math.max(...arr.map(item => item.price));
console.log(max);
//9
const sort = arr.sort((a, b) => b.price - a.price);
console.log(sort);