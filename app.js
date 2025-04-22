// Vazifa:11.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)
console.log(students)
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];


function getNamesByGrade(students, grade) {
  const studentsWithGrades = students.map((student) => {
    let studentGrade = 0;
    if (student.percent >= 85 && student.percent <= 100) {
      studentGrade = 5;
    } else if (student.percent >= 70 && student.percent < 85) {
      studentGrade = 4;
    } else if (student.percent >= 60 && student.percent < 70) {
      studentGrade = 3;
    }
    return { ...student, grade: studentGrade };
  });

  return studentsWithGrades
    .filter((student) => student.grade === grade)
    .map((student) => student.name);
}

// --------------------------------------------------------------------------------------------------------------

// Vazifa; 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {
//     dog: 2,
//     chicken: 3,
//     cat: 1,
//     rabbit: 1
//  }

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const countAnimals = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(countAnimals);

// ---------------------------------------------------------------------------------------------------------------------------

// Vazifa3:3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squares); // [1, 4, 9, 16, 25]

// ---------------------------------------------------------------------------------------------------------------------------------

// Vazifa4;Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)

// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const positiveSum = numbers
//   .filter(num => num > 0)
//   .reduce((sum, num) => sum + num, 0);

// console.log(positiveSum); // 42

// --------------------------------------------------------------------------------------------------------------------------------------

// // Vazifa:5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'

// const fullName = 'George Raymond Richard Martin';

// const initials = fullName.split(' ')
//   .map(word => word[0].toUpperCase())
//   .join('');

// console.log(initials);

// Vazifa:66.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

// const people = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// const sortedByAge = people.sort((a, b) => a.age - b.age);

// const ageDifference = sortedByAge[sortedByAge.length - 1].age - sortedByAge[0].age;

// console.log(ageDifference); // 54

// -----------------------------------------------------------------------------------------------------------------------

// Vazifa: 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log("Juftlar:", evenNumbers); // [2, 4, 6, 8, 10]
// console.log("Toqlar:", oddNumbers);  // [1, 3, 5, 7, 9]

// -----------------------------------------------------------------------------------------------------------------------------

// Vazifa8:  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)

// const arr = [1, 2, 3, 2, 4, 1, 5, 3];

// const uniqueArr = arr.reduce((acc, current) => {
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(uniqueArr); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------------------------------------------------------------------------------

// Vazifa9: Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// Vazifa10:
