// Task-1:


// let basicsalary=25000;
// let HRA=basicsalary*20/100;
// let bonus=basicsalary*10/100;
// let totalsalary=basicsalary+HRA+bonus;
// let tax=(totalsalary)*5/100;
// let finalsalary=totalsalary-tax;

// console.log("Basic Salary : "+basicsalary);
// console.log("HRA : "+HRA);
// console.log("Bonus : "+bonus);
// console.log("Tax : "+tax);
// console.log("Final Salary :"+finalsalary);


// Task-2:


// let marks=10;

// if(marks>=90 && marks<=100){
//     console.log("A+");
// }else if(marks>=80 && marks<=89){
//     console.log("A");
// }else if(marks>=70 && marks<=79){
//     console.log("B");
// }else if(marks>=60 && marks<=69){
//     console.log("C");
// }else if(marks<60 && marks>=0){
//     console.log("Fail");
// }else{
//     console.log("enter valid marks");
// }



// Task-3:

// let a_username="admin";
// let a_password="12345";

// let c_username=prompt("enter Username");
// let c_password=prompt("enter password");

// if(a_username==c_username){
//     if(a_password==c_password){
//         console.log("Login Success");
//     }else{
//         console.log("Invalid Password");
//     }
// }else{
//     console.log("Invalid Username");
// }


// Task-4:

// let balance=5000;
// let withdrwalamount=prompt("enter your amount?");
// let reaminingbalance=balance-withdrwalamount;

// if(withdrwalamount>balance){
//     console.log("Insufficient Balance");

// }else if(withdrwalamount<=balance){
//     console.log("Withdrawl Success");
//     console.log("Remaining balance : "+reaminingbalance);
// }


// Task-5:

// let purchase=10000;
// let discount;
// let finalamounnt;

// if(purchase>=10000){
//     discount=purchase*20/100;
//     finalamounnt=purchase-discount;
//     console.log("Original amount :"+purchase);
//     console.log("Discount : "+discount);
//     console.log("Final amount : "+finalamounnt);
// }else if(purchase>=5000 && purchase<=9999){
//     discount=purchase*10/100;
//     finalamounnt=purchase-discount;
//     console.log("Original amount :"+purchase);
//     console.log("Discount : "+discount);
//     console.log("Final amount : "+finalamounnt);
// }else if(purchase>=2000 && purchase<=4999){
//     discount=purchase*5/100;
//     finalamounnt=purchase-discount;
//     console.log("Original amount :"+purchase);
//     console.log("Discount : "+discount);
//     console.log("Final amount : "+finalamounnt);
// }else if(purchase<2000){
//       console.log("No Discount");
// }else{
//     console.log("make a purchase to  get disocunt");
// }


// Task-6:

// let Helmet="No";
// let License="No";

// if(Helmet==="No" && License==="No"){
//     let fine="₹3000";
//     console.log("Both missing");
//     console.log("Fine : "+fine);
// }else if(Helmet==="No" && License==="Yes"){
//     let fine="₹1000";
//      console.log("Helmet missing");
//      console.log("Fine : "+fine);
// }else if(Helmet==="Yes" && License==="No"){
//     let fine="₹2000";
//      console.log("License missing");
//      console.log("Fine : "+fine);
// }else{
//      console.log("You are good to go.");

// }


// Task-7:

// let attendence=["P","P","A","P","A","P","P"]

// let presentdays=0;
// let absentdays=0;

// for(let i=0;i<attendence.length;i++){
//     if(attendence[i]=="P"){
//         presentdays++;
//     }else if(attendence[i]=="A"){
//         absentdays++;
//     }
// }
// console.log("Present Days : "+presentdays);
// console.log("Absent Days : "+absentdays);



// Task-8:

// let product={
//     productName : "Laptop",
//     price : 50000,
//     stock : 10
// }

// for(let productdetails in product){
//     console.log(productdetails,product[productdetails]);
// }



// Task-9:

// let distance=14;

// if(distance<=5){
//     let minfare1=20;
//     let fare=distance*minfare1;
//     console.log("Total Fare : "+fare);
// }else if(distance>=5 && distance<=10){
//     let minfare2=15;
//     let fare=(5*20)+(distance-5)*minfare2;
//     console.log("Total Fare : "+fare);
// }else if(distance>10){
//     let minfare3=10;
//     let fare=(5*20)+(5*15)+((distance-10)*minfare3);
//     console.log("Total Fare : "+fare);
// }else {
//     console.log("start ride.");
// }


// Task-10:

// let Employee = [
//     { id: 1, name: "Rahul", salary: 25000 },
//     { id: 2, name: "Kiran", salary: 30000 },
//     { id: 3, name: "Navi", salary: 40000 }
// ]

// let highest=Employee[0];
// let lowest=Employee[0];
// let totalsalary=0;
// let totalemployess=Employee.length;

// console.log("All Employees : ")
// for(let emp of Employee){
//         console.log(emp);
// }

// for(let emp of Employee){
//     totalsalary+=emp.salary;
//     if(emp.salary>highest.salary){
//         highest=emp;
//     }
//     if(emp.salary<lowest.salary){
//         lowest=emp;
//     }
// }

// console.log("Highest Salary : ",highest);
// console.log("Lowest Salary : ",lowest);
// console.log("Total Employess : ",totalemployess);
// console.log("Total Salary Expenditure : ",totalsalary);




