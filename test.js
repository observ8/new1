
// x = Math.floor(Math.random() * (10 - 2) + 2);
// §console.log(x)

// let myobj = {
//     team : "panatha",
//     champs : 12,
//     cups : 12,
//     made : 1908,
//     news : function() {
//         console.log(this.team + " " + this.champs); 
//      }
// }

// let newobj = Object.create(myobj)
// // newobj.news();
// newobj.fucker = "my fuckkk";
// console.log(newobj.made);

   

// for (const key  in myobj) {
//     // object[key];
//    console.log(key + " = " + myobj[key] );
   
    
// }
// console.log("ooo");

//  console.log(myobj.team);


let myobj = {
    team : "panatha",
    champs : 12,
    cups : 12,
    made : 1908
  
}

let serobj = JSON.stringify(myobj);
console.log(serobj);
