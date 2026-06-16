// Task-1:

// let employees = [
//     { id: 1, name: "Rahul", salary: 25000 },
//     { id: 2, name: "Kavin", salary: 50000 },
//     { id: 3, name: "John", salary: 75000 }
// ];

// let empsal=employees.filter((emp)=>emp.salary>40000);
// console.log(empsal);

// let firstemp=employees.find((emp)=>{
//     return emp.salary>60000;
// });
// console.log(firstemp.name);

// let totalexpense=employees.reduce((total,emp)=>total+emp.salary,0);
// console.log(totalexpense);

// let empnames=employees.map((emp)=>emp.name);
// console.log(empnames);


// Task-2:

// let student={
//     Name:"Kalyan",
//     Age:23,
//     percentage:70
// }

// function admssion(){
//     if(student.Age>18){
//         if(student.percentage>60){
//             return "admission is successful"
//         }else{
//             return "admission is not successful due to low percentage"
//         }
//     }else{
//         return "admission is not successful due to less age"
//     }
// }

// console.log(admssion());


// Task-3:

// let cart = [
//     { product: "Shoes", price: 2000, qty: 2 },
//     { product: "Watch", price: 1500, qty: 1 },
//     { product: "Bag", price: 1000, qty: 3 }
// ];

// let totalbill=cart.reduce((total,bill)=>total+bill.price*bill.qty,0);
// console.log(totalbill);

// let expensive=cart.reduce((max,expensive)=>{
//     return expensive.price>max.price ? expensive:max;
// })
// console.log(expensive);

// let cartnames=cart.map((names)=>names.product);
// console.log(cartnames);


// Task-4:

// let Signal="red";

// switch (Signal) {
//     case "red":
//         console.log("stop");
//         console.log("If crossed Fine: 500");
//         break;
//     case "orange":
//         console.log("Ready");
//         console.log("If crossed Fine:100");
//         break;
//     case "green":
//         console.log("Go");
//         console.log("No fine");
//         break;
//     default:
//         console.log("Invalid signal");
//         break;
// }


// Task-5:

// let Students = [
//     { name: "A", mark: 95 },
//     { name: "B", mark: 45 },
//     { name: "C", mark: 80 },
//     { name: "D", mark: 30 }
// ];

// let passed=Students.filter((pass)=>pass.mark>35);
// console.log(passed);

// let failed=Students.filter((fail)=>fail.mark<35);
// console.log(failed);

// let grades=Students.map((students)=>{
//     let grade;
//     if(students.mark>=90){
//         grade ="A";
//     }else if(students.mark>=75){
//         grade="B";
//     }else if(students.mark>=55){
//         grade="C";
//     }else if(students.mark>=35){
//         grade="D";
//     }else{
//         grade="Fail"
//     }
//     return{
//         name:students.name,
//         mark:students.mark,
//         grade:grade
//     }
// })

// console.log(grades);


// Task-6:

// function placeOrder(customername,...items){
//     console.log(customername);
//     console.log(items);
//     let count=0;
//     for(let item of items){
//         count++;
//     }
//     console.log(count);
// }
// placeOrder("kalyan","sweet","hot","biscuits","choclates")

// task-7:

// let balance=10000;
// function deposit(amount){
//    balance=balance+amount;
//    return `Deposited ₹${amount}. Current Balance: ₹${balance}`;
// }
// console.log(deposit(1000));


// function withdraw(amount) {
//     if (amount <= balance) {
//         balance -= amount;
//         return `Withdrawn ₹${amount}. Current Balance: ₹${balance}`;
//     }
//     return "Insufficient Balance";
// }

// console.log(withdraw(10000));

// function checkBalance(amount){
//        return `Your Balance is:${balance}`
// }

// console.log(checkBalance());

// Task-8:

// let bookedSeats = [];

// let seatsToBook = [1, 5, 10];

// for (let seat of seatsToBook) {
//     bookedSeats.push(seat);
// }

// console.log(bookedSeats);

// let newSeat = 7;
// let booked = false;

// for (let seat of bookedSeats) {
//     if (seat === newSeat) {
//         booked = true;
//         break;
//     }
// }

// if (!booked) {
//     bookedSeats.push(newSeat);
//     console.log("Seat Booked Successfully");
// } else {
//     console.log("Seat Already Booked");
// }

// console.log("Booked Seats:");

// for (let seat of bookedSeats) {
//     console.log(seat);
// }

// Task-9:

// let username="Kalyan";
// let password="Kalyan@123";
// let email="kalyan@stackly.com";

// let userrequirements=!username.includes(" ");
// let passwordrequirements=password.length>=8;
// let emailrequirements=email.includes("@");

// if(userrequirements){
//     console.log("Valid username");
// }else{
//     console.log("Invalid username");
// }

// if(passwordrequirements){
//     console.log("Valid password");
// }else{
//     console.log("Invalid paasword");

// }

// if(emailrequirements){
//     console.log("valid email");
// }else{
//     console.log("Invalid Email");
// }

// if(emailrequirements){
//     if(passwordrequirements){
//         if(emailrequirements){
//             console.log("Login Successfully");
//         }
//     }
// }


// Task-10:

// fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())

//     .then((products) => {
//         products.forEach((product) => {
//             console.log(product.title);
//         });

//         let expensiveproducts = products.filter(
//             product => product.price > 1000
//         );
//         console.log("Products Above ₹1000:");
//         console.log(expensiveproducts);
//         let totalProducts = products.length;
//         console.log("Total Products:", totalProducts);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// Task-11:

// let dob = prompt("Enter DOB (YYYY-MM-DD):");

// let date = new Date(dob);

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// let weekdayName = weekdays[date.getDay()];

// console.log("Day:", day);
// console.log("Month:", month);
// console.log("Year:", year);
// console.log("Weekday:", weekdayName);


// Task-12:

// let plan = prompt("Enter Plan (Mobile/Basic/Standard/Premium):");

// let benefits =
//     plan === "Mobile"
//         ? "Watch on 1 mobile device"
//         : plan === "Basic"
//         ? "Watch on 1 device in HD"
//         : plan === "Standard"
//         ? "Watch on 2 devices in Full HD"
//         : plan === "Premium"
//         ? "Watch on 4 devices in Ultra HD"
//         : "Invalid Plan";

// console.log(benefits);


// Task-13:

// let patients = [
//     { id: 1, name: "Rahul", status: "Critical" },
//     { id: 2, name: "Kavin", status: "Stable" },
//     { id: 3, name: "John", status: "Critical" },
//     { id: 4, name: "David", status: "Stable" }
// ];

// let criticalPatients = patients.filter((patient) => {
//     return patient.status === "Critical";
// });
// console.log(criticalPatients);

// let patient = patients.find((patient) => {
//     return patient.id === 3;
// });
// console.log(patient);

// let totalPatients = patients.length;
// console.log("Total Patients:", totalPatients);


// task-14:

// let inventory1 = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 }
// ];

// let inventory2 = [
//     { id: 3, name: "Headphones", price: 3000 },
//     { id: 4, name: "Smartwatch", price: 5000 }
// ];

// let inventory = [...inventory1, ...inventory2];
// console.log(inventory);

// let { id, name, price } = inventory[3];
// console.log(id);
// console.log(name);
// console.log(price);

// let newProduct = {
//     id: 5,
//     name: "Tablet",
//     price: 25000
// };
// inventory = [...inventory, newProduct];
// console.log(inventory);


// Task-15:

// let groupMembers = ["Rahul", "Kavin", "John"];
// console.log("Initial Group:", groupMembers);

// groupMembers.push("David");  
// groupMembers.unshift("Ravi");    
// console.log("After Adding:", groupMembers);

// groupMembers.pop();    
// groupMembers.shift();    
// console.log("After Removing:", groupMembers);

// groupMembers.splice(1,0,"Arjun"); 
// console.log("Final Group List:", groupMembers);