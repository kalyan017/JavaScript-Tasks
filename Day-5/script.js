// // Task-1:


// let students = [
//     {
//         id: 1,
//         name: "kalyan",
//         department: "CSE",
//         marks: 98
//     },
//     {
//         id: 2,
//         name: "arjun",
//         department: "ECE",
//         marks: 36
//     },
//     {
//         id: 3,
//         name: "harsha",
//         department: "EEE",
//         marks: 56
//     },
//     {
//         id: 4,
//         name: "bittu",
//         department: "MEC",
//         marks: 97
//     },
//     {
//         id: 5,
//         name: "dattu",
//         department: "CIVIL",
//         marks: 76
//     }
// ]

// console.log("Student names: ")
// for (let student of students) {
//     console.log(student.name);
// }

// let totalmarks = 0;
// for (let student of students) {
//     totalmarks += student.marks;
// }
// console.log("Total Marks :", totalmarks);


// console.log("Students who scored above 80:");
// for (let student of students) {
//     if (student.marks > 80) {
//         console.log(student.name);
//     }
// }

// console.log("Student Grades:");
// for (let student of students) {
//     if (student.marks > 90) {
//         console.log(student.name, ": A");
//     } else if (student.marks > 75) {
//         console.log(student.name, ": B");
//     } else if (student.marks > 50) {
//         console.log(student.name, ": C");
//     } else {
//         console.log(student.name, ": Fail");
//     }
// }


// console.log("Student Details: ");
// function studentdetails(student) {
//     console.log("Student Id: ", student.id);
//     console.log("Student name:", student.name);
//     console.log("Student Department:", student.department);
//     console.log("Student marks:", student.marks);
// }

// for (let student of students) {
//     studentdetails(student)
// }


// Task - 2:

// let employee = [
//     {
//         id: 1,
//         name: "kalyan",
//         salary: 25000,
//         department: "IT"
//     },
//     {
//         id: 2,
//         name: "arjun",
//         salary: 28000,
//         department: "Finance"
//     }, {
//         id: 3,
//         name: "Dattu",
//         salary: 45000,
//         department: "HR"
//     }
// ]

// console.log("Employee Names:");
// for (let i = 0; i < employee.length; i++) {
//     console.log(employee[i].name);
// }

// let totalexpense = 0;
// for (let i = 0; i < employee.length; i++) {
//     totalexpense += employee[i].salary;
// }
// console.log("Total company salary expense:", totalexpense);

// console.log("Employees earning above 30000: ");

// for (let i = 0; i < employee.length; i++) {
//     if (employee[i].salary > 30000) {
//         console.log(employee[i]);
//     }
// }

// console.log("Department descriptions:");
// for (i = 0; i < employee.length; i++) {
//     console.log(employee[i].name);
//     switch (employee[i].department) {
//         case "IT":
//             console.log("IT Department");
//             break;
//         case "Finance":
//             console.log("Finance Deartment");
//             break;
//         case "HR":
//             console.log("HR  department");
//             break;
//         default:
//             console.log("Department not found");

//             break;
//     }
// }


// console.log("Callback function to generate payroll reports: ");
// function reports(payroll) {
//     console.log("Proceesing payroll...");
//     payroll()
// }
// reports(() => {
//     for (let i = 0; i < employee.length; i++) {
//         console.log(employee[i].name,
//             employee[i].salary,
//             employee[i].department);
//     }
// }
// )


// Task - 3:

// let foodItems = [
//     {
//         id: 1,
//         foodName: "Biryani",
//         price: 250,
//         category: "Non-Veg"
//     },
//     {
//         id: 2,
//         foodName: "Pizza",
//         price: 300,
//         category: "Fast Food"
//     },
//     {
//         id: 3,
//         foodName: "Dosa",
//         price: 80,
//         category: "South Indian"
//     },
//     {
//         id: 4,
//         foodName: "Burger",
//         price: 150,
//         category: "Fast Food"
//     },
//     {
//         id: 5,
//         foodName: "Paneer Curry",
//         price: 200,
//         category: "Veg"
//     }
// ];

// console.log("Food Names:");
// for (let food of foodItems) {
//     console.log(food.foodName);
// }

// let totalvalue = 0;
// for (let total of foodItems) {
//     totalvalue += total.price;
// }
// console.log("Total Menu Value :", totalvalue);

// console.log("Food items above 200:");

// for (let food of foodItems) {
//     if (food.price > 200) {
//         console.log(food);
//     }
// }

// for (let descriptions of foodItems) {
//     console.log(descriptions.foodName);
//     switch (descriptions.category) {
//         case "Non-Veg":
//             console.log("Non veg item");
//             break;
//         case "Fast Food":
//             console.log("Fast food item");
//             break;
//         case "South Indian":
//             console.log("South Indian item");
//             break;
//         case "Veg":
//             console.log("Veg item");
//             break;
//         default:
//             console.log("Item not found");
//             break;
//     }
// }

// console.log("Order Confirmation:");

// let orderconfirmation = (order) => {
//     order()
// }

// orderconfirmation(
//     () => {
//         console.log("Available Food Items:");
//         for (let i = 0; i < foodItems.length; i++) {
//             console.log(foodItems[i].foodName);
//         }

//         let itemfound = false;
//         let item = prompt("enter an item to order:");
//         for (let i = 0; i < foodItems.length; i++) {
//             if (foodItems[i].foodName === item) {
//                 itemfound = true;
//                 console.log("Order Confirmed!");
//                 console.log("Name:", foodItems[i].foodName);
//                 console.log("Price:", foodItems[i].price);
//                 console.log("Category:", foodItems[i].category);
//                 break;
//             }
//         }

//         if (!itemfound) {
//             console.log("Item not available...");
//         }
//     }
// )


// // Task-4:

// let movies = [
//     {
//         movieName: "Pushpa 2",
//         ticketPrice: 250,
//         availableSeats: 50,
//         language: "Telugu"
//     },
//     {
//         movieName: "Salaar",
//         ticketPrice: 300,
//         availableSeats: 0,
//         language: "Kannada"
//     },
//     {
//         movieName: "RRR",
//         ticketPrice: 200,
//         availableSeats: 60,
//         language: "Telugu"
//     },
//     {
//         movieName: "Kalki 2898 AD",
//         ticketPrice: 350,
//         availableSeats: 0,
//         language: "English"
//     },
//     {
//         movieName: "Devara",
//         ticketPrice: 280,
//         availableSeats: 45,
//         language: "Hindi"
//     }
// ];

// console.log("Movie names:");
// for (let movie of movies) {
//     console.log(movie.movieName);
// }


// let totalseats = 0;
// for (let seats of movies) {
//     totalseats += seats.availableSeats;
// }
// console.log("Available seats:", totalseats);

// for (let booking of movies) {
//     if (booking.availableSeats > 0) {
//         console.log("Booking is possible for", booking.movieName);
//     } else {
//         console.log("House full for", booking.movieName);
//     }
// }

// console.log("Movie Language:");

// let movielanguage;
// for (movie of movies) {
//     switch (movie.language) {
//         case "Telugu":
//             console.log(movie.movieName, "is", "Telugu Movie");
//             break;
//         case "Hindi":
//             console.log(movie.movieName, "is", "Hindi Movie");
//             break;
//         case "English":
//             console.log(movie.movieName, "is", "English Movie");
//             break;
//         case "Kannada":
//             console.log(movie.movieName, "is", "Kannada Movie");
//             break;
//         default:
//             console.log("Unknown language");
//             break;
//     }
// }


// console.log("Booking confirmation:");

// let bookingconfirmation = (booking) => {
//     booking()
// }
// bookingconfirmation(
//     () => {
//         console.log("Available Movies");
//         for (let movie of movies) {
//             console.log(movie.movieName);
//         }

//         let select = prompt("enter a movie name");
//         let moviefound = false;
//         for (let movie of movies) {
//             if (movie.movieName === select) {
//                 moviefound = true;
//                 if (movie.availableSeats > 0) {
//                     console.log("Booking confirmed!");
//                     console.log(movie.movieName);
//                     console.log(movie.ticketPrice);
//                     console.log(movie.language);
//                     return;
//                 } else {
//                     console.log("Booking is not confirmed!");
//                     console.log(movie.movieName);
//                     console.log("House full");
//                     return;
//                 }
//             }

//         }
//         if (!moviefound) {
//             console.log("Movie not found");
//         }
//     }
// )



// Task-5:

// let patients = [
//     {
//         patientId: 1,
//         patientName: "Ramesh",
//         age: 65,
//         disease: "Fever"
//     },
//     {
//         patientId: 2,
//         patientName: "Suresh",
//         age: 60,
//         disease: "Diabetes"
//     },
//     {
//         patientId: 3,
//         patientName: "Priya",
//         age: 28,
//         disease: "Migraine"
//     },
//     {
//         patientId: 4,
//         patientName: "Kiran",
//         age: 75,
//         disease: "Asthma"
//     },
//     {
//         patientId: 5,
//         patientName: "Anjali",
//         age: 50,
//         disease: "Hypertension"
//     }
// ];

// console.log("Patient Names:");

// for (let names of patients) {
//     console.log(names.patientName);
// }

// console.log("Total patients:", patients.length);
// console.log("Patients above 60:");
// for (let patientage of patients) {
//     if (patientage.age > 60) {
//         console.log(patientage);
//     }
// }

// for (let patientdisease of patients) {
//     console.log(patientdisease.patientName);
//     switch (patientdisease.disease) {
//         case "Fever":
//             console.log("Fever Department");
//             break;
//         case "Diabetes":
//             console.log("Diabetes Department");
//             break;
//         case "Migraine":
//             console.log("Migraine Department");
//             break;
//         case "Asthma":
//             console.log("Asthma Department");
//             break;
//         case "Hypertension":
//             console.log("Hypertension Department");
//             break;
//         default:
//             console.log("Department not found");
//             break;
//     }
// }

// let appointmentconfirmation = (booking) => {
//     booking()
// }
// appointmentconfirmation(
//     () => {
//         console.log("Available Departments:");
//         console.log("Fever Department");
//         console.log("Diabetes Department");
//         console.log("Migraine Department");
//         console.log("Asthma Department");
//         console.log("Hypertension Department");
//         let diseasefound=false;
//         let select=prompt("enter disease name:")
//         for(let diseases of patients){
//             if(diseases.disease===select){
//                 diseasefound=true;
//                 console.log("Appointment Confirmed!");
//                 break;
//             }
//         }
//         if(!diseasefound){
//             console.log("No Doctors Available for this disease");

//         }
//     }
// )


// task-6:
// let books = [
//     {
//         bookId: 1,
//         bookName: "Atomic Habits",
//         author: "James Clear",
//         category: "Self Help",
//         price: 499
//     },
//     {
//         bookId: 2,
//         bookName: "The Alchemist",
//         author: "Paulo Coelho",
//         category: "Fiction",
//         price: 350
//     },
//     {
//         bookId: 3,
//         bookName: "Rich Dad Poor Dad",
//         author: "Robert Kiyosaki",
//         category: "Finance",
//         price: 550
//     },
//     {
//         bookId: 4,
//         bookName: "Think and Grow Rich",
//         author: "Napoleon Hill",
//         category: "Motivational",
//         price: 400
//     },
//     {
//         bookId: 5,
//         bookName: "Clean Code",
//         author: "Robert C. Martin",
//         category: "Programming",
//         price: 650
//     }
// ];

// console.log("Book Names:");
// for(let i=0;i<books.length;i++){
//     console.log(books[i].bookName);
// }

// let totalvalue=0;
// for(let value of books){
//     totalvalue+=value.price;
// }
// console.log("Total Books Value: ",totalvalue);

// console.log("Book value more than 500: ");
// for(let value of books){
//     if(value.price>500){
//         console.log(value.bookName);
//     }
// }

// for(let categories of books){
//     console.log(categories.bookName);
//     switch (categories.category) {
//         case "Self Help":
//             console.log("Self Help category");
//             break;
//         case "Fiction":
//             console.log("Fiction category");
//             break;
//         case "Programming":
//             console.log("Programming Category");
//             break;
//         case "Motivational":
//             console.log("Motivational Category");
//             break;
//         case "Finance":
//             console.log("Finance Category");
//             break;
//         default:
//             console.log("Category not found");
//             break;
//     }
// }

// let selection=()=>{
//       let select=prompt("please select a book: ");
//       let bookselect=false;
//       for(let book of books){
//         if(book.bookName===select){
//             bookselect=true;
//             console.log("Book is issued");
//             return;
//         }
//       }
//       if(!bookselect){
//         console.log("Book not found");
//       }
// }
// selection()



// Task-7:

// let products = [
//     {
//         productId: 1,
//         productName: "Laptop",
//         price: 55000,
//         stock: 10
//     },
//     {
//         productId: 2,
//         productName: "Mobile",
//         price: 25000,
//         stock: 5
//     },
//     {
//         productId: 3,
//         productName: "Headphones",
//         price: 2000,
//         stock: 3
//     },
//     {
//         productId: 4,
//         productName: "Keyboard",
//         price: 1500,
//         stock: 20
//     },
//     {
//         productId: 5,
//         productName: "Mouse",
//         price: 800,
//         stock: 25
//     }
// ];

// console.log("Products: ");
// for(let items of products){
//     console.log(items.productName);
// }

// let total=0;
// for(let value of products){
//     total+=value.price;
// }
// console.log("Inventory Value:",total);

// console.log("Stock itmes less than 10:");
// for(let items of products){
//     if(items.stock<10){
//         console.log(items.productName);
//     }
// }

// console.log("stock status:");
// for(let items of products){
//     console.log(items.productName,":",items.stock);
// }

// console.log("Product Report:");

// let reports=(product)=>{
//    product()
// }

// reports(
//     ()=>{
//         for(let items of products){
//             console.log(items.productId,items.productName,items.stock,items.price);
//         }
//     }
// )



// Task-8:

// let applicants = [
//     {
//         name: "Kalyan",
//         age: 21,
//         percentage: 85,
//         department: "CSE"
//     },
//     {
//         name: "Arjun",
//         age: 22,
//         percentage: 48,
//         department: "ECE"
//     },
//     {
//         name: "Harsha",
//         age: 20,
//         percentage: 92,
//         department: "EEE"
//     },
//     {
//         name: "Bittu",
//         age: 23,
//         percentage: 67,
//         department: "MECH"
//     },
//     {
//         name: "Dattu",
//         age: 21,
//         percentage: 58,
//         department: "CIVIL"
//     }
// ];

// console.log("Applicant names:");
// for (let student of applicants) {
//     console.log(student.name);
// }

// console.log("Eligibility Check:");
// for (let student of applicants) {
//     if (student.age >= 18) {
//         if (student.percentage >= 60) {
//             console.log(student.name, "is", "Eligible");
//         } else {
//             console.log(student.name, "is", "Not eligible");
//         }
//     } else {
//         console.log("Not Eligible");

//     }
// }

// for (let dept of applicants) {
//     console.log(dept.name);
//     switch (dept.department) {
//         case "CSE":
//             console.log("CSE Department");
//             break;
//         case "ECE":
//             console.log("ECE Department");
//             break;
//         case "EEE":
//             console.log("EEE Department");
//             break;
//         case "CIVIL":
//             console.log("CIVIL Department");
//             break;
//         case "MECH":
//             console.log("MECH Department");
//             break;
//         default:
//             console.log("Department not found");
//             break;
//     }
// }

// console.log("Admission Results:");
// let Results = (Admission) => {
//     Admission()
// }
// Results(
//     () => {
//         for (let student of applicants) {
//             if (student.age >= 18) {
//                 if (student.percentage >= 60) {
//                     console.log(student.name, ": your admission is succes");

//                 } else {
//                     console.log(student.name, ": your admission is not success bcoz of low percentage");
//                 }
//             } else {
//                 console.log(student.name, ": your admission is not success bcoz of age");
//             }
//         }
//     }
// )



