// 함수
function 더하기(a, b) {
    return a+b
}

function 빼기(a,b) {
    return a-b
}

function getName() {
    return "이름"
}

const getNameV2 = () => {
    return "이름"
}

console.log(더하기(1,2))
console.log(빼기(10,2))
console.log(getName())
console.log(getNameV2())

function test() {
    return function() {
        return function() {
            return "중첩함수"
        }
    }
}

console.log(test()()())
