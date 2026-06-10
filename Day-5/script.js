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
//             if (foodItems[i].foodName == item) {
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
//             if (movie.movieName == select) {
//                 moviefound = true;
//                 if (movie.availableSeats > 0) {
//                     console.log("Booking confirmed!");
//                     console.log(movie.movieName);
//                     console.log(movie.ticketPrice);
//                     console.log(movie.language);
//                     break;
//                 } else {
//                     console.log(movie.movieName);
//                     console.log("House full");
//                     break;
//                 }
//             }

//         }
//         if (!moviefound) {
//             console.log("Movie not found");
//         }
//     }
// )