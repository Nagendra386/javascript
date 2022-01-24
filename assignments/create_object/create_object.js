function CreateObject(arr) {
    // Write your code here
    const person={}
    for (var i=0;i<arr.length;i++){
        if (i%2===0){
            person[arr[i]]=arr[i+1]
        }
    }
    return person
}

module.exports = CreateObject;
