function checkName(name){
    if(typeof name === 'string'){
        let lastLatter = name.slice(-1).toLowerCase();
        const newName = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
        let count = 0;
        for(let item of newName){
            if(item === lastLatter){
                count++;
            }
        }
        return count > 0 ? "Good Name" : "Bad Name";
    }
    else{
        return 'invalid';
    }
    //let result = newName.includes(lastLatter);
    //return result === true ? "Good Name" : "Bad Name";
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName([1,2,3]));
console.log(checkName({name: "Ahasan"}));
console.log(checkName(["Rashed"]));
console.log(checkName('shanto'));

