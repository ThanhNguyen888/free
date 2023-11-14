let c = +prompt("Nhập c: ");
let d = +prompt("Nhập d: ");
let e = +prompt("Nhập e: ");


if (c > d) {
    if (c > e) { 
        alert("c là số lớn nhất")
    } else {
        alert("e là số lớn nhất") 
    }
} else {
    if (d > e) {
        alert ("d là số lớn nhất")
    } else {
        alert(" e là số lớn nhất") 
    }
}