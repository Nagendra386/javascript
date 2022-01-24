function getEven(arr) {
    var arr1=[];
    for (var i=0;i<arr.length;i++){
        if (arr[i]%2===0){
            arr1.push(arr[i])
        }
    }
    return arr1



}

function multiplyByN(arr, n) {
    var arr1=[];
    for (var i=0;i<arr.length;i++){
        arr[i]=arr[i]*n
        arr1.push(arr[i])
    }
    return arr1    
}

function removeNthElement(arr, n) {
    for (var i=0;i<arr.length;i++){
        if (i===n){
            arr.splice(i,1);
        }
    }
    return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}