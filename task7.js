let cuocDT;
let a = +prompt("Tổng Số phút gọi: ");



if ( a > 0 &&  a <= 50) {
    cuocDT = (25000 + a*600);
    alert("Cước đt của bạn là :" + cuocDT);
} else { if( 50 < a && a <= 200) {
        cuocDT =  25000 + (a-10)*400 + 10*600;
        alert ("Cước đt của bạn là :" + cuocDT);
        } else ( a > 200)
            cuocDT = 25000 + (a-10-15)*200 + 15*400 + 10*600;
            alert ("Cước đt của bạn là : "+ cuocDT);
    }






    // alert(a == b + d*200 + e*400 + f*600)

    // alert(a == b + e*400 + f*600)


// let sophut = +prompt("Nhập số phút: ");
// let cuocDT;

// if ( sophut <= 50 ) {
//     cuocDT = sophut * 3000;
//     alert("tiền cước điện thoại của bạn là: " + cuocDT)
// } else if ( 50 < sophut && sophut <= 200 ) {
//     cuocDT = sophut * 2000;
//     alert("tiền  cước điện thoại của bạn là: " + cuocDT)
// } else if ( 200 < sophut && sophut <= 300 ) {
//     cuocDT = sophut * 1500;
//     alert("tiền cước điện thoại của bạn là: " + cuocDT)
// } else {
//     cuocDT = sophut * 1000;
//     alert ("tiền cước điện thoại của bạn là: " + cuocDT)
// }