// Task - 1:

// let age = Number(prompt("Enter your age?"));

// if (age >= 60) {
//     console.log("Senior Citizen");
// } else if (age >= 20 && age <= 59) {
//     console.log("Adult");
// } else if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else if (age >= 0 && age <= 12) {
//     console.log("Child");
// } else {
//     alert("enter valid age.");
// }



// Task - 2:

// let salary = Number(prompt("Enter your salary: "));
// let hike;
// if (salary < 20000) {
//     hike = salary + salary * 20 / 100;
// } else if (salary >= 20000 && salary <= 50000) {
//     hike = salary + salary * 10 / 100;
// } else {
//     hike = salary + salary * 5 / 100;
// }

// console.log("Old salary :", salary);
// console.log("New salary :", hike);


// Task - 3:

// let units = Number(prompt("Enter number if units: "))
// let totalbill;
// let amountperunit;
// if (units <= 100) {
//     amountperunit = 5;
// } else if (units > 100 && units <= 200) {
//     amountperunit = 7;
// } else {
//     amountperunit = 10;
// }

// totalbill = units * amountperunit;

// console.log("Total bill :", totalbill)


// Task - 4:

// let balance = 10000;

// let withdrawlamount = Number(prompt("Enter amount:"));
// let remainingbalance = balance - withdrawlamount;

// if (withdrawlamount <= balance) {
//     console.log("Withdrawl Successful");
//     console.log("Remaining Balance :", remainingbalance);
// } else {
//     console.log("Insufficient funds");

// }



// Task - 5:

// let a_username = "admin";
// let a_password = 12345;

// let c_username = prompt("enter username:");
// let c_password = prompt("enter passowrd :");

// if (a_username == c_username) {
//     if (a_password == c_password) {
//         console.log("Login Success");
//     } else {
//         console.log("Password Invalid");

//     }
// } else {
//     console.log("Username Invalid");
// }


// Task - 6:

// let recharge = Number(prompt("Enter recharge amount:"));

// if (recharge >= 499) {
//     alert("Recharge Successfull");
//     console.log("Got Netflix Offer");
// } else if (recharge >= 299 && recharge < 499) {
//     alert("Recharge Successfull");
//     console.log("2GB Extra Data");
// } else {
//     alert("Recharge Succefull");
//     console.log("No Offer");
// }



// Task - 7:

// let color = "yellow";

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Signal is not Working");
//         break;
// }



// Task - 8:

// let workingdays = Number(prompt("Enter working days: "));
// let presentdays = Number(prompt("Enter present days: "));

// let attendence = presentdays / workingdays * 100;

// console.log(attendence);
// if (attendence >= 75) {
//     console.log("Eligible for salary");
// }
// else {
//     console.log("Not Eligible for salary");
// }


// Task - 9:

// let ticketprice = 500;
// let tickets = Number(prompt("Enter number of tickets: "));
// let totalamount = ticketprice * tickets;
// let gst = totalamount * 5 / 100;
// let finalamount = totalamount + gst;

// console.log("Total Amount :", totalamount);
// console.log("GST :", gst);
// console.log("Final Amount :", finalamount);



// Task - 10:

// let bill = Number(prompt("Enter bill amount :"));
// let discount = 0;

// if (bill > 2000) {
//     discount = bill * 10 / 100;
// } else {
//     console.log("No Discount");

// }
// let finalbill = bill - discount;
// console.log("Final Bill :", finalbill)



// Task - 11:

// let age = Number(prompt("Enter your age: "));
// let height = Number(prompt("Enter your height in cm: "));
// let weight = Number(prompt("Enter your weight in kgs: "));

// if (age >= 18) {
//     if (height >= 160) {
//         if (weight >= 55) {
//             console.log("Congratulations you are selected");

//         } else {
//             console.log("you are not selected ,bcoz wieght is lessthan the required weight.");

//         }
//     } else {
//         console.log("you are not selected, bcoz height is less than the required height.");

//     }
// } else {
//     console.log("you are not selected , bcoz age is less than the required age.");

// }



// Task - 12:

// let telugu = Number(prompt("Enter marks in Telugu: "));
// let hindi = Number(prompt("Enter marks in Hindi: "));
// let english = Number(prompt("Enter marks in English: "));
// let maths = Number(prompt("Enter marks in Maths: "));
// let science = Number(prompt("Enter marks in Science: "));

// let total = telugu + hindi + english + maths + science;
// let percentage = total / 500 * 100;

// console.log("Total marks: ", total);
// console.log("Percentage: ", percentage)

// if (percentage >= 90) {
//     console.log("A+");
// } else if (percentage >= 80) {
//     console.log("A");
// } else if (percentage >= 70) {
//     console.log("B");
// } else if (percentage >= 60) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }



// task - 13:

// let time = Number(prompt("Enter your time: "));
// if ((time >= 22 && time <= 24) || (time >= 0 && time < 6)) {
//     console.log("Night Shift");
// }
// else if (time >= 6 && time < 14) {
//     console.log("Morning Shift");
// } else if (time >= 14 && time < 22) {
//     console.log("Afternoon Shift");
// } else {
//     console.log("Enter valid time");

// }



// Task - 14:

// let age = Number(prompt("Enter your age :"));
// let salary = Number(prompt("Enter your salary :"));
// let experience = Number(prompt("Enter your experience :"));

// if (age >= 21) {
//     if (salary >= 25000) {
//         if (experience >= 2) {
//             console.log("Eligible for loan");
//         } else {
//             console.log("Not Eligible bcoz experience is less");

//         }
//     } else {
//         console.log("Not Eligible bcoz salary is less");

//     }
// } else {
//     console.log("Not Eligible bcoz age is less");
// }


// Task - 15:

// let km = Number(prompt("enter km:"));
// let fare = 0;
// if (km <= 5) {
//     let amount = 20;
//     fare = km * amount;
//     console.log("Fare : ", fare);
// } else if (km > 5) {
//     let amount = 15;
//     fare = (5 * 20) + (km - 5) * 15;
//     console.log("Fare :", fare);
// }



// Task - 16:

// let input = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${input} x ${i} = ${input * i}`);
// }



// Task - 17:

// let checker = String(prompt("enter password:"));
// if (checker.length < 6) {
//     alert("Weak Password");
// } else if (checker.length >= 6 && checker.length <= 10) {
//     alert("Medium password");
// } else {
//     alert("Strong password")
// }



// Task - 18:

// let salary = Number(prompt("Enter your salary: "));
// let experience = Number(prompt("Enter your experience: "));
// let bonus = 0;
// if (experience <= 2) {
//     bonus = salary * 5 / 100;
// } else if (experience >= 3 && experience <= 5) {
//     bonus = salary * 10 / 100;
// } else {
//     bonus = salary * 20 / 100;
// }

// console.log("salary :", salary);
// console.log("bonus :", bonus);



// // Task-19:


// let timer = 10;

// while (timer > 0) {
//     console.log(timer);
//     timer--
// }
// console.log("Happy New Year");


// Task - 20:


// let Qualification = String(prompt("Degree completed or not :"));
// let communication = String(prompt("enter good or bad: "));
// let technicalscore = Number(prompt("enter score: "));
// if (Qualification == "completed") {
//     if (communication == "good") {
//         if (technicalscore >= 70) {
//             console.log("Congratulations you are selected");

//         } else {
//             console.log("you are not selected bcoz score is less than required score");

//         }
//     } else {
//         console.log("you are not selected  bcoz communication is not matched the criteria");

//     }
// } else {
//     console.log("you are not selected bcoz qualification is not completed");

// }















