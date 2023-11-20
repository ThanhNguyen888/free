// let c = +prompt("Nhập c: ");
// let d = +prompt("Nhập d: ");
// let e = +prompt("Nhập e: ");


// if (c > d) {
//     if (c > e) { 
//         alert("c là số lớn nhất")
//     } else {
//         alert("e là số lớn nhất") 
//     }
// } else {
//     if (d > e) {
//         alert ("d là số lớn nhất")
//     } else {
//         alert(" e là số lớn nhất") 
//     }
// }



let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

let maxNum

if (a >= b && a >= c) {
    maxNum = a ;
} else if (b >= a && b >= c) {
        maxNum = b ;
    } else {
            maxNum = c ;
        }

// template string
console.log (`${maxNum} là giá trị lớn nhất`)