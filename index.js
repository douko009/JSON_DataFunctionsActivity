let personData = require ("./data.json");

console.log("-----FEMALE-----");
for(let i=0; i < personData.length;i++){
    if(personData[i].gender == "female"){
        console.log(personData[i]);
    }
}


console.log("-----18 and above-----");
for(let x=0; x < personData.length;x++){
    let birthdate = new Date(personData[x].birthdate);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthdate.getFullYear();

    if (age >= 18){
        console.log(personData[x].name, age);

    }
    
}


console.log("-----FEB BIRTHDAY-----");
for(let x=0; x < personData.length;x++){
    let birthdate = new Date(personData[x].birthdate);
    let month = new Date().getMonth();
    let birthmonth = month + birthdate.getMonth();
    if(birthmonth == 2)
        console.log(personData[x].name);
    


}

