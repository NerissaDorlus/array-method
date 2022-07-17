//Return true / false if target is included in array
const arr1 = ["a", "c", "b", "d"]
target = "d"

const includes = (target, arr) => {
    if(arr === null || arr === undefined){
        return false
    }
    for(let i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            return true
        }
    }
    return false
}

console.log("D is included", includes("d", arr1))
console.log("Undefined should not be included", includes(undefined, arr1 ))
console.log("Z should not be included", includes("z", undefined))
console.log("Null should not be included", includes(null, undefined ))
