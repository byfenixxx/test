// let arr = [1, [true], [[3], ["hello"]]];

// let newArr = [];

// const arrToFloat = function(arr, i=0) {
//     if(i === arr.length) return;
//     if(Array.isArray(arr[i])) arrToFloat(arr[i])
//     else newArr.push(arr[i])
//     arrToFloat(arr, ++i)
// }

// arrToFloat(arr);
// console.log(newArr)

// const myFunc = str => {
//     if (str.length > 1) {
//       return myFunc(str.slice(1));
//     }

//     return str;
//   };

//   console.log(myFunc('Hello world'));

// let count = 0;
// function immediate() {
//   if (count === 0) {
//     let count = 1;
//     let count1 = 2;
//     console.log(count);
//   }
//   console.log(count);
//   console.log(count1)
// }

// immediate();

// let mainObj = {
//     color: "red",

//     secObj: {
//         color: "white",

//         funcExprSecObj: function() {
//             console.log(this.color)
//         },

//         arrowFuncSecObj: () => {
//             console.log(this.color)
//         }
//     }
// }

// mainObj.secObj.funcExprSecObj();
// mainObj.secObj.arrowFuncSecObj();


// let arr = [1, 2, 3, 4, [1, 2, 3, 4]];

// let [c, e, r, t, [z, x]] = arr;

// console.log(z, x);


// let obj = {

//     fullname: "Sanzhar",

//     secObj: {
//         fullname: "Naruto"
//     }
// }

// let { fullname, secObj: {fullname: surname} } = obj;

// console.log(surname);

// let obj = {
//     first: [
//         {
//             name: "Sanzhar"
//         },
//         {
//             name: "Naruto"
//         }
//     ]

// }

// let { first: [{name: fullname}, {name: surname}] } = obj;

// console.log(fullname, surname)

// let number = 1;
// while (number < 100) {
//     if (number % 3 === 0) {
//         console.log('fizz');
//     } else if (number % 5 === 0) {
//         console.log("buzz")
//     }
//     else if (number % 3 === 0 && number % 5 === 0) {
//         console.log("fizzbuzz")
//     } else {
//         console.log(number)
//     }
//     number++
// }

// function checker (email){
//     let regExp = RegExp(/\w+\.@[mail.ru]/)
//     console.log(regExp.test(email))
// };

// checker("byfenixxx@mail.ru");

// let h1Tags = $("h1");

// console.log(h1Tags.hasClass("hello"))

// let img = $("img");
// let newElem = $(".block").clone();
// console.log(newElem);

// console.log(img)

// img.css("transition", "all 3s ease")
// setTimeout(() => {
//     img.css("opacity", "0")
// }, 100) 

// let img = document.getElementById('img');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   img.fadeOut(5000)
// });

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }

// let inp = document.getElementById('inputfile')
// inp.addEventListener('change', handleChange = (e) => {
//   getBase64(e.target.files[0]).then((res) =>
//     console.log(res)
//   );
// })

// console.log(2 + "2" * 2)
// document.addEventListener("keydown", (e) => {
//     console.log(e)
// })

// document.addEventListener("keypress", (e) => {
//     console.log(e)
// })

// function newVar() {
//     var i = 3
// }

// for (let i = 0; i < 3; i++) {
//     let e = 4
//     // console.log(i)
// }



// window.addEventListener("keydown", (e) => {
//   console.log(e)
// })

// document.addEventListener('keypress', function (e){
//     console.log("KEYPRESS", e)
//   })
//   document.addEventListener('keydown', function (e){
//     console.log('KEYDOWN!', e)
//   })
//   document.addEventListener('keyup', function(e){
//     console.log('KEYUP', e)
//   })
// myFunc();

// let num = 20;

// function myFunc() {
//   num = 10;
// }


// console.log(num);

// console.log((-20).toString());

// const a = "Sanzhar";
// const b = a.split("").reverse().join("");
// console.log(b);

// var romanToInt = function(s) {
//   let arr = [];
//   for (let key in s) {
//     switch (s[key]) {
//       case "M": arr.push(1000)
//       break
//       case "D": arr.push(500)
//       break
//       case "C": arr.push(100)
//       break
//       case "L": arr.push(50)
//       break
//       case "X": arr.push(10)
//       break
//       case "V": arr.push(5)
//       break
//       case "I": arr.push(1)
//       break
//     }
//   }
//   let newArr = [];
//   let newArr2 = [];
//   let used = false;
//   for (let key in arr) {
//     if (arr[+key] < arr[+key + 1]) {
//       newArr.push(arr[+key + 1] - arr[+key]);
//       used = true;
//     //   arr.splice(+key + 1, 1);
//     //   arr.splice(+key, 1);
//     } else {
//       if (used) {
//         used = false;
//         continue
//       }
//       newArr2.push(arr[key]);
//     }
//   }

//   return newArr.concat(newArr2).reduce((a, b) => a + b, 0)
// };

// console.log(romanToInt("MCMXCIV"));

// var singleNonDuplicate = function(nums) {
// let isDub = 0;
// let newArr = [];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] === nums[j]) {
//       isDub++;
//     }
//   }
//   if (isDub === 2) {
//     isDub = 0;
//     continue
//   } else {
//     newArr.push(nums[i]);
//   }
// }  

//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = 0;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] += 1;
//   }

//   for (let key in obj) {
//     if (obj[key] === 1) return key
//   }

// };

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))


// var reverseWords = function(s) {
//   let arr = s.split(" ");
//   let newArr =  arr.map((item) => {
//     return item.split("").reverse().join("")
//   })
//   return newArr.join(" ");
// };

// console.log(reverseWords("Let's take LeetCode contest"));

// console.log("Let's take LeetCode contest".split(" ")[0].split("").reverse().join(""))

// var sumOfUnique = function(nums) {
//   let obj = {};
//   for (let key in nums) {
//     if (obj[nums[key]]) {
//       obj[nums[key]] += 1;
//     } else {
//       obj[nums[key]] = 1;
//     }
//   }

//   let arr = []

//   for (let key in obj) {
//     if (obj[key] === 1) {
//       arr.push(+key);
//     }
//   }

//   let sum = 0;

//   for (let i of arr) {
//     sum += i;
//   }

//   return sum
// };

// console.log(sumOfUnique([1,2,3,2]))

// var countNegatives = function(grid) {
//   let counter = 0;
//   grid.forEach(item => {
//     item.forEach(item => {
//       if (item < 0) counter++
//     })
//   })
//   return counter
// };

// console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))

// var missingNumber = function(nums) {
//   nums.sort()
//   for (let i = 0; i < nums.length; i++) {
//       if (i !== nums[i]) return i
//   }
// };

// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// var mergeAlternately = function(word1, word2) {
//   let newArr = [];
//   if (word1.length > word2.length ) {
//     for (let i in word1) {
//       newArr.push(word1[i]);
//       newArr.push(word2[i]);
//     }
//   }  else {
//     for (let i in word2) {
//       newArr.push(word1[i]);
//       newArr.push(word2[i]);
//     }
//   }
//   console.log(word1[4])
//   return newArr.join("");
// };

// console.log(mergeAlternately("abc", "pqrsdafsdf"));

// var isPalindrome = function(s) {
//   let newStr = s.match(/[A-Za-z]/ig).join("").toLowerCase().replace(/[",", " "]/g, "");
// // let arr = newStr.split("").reverse().join("")
// // return newStr === arr.toLowerCase();
// let reversedStr = newStr.split("").reverse().join("")

// return newStr === reversedStr
// };

// console.log(isPalindrome())

// console.log("Start");
// const = new Promise((res, rej) => {
//   return new Promise((rs, rj) => {
//     rs
//   })
// })

<<<<<<< HEAD
// const x = 2;

// const myPromise = new Promise((res, rej) => {
//   if (x === 2) {
//     res("good job")
//   } else {
//     rej("bad job")
//   }
// })

// myPromise.then(res => {
//   return new Promise((rs, rj) => {
//     rs("good job 2")
//   })
// }).then(data => console.log(data))


// First commit

// console.log("First commit");

// third commit
console.log("Third commit");
=======
const x = 2;

const myPromise = new Promise((res, rej) => {
  if (x === 2) {
    res("good job")
  } else {
    rej("bad job")
  }
})

myPromise.then(res => {
  return new Promise((rs, rj) => {
    rs("good job 2")
  })
}).then(data => console.log(data))
>>>>>>> parent of 699d447 (second commit)
