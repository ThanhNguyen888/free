

let a = +prompt("tổng doanh số tháng: ")
let b = 0.15 // hoa hong 1
let c = 0.1 // hoa hong 2
let d = 0.08 // hoa hong 3
let e = 0.05

if(a > 1000) {
    alert(a *= b )
} else { if( a >= 500 && a <=1000){
        alert(a *= c)
    } else { if(a >= 300 && a < 500) {
        alert(a *= d)
        } else {if(a >= 200) {
            alert(a *= e)
        } else 
                alert("khong co hoa hong")
         }
            
    } 

    }