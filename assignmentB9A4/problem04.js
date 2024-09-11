function password(obj) {
    let str = '';
    let len = Object.keys(obj).length;
    let len2 = obj.birthYear.toString().length;
    if (len === 3 && len2 === 4) {
        str = obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
        return str;
    }
    else {
        return 'invalid';
    }

    // if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || len2 !== 4){
    //     return 'invalid';
    // }

}
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));