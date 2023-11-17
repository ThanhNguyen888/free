let cuocDT;
let c = +prompt("Tổng Số phút gọi: ");
let d = c - e - f;
let e = c - d - f;
let f = c - e - d ; 

 

if (f <= 50) {
    cuocDT = (25000 + f*600);
    alert("Cước đt của bạn là :" + cuocDT);
} else { if( 50 < e && e <= 200) {
        cuocDT =  25000 + e*400 + f*600;
        alert ("Cước đt của bạn là :" + cuocDT);
        } else if(d>200){
            cuocDT = 25000 + d*200 + e*400 + f*600;
            alert ("Cước đt của bạn là : "+ cuocDT);
            } else
                cuocDT = 25000 
                alert ("Cước đt của bạn là :" + cuocDT )
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