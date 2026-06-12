// Task-1:

// let employees = [
//     {
//         name: "Rahul",
//         salary: 25000,
//         experience: 2
//     },
//     {
//         name: "Kiran",
//         salary: 35000,
//         experience: 4
//     },
//     {
//         name: "Navi",
//         salary: 45000,
//         experience: 6
//     },
//     {
//         name: "Priya",
//         salary: 55000,
//         experience: 8
//     },
//     {
//         name: "Arjun",
//         salary: 65000,
//         experience: 10
//     }
// ];

// console.log("Employee Details:");

// for (let emp of employees) {
//     console.log("Name:",emp.name);
//     console.log("Salary:",emp.salary);
//     console.log("Experience:",emp.experience);
// }

// console.log("Bonus Percentage: ");
// let bonus;
// for (let emp of employees) {
//     console.log(emp.name);
//     if (emp.experience >= 5) {
//         bonus =emp.salary * 20 / 100;
//         let finalsalary = emp.salary + bonus;
//         console.log("Bonus:",bonus);
//         console.log("Final Salary: ", finalsalary);

//     } else if (emp.experience >= 2) {
//         bonus = emp.salary * 10 / 100;
//         let finalsalary = emp.salary + bonus;
//         console.log("Bonus:",bonus);
//         console.log("Final Salary: ", finalsalary)
//     } else {
//         bonus = emp.salary * 5 / 100;
//         let finalsalary = emp.salary + bonus;
//         console.log("Bonus:",bonus);
//         console.log("Final Salary: ", finalsalary)
//     }
// }

// Task-2:

// let students = [
//     {
//         name: "Rahul",
//         age: 18,
//         twelfthPercentage: 92
//     },
//     {
//         name: "Priya",
//         age: 19,
//         twelfthPercentage: 55
//     },
//     {
//         name: "Kiran",
//         age: 18,
//         twelfthPercentage: 78
//     },
//     {
//         name: "Navi",
//         age: 20,
//         twelfthPercentage: 57
//     },
//     {
//         name: "Arjun",
//         age: 19,
//         twelfthPercentage: 95
//     }
// ];

// for (let student of students) {
//     if (student.age >= 17) {
//         if (student.twelfthPercentage >= 60) {
//             console.log(student.name, ": Your admission is approved");

//         } else {
//             console.log(student.name, ": your admission is rejeccted");

//         }
//     }else{
//         console.log(student.name,":you are not eligible");

//     }
// }


// task-3:

// let food=["Pizza","Burger","Shwarma","Fried Rice"]
// let selection="";
// let i=1
// for(let a of food){
//     selection+=i+"->"+a+"\n";
//     i++
// }

// let choice=Number(prompt("Enter an item:\n"+selection));
// switch (choice) {
//     case 1:
//         console.log("Order Confirmed: ",food[choice-1]);
//         break;
//     case 2:
//         console.log("Order Confirmed: ",food[choice-1]);
//         break;
//     case 3:
//         console.log("Order Confirmed: ",food[choice-1]);
//         break;
//     case 4:
//         console.log("Order Confirmed: ",food[choice-1]);
//         break;
//     default:
//         alert("Please enter a correct item number!");
//         break;
// }


// Task-4:

// let students = [
//     "Rahul",
//     "Kiran",
//     "Priya",
//     "Arjun",
//     "Navi",
//     "Suresh",
//     "Anjali",
//     "Vikram",
//     "Deepika",
//     "Rohit"
// ];

// for(let student of students){
//     console.log(student);   
// }

// let count=0;
// for(i=0;i<students.length;i++){
//     count++
// }
// console.log("Total studemts:",count);

// Task-5:

// let cart = [
//     { product: "Mobile", price: 15000 },
//     { product: "Headset", price: 2000 },
//     { product: "Charger", price: 1000 }
// ]
// let totalvalue=0;
// for(let products of cart){
//     console.log(products.product);
//     totalvalue+=products.price
// }
// console.log("Total cart value:",totalvalue);

// let expensiveproduct=cart[0];

// for(let i=1;i<cart.length;i++){
//     if(cart[i].price>expensiveproduct.price){
//         expensiveproduct=cart[i]
//     }
// }
// console.log("Expensive product: ",expensiveproduct.product);

// Task-6:

// let balance = 10000;

// function deposit(amount) {
//     balance += amount;
//     console.log("Deposited:", amount);
// }

// function withdraw(amount) {
//     if (amount <= balance) {
//         balance -= amount;
//         console.log("Withdrawn:", amount);
//     } else {
//         console.log("Insufficient Balance");
//     }
// }

// function checkBalance() {
//     console.log("Remaining Balance:", balance);
// }

// deposit(23000);
// withdraw(15000);
// checkBalance();


// Task-7:

// let age = Number(prompt("Enter your age:"));
// if (age < 5) {
//     console.log("Free Ticket");
// }
// else if (age >= 5 && age < 18) {
//     console.log("Ticket Price: ₹100");
// }
// else if (age >= 18 && age <= 60) {
//     console.log("Ticket Price: ₹200");
// }
// else {
//     console.log("Ticket Price: ₹120");
// }


// Task-8:

// let amount=Number(prompt("Enter the purschase amount: "));
// let discount;
// if(amount>5000){
//     discount=amount*20/100;
//     let finalamount=amount-discount;
//     console.log("Original amount: ",amount);
//     console.log("Discount: ",discount);
//     console.log("Final Amount: ",finalamount);
// }else if(amount>3000){
//     discount=amount*10/100;
//     let finalamount=amount-discount;
//     console.log("Original amount: ",amount);
//     console.log("Discount: ",discount);
//     console.log("Final Amount: ",finalamount);
// }
// else if(amount>1000){
//     discount=amount*5/100;
//     let finalamount=amount-discount;
//     console.log("Original amount: ",amount);
//     console.log("Discount: ",discount);
//     console.log("Final Amount: ",finalamount);
// }else{
//     let finalamount=amount;
//      console.log("No Discount");
//      console.log("Final Amount: ",finalamount);
// }


// Task-9:

// let items=["Rice","Oil","Sugar","Milk","Egg"];

// let add=items.push("Chicken","Salt");
// console.log(items);

// let firstremove=items.shift()
// console.log(items);

// let lastremove=items.pop()
// console.log(items);

// let check=items.includes("Milk")
// console.log(check);

// console.log("Final Inventory: ",items);


// Task-10:

// let patient = {
//     patientName: "Rahul",
//     age: 25,
//     disease: "Fever",
//     doctor: "Dr. Sharma"
// };


// for(let a in patient){
//     console.log(a,":",patient[a]);
// }

// let{patientName,age,disease,doctor} = patient;
// console.log(patientName);
// console.log(age);
// console.log(disease);
// console.log(doctor);


// Task-11:

// let sendSMS = () => {
//         console.log("SMS Sent to Customer");
//     }
// function placeOrder(callback) {
//     console.log("Order Placed Successfully");
//     callback()
// }
// placeOrder(sendSMS)


// Task-12:

// function * offer(){
//     yield "10% Cashback"
//     yield "20% Cashback"
//     yield "Free Delivery"
//     yield "Buy 1 Get 1"

// }
// let a=offer()
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);

// Task-13:

// let employees = [
//     { id: 1, name: "Rahul", salary: 25000 },
//     { id: 2, name: "Kavin", salary: 30000 },
//     { id: 3, name: "John", salary: 40000 }
// ]

// console.log("Employee names: ")
// for(let emp of employees){
//     console.log(emp.name);
// }


// let totalvalue=0;
// for(let emp of employees){
//     totalvalue+=emp.salary
// }
// console.log("Total Salary Expense: ",totalvalue);

// let emp=employees[0];

// for(employe  of employees){
//    if(employe.salary>emp.salary){
//         emp=employe
//    }
// }
// console.log("Employee with Highest salary:",emp.name);


// Task-14:

// let availableseats = 50;

// function booking() {
//     let seatselect = Number(prompt(`Available seats:${availableseats}\nEnter number of seats:`));
//      if (seatselect <= 0) {
//         console.log("Please enter a valid number of seats.");
//     }
//     else if (seatselect <= availableseats) {
//         availableseats-=seatselect;
//          alert(`Booking Confirmed\nRemaining Seats: ${availableseats}`);
//     }else{
//         alert("Booking Rejected - Seats Unavailable");
//     }
// }
// booking();
// booking();


// task-15:

// let products = {
//     mobile: {
//         name: "Samsung Galaxy S24",
//         price: 65000
//     },
//     laptop: {
//         name: "Dell Inspiron 15",
//         price: 55000
//     },
//     headphone: {
//         name: "Boat Rockerz 550",
//         price: 2000
//     },
//     smartwatch: {
//         name: "Noise ColorFit Pro",
//         price: 3000
//     }
// };

// let customer = prompt(
// `Available Products:
// mobile - ${products.mobile.name}
// laptop - ${products.laptop.name}
// headphone - ${products.headphone.name}
// smartwatch - ${products.smartwatch.name}

// Enter product key:`
// );
// if(products[customer]){

//     let totalAmount = products[customer].price;
//     let gst = totalAmount * 0.18;
//     let finalBill = totalAmount + gst;

//     console.log("Selected Product:", products[customer].name);
//     console.log("Total Amount:", totalAmount);
//     console.log("GST (18%):", gst);
//     console.log("Final Bill:", finalBill);

// }else{
//     console.log("Invalid Product Selected");
// }





