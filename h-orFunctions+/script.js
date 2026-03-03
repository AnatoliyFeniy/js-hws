//1
const students = [
 { id: 1, name: "Олег", age: 19, course: 2, averageGrade: 88, city: "Львів" },
 { id: 2, name: "Марія", age: 20, course: 3, averageGrade: 95, city: "Київ" },
 { id: 3, name: "Іван", age: 18, course: 1, averageGrade: 76, city: "Харків" },
 { id: 4, name: "Софія", age: 21, course: 4, averageGrade: 91, city: "Одеса" },
 { id: 5, name: "Андрій", age: 19, course: 2, averageGrade: 84, city: "Дніпро" },
 { id: 6, name: "Катерина", age: 22, course: 4, averageGrade: 98, city: "Львів" }
];
const sum = students.reduce((acc, student)=>acc+student.averageGrade,0);
let avg = sum / students.length;
console.log(avg);
//2
const sum2 = students.reduce((a, b)=> a+b.age, 0);
console.log(sum2);
//3
const newst = {};
const res = students.reduce((acc, stud)=>{
    if(acc[stud.city]){
        acc[stud.city] += 1
    }
    else{
        acc[stud.city] = 1
    }
    return acc
}, {});
console.log(res);
//4
const srt1 = students.sort((a,b)=>a.averageGrade-b.averageGrade); //сортування по зростанню, a має йти першим від b, тобто a-b має мати від'ємне значення
console.log(srt1);
const srt2 = students.sort((a,b)=>b.averageGrade-a.averageGrade); //сортування по спаданню, b має йти першим від a, тобто b-a > 0
console.log(srt2);
//5
const sort1 = [...students].sort((a,b)=>a.age-b.age);
const sort2 = [...students].sort((a,b)=>b.age-a.age);
const result = students.reduce((acc, student)=>{
    if(student.age === sort1[0].age){
        console.log(`${student.name} - Наймолодший учень`)
    }
    if(student.age === sort2[0].age){
        console.log(`${student.name} - Найстарший учень`)
    }
    return acc
}, {});
console.log(result);