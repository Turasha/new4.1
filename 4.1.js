// "use strict";
// // js array methods

// // 1. foreach

// let skills = ["html", "css", "javascript", "phyton"];

// skills.forEach(function (item) {
//   console.log(item);
// //   if (item.length>4){
// //     console.log(item);
// //   }
// });

// // 2.push, unhhift, shift, pop

// //push მასივის ბოლოში რაიმის დამატება
// let fruits = ["banana", "apple", "mango"];

// fruits.push('kiwi')
// console.log(fruits);

// unshift მასივის თავში დამატება
// fruits.unshift('strawberry')
// console.log(fruits);

//shift პირველი აიტემის წაშლა
// fruits.shift()
// console.log(fruits);

//pop წაშლა ბოლო აითემის
// fruits.pop()
// console.log(fruits);

//--splice ეს არის უნივერსალური ჩანაწერი სადაც შეგვიძლია დავამატოთ წავსალოთ ან ერთდროულად ორივე ნებისმიერ ადგილას
// let arraySkilss = ["html", "c#", "js", "notejs"];
//--წაშლა ინდექსით
// let deletedvalues=arraySkilss.splice(1, 2);
// console.log(arraySkilss);
// console.log(deletedvalues);

//წაშლილის ადგილას დამატება
// arraySkilss.splice(2,1, 'phyton');
// console.log(arraySkilss);

//--არაფერს არ ვშლით და უბრალოდ ვამატებთ
// arraySkilss.splice(1, 0, 'bootstraps')
// console.log(arraySkilss);

//ბოლოდან რომ მივწვდეთ ინდექსი უნდა მივუთითოთ მინუსით
// arraySkilss.splice(-2, 1);
// console.log(arraySkilss);

//slice  სლაისი ირჩევს მასივის კონკრეტულ ნაწილს და აბრუნებს ახალ მასივს (dabrunebuli masivistvis gvchirdeba axali cvladi)
// let arraySkilss2 = ["html", "c#", "js", "notejs"];

// let newArraySkills2= arraySkilss2.slice(1, 3)
// console.log(newArraySkills2);

// let array1 =['hello1', 14, 24, 'hello2']

// // map

// let numbers = [11, 20, 120, 25, 36];
// // let newNubers=numbers.map(function(el){
// //   return el*2
// // })
// // console.log(newNubers);
// let newNubers = numbers.map((el) => el * 2);
// console.log(newNubers); //2-ze gamravleba

// let newNubers2 = numbers.map((x) => Math.pow(x, 2)); //ricxvis kvadratshi ayvana
// console.log(newNubers2);

// let newNubers3 = numbers.map((y) => Math.sqrt(y)); //ricxvis vadratuli fesvi
// console.log(newNubers3);

// let fruitsArray = ["banana", "kiwi", "apple"];
// let fruitsArray2 = fruitsArray.map((fruits) => fruits.toUpperCase());
// console.log(fruitsArray2);

// filter როცა გვჭირდება მნიშვნელობების გაფილტრვა aqac abrunebs axal masivs sadac gafiltruli mniSvnelobebi vardeba

// let numbers = [14, 25, 36, 9, 18];
// let resulFilter= numbers.filter((x) => x>20)
// console.log(resulFilter);

// let resulFilter2= numbers.filter((y)=> y%2===1)
// console.log(resulFilter2);

// //revers masivis shetrialeba

// let arrayNew = ["banana", "apple", "mango"];
// // // arrayNew.reverse();
// // // console.log(arrayNew);

// // //index of
// console.log(arrayNew.indexOf("mango"));

// // every და some ორივეს გადაეცემა ფუნქცია და მოქმედებს ყველა ელემენტზე ამისი პასუხი იქნება ან თრუ ან ფოლსი
// // თუ ვიყენებთ ევერის მაშინ თრუს დააბრუნებს იმ შემთხვევაში თუ ყევლა ელემენტი არის თრუ
// //სამის ერთიც რომ აკმაყოფილებდეს პირობას მაინც დააბრუნებს თრუს

// let elements = [10, 15, 24, 36].every((item) => item < 5); //მოკლე ჩანაწერი

// console.log(elements);

// // let condition=(item)=> item<20;
// // let resultCondition=elements.every(condition)
// // console.log(resultCondition);

// //concat აერთიანებს ორ ან მეტ მნისვნელობას ახალ მასივში
// let users1 = ["anna", "nini"];
// let users2=['lasha', 'beka']

// let allUsers=users1.concat(users2)
// console.log(allUsers);

//reduce გამოიყენება როცა მასივის ელემენტებიდან მივიღოთ ერთი კომბინირებული მნიშვნელობა
//რედიუსს გადაეცემა ორი პარამეტრი ფუნქცია და საწყისი მნიშვნელობა

// let nastedArray = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce(function (accumulator, curentValue) {
//   return accumulator.concat(curentValue);
// }, []);

// console.log(nastedArray);

// let array2 = [14, 150, 'css', null, 'javascript', 25];

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let filteredLanguages = languages.filter(function(language) {
//     return language.length > 3;
// });

// console.log(filteredLanguages);
// let words = ["Madrid", "rome", "Milan", "berlin"];
// let newWords = words.filter((el) => el.includes("m") || el.includes('M'));
// console.log(newWords);

function counter(item) {
    return item.length;

}

let newCounter = counter("giorgii");

console.log(newCounter);

