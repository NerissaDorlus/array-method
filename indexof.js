//Find the index of an item in  a particular array 

const arr1 = ["a", "c", "b", "d"]
const target = "c"

const indexOf = (target, arr) =>{

    if(arr === null || arr === undefined){
        return -1
    }
    
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]){
            return i
        
        }
    }
    
    return -1
}

console.log(indexOf(target, arr1))
console.log(indexOf("c", arr1))
console.log(indexOf("f", arr1))
console.log(indexOf(undefined, arr1 ))
console.log(indexOf(null, undefined))