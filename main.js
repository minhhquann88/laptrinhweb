// var fullName = 'dau minh quan';
// var age=21
// var myFunction = function(){
//     console.log('hi')
// }
// myFunction()

// var myObject = {
//     name : 'quan',
//     age : 21,
//     hisFunction : function(){
//     }
// }
// console.log('myObject ',myObject)

// var result =undefined ||  'b';
// console.log(result)

// function write() {
//     var str=''
//     for(var i of arguments){
//         str+=i+'-'
//     }
//     console.log(str)
// }
// write('quan','minh')

// var firstName='quan'
// console.log(`toi ten la: ${firstName} `)

// var fullName='dau minh quanquan'
// console.log(fullName.replace(/q/g,'Q'))

// console.log(Number.isFinite(1/3))

// console.log(Number.isNaN(NaN))
// var classs ='lop'

// var myInfo = {
//     name: 'quan',
//     age: 21,
//     address: 'nghe an',
//     [classs]: 'cn05',
//     getName: function(){
//         return this.name
//     }
// }
// console.log(myInfo.getName())

// var courses = [
//     {
//         id : 1,
//         name : 'java',
//         coin : 250
//     },
//     {
//         id : 2,
//         name : 'html',
//         coin : 100
//     },
//     {
//         id : 3,
//         name : 'java',
//         coin : 10
//     }
// ]
// courses.forEach(function (course, index) {
//     console.log(index, course)
// })

// var listCourse2 = courses.every(function (course, index) {
//     return course.coin === 0
// })
// console.log(listCourse2)

// courses.some(function (course, index) {
//     console.log(index, course)
//     return course.coin == 0
// })

// courses.find(function (course, index) {
//     console.log(index, course)
//     return course.name === 'java'
// })

// var listCourse = courses.filter(function (course, index) {
//     return course.name === 'java'
// })
// console.log(listCourse)

// var sum = courses.reduce(function (sum,course,index,) {
//     var total = sum + course.coin
//     console.log(total)
//     return total
// },0)
// consnole.log(sum)

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce((total, number) => {
//     return total + number
// }, 0)
// console.log(result)

// Array.prototype.reduce2 = function(callback, result){
//     for(let i=0; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }
// const result = numbers.reduce2((total, number) => {
//     return total + number
// }, 0)
// console.log(result)

// var ten = 'Dau Minh Quan'
// console.log(ten.includes('Dau'))
// console.log(numbers.includes(1))

//CallBack1
// function myCallBack(a, b){
//     return a + b
// }
// function tong(a, b, curr){
//     console.log(curr(a , b))
// }
// tong(1, 2, myCallBack)

//CallBack2
// var courses = [
//     'java',
//     'php',
//     'ruby'
// ]
// Array.prototype.map2 = function(callback) {
//     var arr = []
//     for(var i=0; i < this.length; i++) {
//         arr.push(callback(this[i], i))
//     }
//     return arr
// }
// var result = courses.map2(function(course, index){
//     return course
// })
// console.log(result)


//forEach, find, filter, some, every, reduce

//forEach
// var course = [
//     'Java',
//     'Php',
//     'C++'
// ]
// // var result = course.forEach(function(course, index, array) {
// //     console.log(course, index, array)
// // })  
// // console.log(result) //underfinded

// //forEach2
// Array.prototype.forEach2 = function(cb) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             cb(this[index], index, this)
//         }
//     }
// }
// course.forEach2(function (course, index, array) {
//     console.log(course, index, array)
// })

var courses = [
    {
        name : 'JAVA',
        coin : 600,
        isFinish : true,
    },
    {
        name : 'RUBY',
        coin : 500,
        isFinish : true,
    },
    {
        name : 'C++',
        coin : 700,
        isFinish : true,
    },
];

//filter
// var filterCourses = courses.filter(function(course, index) {
//     return course.coin > 500
// });
// console.log(filterCourses);

//filter2
// Array.prototype.filter2 = function(cb) {
//     var result = []
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             if(cb(this[index], index)){
//                 result.push(this[index])
//             }
//         }
//     }
//     return result
// } 
// var filterCourses = courses.filter2(function(course, index) {
//     return course.coin > 500
// });
// console.log(filterCourses);

//some
// var result = courses.some(function(course, index, array) {
//     return course.isFinish === true
// })
// console.log(result);

//some2
// Array.prototype.some2 = function(cb) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             if(cb(this[index], index, this)){
//                 return true
//             }
//         }
//     }
//     return false
// }
// var result = courses.some2(function(course, index, array) {
//     return course.isFinish === true
// })
// console.log(result);

//every
var result = courses.every(function(course, index) {
    return course.isFinish === true
})
console.log(result);

//every2
Array.prototype.every2 = function(cb) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(!cb(this[index], index, this)) {
                return false
            }
        }
    }
    return true
}
var result = courses.every2(function(course, index) {
    return course.isFinish === true
})
console.log(result);
