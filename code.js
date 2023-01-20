const R = {
    "Name": "J.Umapathy",
    "Age": 24,
    "DOB": "12-06-1999",
    "MOBILE-NO": [
        "9176324865",
        "8637439530"
    ],
    "Skills": [
        "HTML",
        "CSS",
        "JS"
    ],
    "DEGREES": {
        "UG": "B.sc in COMPUTER SCIENCE",
        "PG": "MCA"
    },
    "ADDRESS": "Chennai - Tamilnadu",
    "Yrs of Exp in IT": 4,
    "Hobbies": [
        "Exercising",
        "Reading Books",
        "Coding"
    ]
}
console.log("Itreation of Json using simple for")
console.log("!*****************************!");
const key = Object.keys(R);
// Itreation using simple for
for(let i=0;i<key.length;i++){
console.log(key[i]+":"+R[key[i]]);
}
// Itreation using simple for of
console.log("!*****************************!");
console.log("Itreation of Json using for of ")
for(var e of key){
    console.log(e+":"+R[e]);
}

console.log("!*****************************!");
console.log("Itreation of Json using for in ")
// Itreation using simple for in 

for(var ele in key){
    console.log(key[ele]+":"+R[key[ele]]);
}
console.log("!*****************************!");
console.log("Itreation of Json using for each")
// Itreation using simple for each

key.forEach(element => {
    console.log(element +":"+R[element]);
});