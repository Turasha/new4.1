

//task 2
let info= 'good day'
let newInfo=info.slice(5, 8)
console.log(newInfo);

//task3 
function counter(item) {
    return item.length;

}

let newCounter = counter("giorgii");

console.log(newCounter);

//task 5
let fruits = ['apple', 'mango', 'avocado','kiwi']

fruits.splice(-2, 1, 'strawberry')
console.log(fruits);


//task 6
let randomNumbers = [5, 25, 89, 120, 36];
randomNumbers.push("javascript", "python");
randomNumbers.unshift("html", "css");
randomNumbers.shift();
randomNumbers.pop();
console.log(randomNumbers);

//task 7
let fruits2 = ["orange", "banana", "kiwi"];
console.log(fruits2.length);
fruits2.splice(3, 0, "apple", "pinapple");
fruits2.splice(0, 0, "watermelon");
console.log(fruits2.length);
fruits2.splice(3,1, 'mango')
fruits2.splice(0,1)
fruits2.splice(-1,1)
console.log(fruits2.length);

//task 8
let array3 =[1, 2, 3, 4, 5]
array3.splice(3, 0, 'a', 'b','c')
console.log(array3);

//task 9
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let resultArray5 = array5.map((x)=> x/3);
console.log(resultArray5);

//task 10

let array7 = [15, 100, 25, 10, 36];
array7.splice(-2, 1);
console.log(array7);

//task 11
let array8 = [1, 2, 3 , 4 , 5]
array8.splice(2,1, 'three')
console.log(array8);

//task 14
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filterLanguage= languages.filter((language)=> language.length>3)
console.log(filterLanguage);

//task 15
let words = ["Madrid", "rome", "Milan", "berlin"];
let newWords = words.filter((el) => el.includes("m") || el.includes('M'));
console.log(newWords);

// task 16 indexof it ver vaketeb
let link = 'https://google.com'

function security(item){
    if (item.includes('https://')){
        return 'კი მოიცავს'
    }return 'არ მოიცავს'

}

let newLink=security(link)

console.log(newLink);

// task 17
let array6 = [-1, -2, -3, 4].some((x)=> x>3)
console.log(array6);


//19 18  13  12 4 1 