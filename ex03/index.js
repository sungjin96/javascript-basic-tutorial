// ======== 조건문 ========
const phone = "IOS"
// 1. if 문
if(phone === "IOS") {
    console.log("애플")    
} else if(phone === "Android") {
    console.log("안드로이드")
} else {
    console.log("알 수 없음")
}

if(phone === "IOS") console.log("애플")
else if(phone === "Android")console.log("안드로이드")
else console.log("알 수 없음")

// 2. switch 문
switch (phone) {
    case "IOS": 
        console.log("애플")
        break
    case "Android":
        console.log("안드로이드")
        break
    default: 
        console.log("알 수 없음")
}
let number = 10
switch (number) {
    case number === 10: 
        console.log("같다")
    case number > 10:
        console.log("크다")
    case number < 10:
        console.log("작다")
    default: 
        console.log("알 수 없음")
}

// ======== 반복문 ========
// 1. for 문
for (let a = 0; a < 10; a++) {
    console.log(a)
}
// 2. while 문
let b = 0;
while (b < 10) {
    console.log(b)
    b++
}