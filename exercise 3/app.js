let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

Object.objsize = (obj) =>{
    let size = 0, key;
    for(key in obj){
        if(obj.hasOwnProperty(key)) ++size
    }
    return size
}

const objsize = Object.objsize(student);
console.log(`Object has length : ${objsize}`)
