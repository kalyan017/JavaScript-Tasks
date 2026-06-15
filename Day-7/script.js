// Task-1:

// let signal="green";
// switch (signal) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("ready");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("invalid signal");
//         break;
// }


// Task-2:

// for(let i=1;i<=30;i++){
//     console.log(`Employee ${i} Present`);
// }


// Task-3:

// let balance=10000;

// while(balance>0){
//     console.log("Balance remaining :",balance);
//     balance=balance-500;
// }

// Task-4:

// let age=20;
// let percentage=77;
// let entranceExamPassed=true;

// if(age >= 18){
//     if(percentage >= 70){
//         if(entranceExamPassed){
//             console.log("Admission Approved");
//         }else{
//             console.log("Rejected: Entrance Exam Not Passed");
//         }
//     }else{
//         console.log("Rejected: Percentage Below 70");
//     }
// }else{
//     console.log("Rejected: Age Below 18");
// }


// Task-5:

// function delivery(customerName,foodItem,deliveryAddress){
//     console.log("customerName:",customerName);
//     console.log("foodItem:",foodItem);
//     console.log("deliveryAddress:",deliveryAddress);
// }
// delivery("kalyan","biryani","hyd")
// delivery("arjun","cake","Andhra")


// Task-6:

// let salary=50000;
// function calculateSalary(){
//    return salary;
// }

// function calculateBonus(salaryamount) {
//     let bonus=salaryamount*10/100;
//     return salaryamount+bonus;
// }

// let empsal=calculateSalary()
// let finalsal=calculateBonus(empsal);
// console.log("Salary:",empsal);
// console.log("Final Salary:",finalsal);


// task-7:

// let bill=10000;
// console.log("Original Bill:",bill);
// function applyDiscount(callback){
//     let discount=bill*10/100;
//     bill=bill-discount;
//     console.log("Discount:",discount);
//     callback()
    
// }

// function generateInvoice(){
//     console.log("Final Bill  After Discount:",bill);
// }

// applyDiscount(generateInvoice)

// Task-8:

// function * promotion(){
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
//     yield "Buy 1 Get 1";
// }

// let offer=promotion()
// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);


// Task-9:

// let scienceStudents=["kalyan","arjun","bittu"];
// let commerceStudents=["harsha","Dattu","Amar"];

// let spread=[...commerceStudents,...scienceStudents];
// console.log(spread);


// task-10:


// function rest(studentname,...sujectmarks){
//     let totalmarks=0;
//     for(let marks of sujectmarks){
//         totalmarks+=marks;
//     }
//     console.log("Total marks:", totalmarks);
//     console.log(studentname);
//     console.log(sujectmarks); 
// }
// rest("kalyan",80,70,80,88,90,99)


// Task-11:

// let emp={
//     name:"kalyan",
//     department:"IT",
//     salary:"30000",
//     experience:2
// }

// let{name,department,salary,experience}=emp;

// console.log("name:",name);
// console.log("department:",department);
// console.log("salary:",salary);
// console.log("experience:",experience);

// Task-12:

// let products = [
//     {
//         name: "Samsung Galaxy S24",
//         price: 65000,
//         category: "Mobile"
//     },
//     {
//         name: "Dell Inspiron",
//         price: 55000,
//         category: "Laptop"
//     },
//     {
//         name: "Boat Headphones",
//         price: 2000,
//         category: "Accessories"
//     },
//     {
//         name: "Noise Smartwatch",
//         price: 3000,
//         category: "Accessories"
//     }
// ];

// let expensiveProducts = products.filter(product => product.price > 5000);

// console.log(expensiveProducts);

// Task-13:

// let customer=products.find(product=>product.price>50000);
// console.log(customer.name);
// console.log(customer.price);

// Task-14:

// let expenses = [
//     {
//         expenseId: 1,
//         expenseName: "Office Rent",
//         amount: 50000,
//         department: "Administration"
//     },
//     {
//         expenseId: 2,
//         expenseName: "Employee Salaries",
//         amount: 120000,
//         department: "HR"
//     },
//     {
//         expenseId: 3,
//         expenseName: "Internet Bill",
//         amount: 5000,
//         department: "IT"
//     },
//     {
//         expenseId: 4,
//         expenseName: "Marketing Campaign",
//         amount: 30000,
//         department: "Marketing"
//     }
// ];

// let calculateexpense=expenses.reduce((total,expense)=>total+expense.amount,0);
// console.log(calculateexpense);

// Tak-15:

// let age=[19,21,40,55,33,22,19];

// let result=age.every(age=>age>18);

// console.log(result);

// Task-16:

// let candidates = [
//     { name: "Kalyan", skill: "JavaScript" },
//     { name: "Rahul", skill: "Python" },
//     { name: "Kiran", skill: "React" },
//     { name: "Navi", skill: "Java" }
// ];

// let result=candidates.some(candidate=>candidate.skill==="React");
// console.log(result);

// Task-17:

// let mobile="9234567896";

// if (
//     mobile.length === 10 &&
//     (
//         mobile.startsWith("6") ||
//         mobile.startsWith("7") ||
//         mobile.startsWith("8") ||
//         mobile.startsWith("9")
//     )
// ) {
//     console.log("Valid Mobile Number");
// } else {
//     console.log("Invalid Mobile Number");
// }


// Task-18:

// let text="Learn Javascript Complete Course";

// let joined=text.toLowerCase().split(" ").join("-")
// console.log(joined);


// Task-19:

// let salary=[1000,500,10000,4400,6000,5000];

// let sorted=salary.sort((a,b)=>a-b);
// console.log(salary);
// let reversed=salary.sort((a,b)=>b-a);
// console.log(salary);

// Task-20:

// let movies = ["Pushpa 2","Salaar","Devara","Kalki 2898 AD"];

// let bookingIds = movies.map((movie, index) => {
//     return {
//         movieName: movie,
//         bookingId: `BOOK${index + 1}`
//     };
// });

// console.log(bookingIds);