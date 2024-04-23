// let x = 20;
// let y = "20";
// let d = "Raymart";
// let f = "Raymart";

// let result = x != y;
// // === includes data type
// // == only the value
// // = assigning
// // != not equal

// alert(result);
// ----------------------------------------
// logical
// let x = false;
// let y = false;

// let result = x && y;
// alert(result);
// ----------------------------------------
// arithmetic , logical and comparison
// let x = (10 * 2 - 5) >= (5 + 5 + 5);
// let y = 5 < 6;

// let result = x && y;
// alert(result);
// ----------------------------------------
// if else
// let age = 12;

// if (age > 18){
//     alert("You can now vote!");
// }
// else {
//     alert("You cannot vote!");
// }
// ----------------------------------------
// else if

// COMBINATION OF LOGICAL OP AND COMPARISON OP
const ageCalculation = () => {
    let age = Number(document.querySelector("#ageInput").value);
    // alert(age);
    if (age >= 18){
        alert("You can now vote!");
    }
    else if (age > 12){
        alert("You are still in highschool");
    }
    else if (age >0 && age <= 12){
        alert("You are still a minor");
    }
    else {
        alert("Not a valid age");
    }
}
// let age = 0;
// switch(true){
//     case (age >= 18):
//         alert("You can now vote!");
//     break;
//     case (age > 12):
//         alert("You are still in highschool");
//     break;
//     case (age > 0 && age <= 12):
//         alert("You are still a minor");
//     break;
//     default:
//         alert("Not a valid age");
// }
// ----------------------------------------
// Switch Case
// let fruit = "apples";

// switch(fruit){
//     case "apple":
//         alert("Apple a day keeps the doctor away");
//     break;
//     case "banana":
//         alert("Wow! You're like a monkey");
//     break;
//     default:
//         alert("No fruit in your cart");
// }

// Simple switch case

const lifePhase = () => {
    let age = Number(document.querySelector("#ageValue").value);
    if (age >=0 && age <=7){
        document.querySelector("#output").innerHTML = "Early Childhood";
    }
    else if (age >= 8 && age <=12){
        document.querySelector("#output").innerHTML = "Childhood";
    }
    else if (age >=13 && age <= 16){
        document.querySelector("#output").innerHTML = "Early Teenager";
    }
    else if (age >=17 && age <= 19){
        document.querySelector("#output").innerHTML = "Teenager";
    }
    else if (age >=20 && age <= 35){
        document.querySelector("#output").innerHTML = "Early Adolescence";
    }
    else if (age >=36 && age <= 60){
        document.querySelector("#output").innerHTML = "Adolescence";
    }
    else if(age <= 0) {
        alert("Not a valid age");
    }
    else {
        document.querySelector("#output").innerHTML = "Elderly";
    }
}