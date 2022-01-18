function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (hasDrivingLiscence===true && isSober===true && isTired===false){
        return "You can drive"
    }
    else if (hasDrivingLiscence===false){
        return "You cannot drive"
    }
    else if (isSober===false || isTired===true){
        return "You shouldn't drive"
    }
  
   
}

module.exports = CanDrive;
