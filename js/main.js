// masala1
// {
//     function mrMs(array){
//         if ([array.gender] == "male"){
//            console.log(`Janob   ${array.name}`);
//            return ""
//         }else{
//             console.log(`Honim   ${array.name}`);
//             return ""
//         }
//     }
//     console.log( mrMs({name: "Akmal", gender: "male"}))
//     console.log( mrMs({name: "Laylo", gender: "female"}))
//     console.log( mrMs({name: "Shomurod", gender: "male"}))
// }

// masala2
// {
//     function card(cardNumber, showFull) {
//         if (showFull) {
//             return cardNumber;
//         } else {
//             let maskedNumber = cardNumber.slice(0, 4) + " **** **** **" + cardNumber.slice(-2);
//             return maskedNumber;
//         }
//     }

//     // Test cases
//     console.log(card("8600 1234 5651 2589", true));  // "8600 1234 5651 2589"
//     console.log(card("8600 5464 2332 4589", false)); // "8600 **** **** **89"
//     console.log(card("8600 4545 1231 8989", false)); // "8600 **** **** **89"
// }

// masala3
// {
//   function perimetr(son1, son2) {
//     let yegindi = 2;
//     let a = yegindi * (son1 + son2);
//     console.log(a);
//     return ""
//   }
//   console.log(perimetr(5, 6)); //2 * (5 + 6) = 22
//   console.log(perimetr(12, 8)); //2 * (12 + 8) = 40
// }

// masala4
// {
//     const returnTrueFalse = (str) => str==="Ha" ? console.log(true) : console.log(false);
//     returnTrueFalse()

//   console.log(returnTrueFalse("Ha"));
//   console.log(returnTrueFalse("Yo'q"));
//   console.log(returnTrueFalse("Salom"));
// }

// masala5
// {
//   function telNumber(tel) {
//     if (tel == "+") {
//       console.log(tel);
//     } else {
//       console.log(tel.padStart(16, "+"));
//     }
//     return "";
//   }
//   console.log(telNumber("+998 91 005 2674"));
//   console.log(telNumber("998 91 005 2674"));
// }

//  masala6
// {
//     const greeting = () =>  "Hello world";

// console.log(greeting())
// }

// masala7
// {
//   function bringtness(color) {
//     if (color == "Dark"){
//       console.log(color === "Light");
//     }
//   }
//   console.log("Dark");
//   console.log("Light");
// }
