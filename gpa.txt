let grade_point = prompt("Enter your total numer of gradepoints:");
const credit_unit = prompt("Enter your total numer of credit units:");
let gpa = grade_point / credit_unit;
alert("Your gpa for this semester is: " + gpa);
let question = prompt("do you want to calculate for next semester? (answer yes/no)");

if (question = "yes") {
    let grade_point2 = prompt("Enter your total numer of gradepoints:");
    const credit_unit2 = prompt("Enter your total numer of credit units:");
    let gpa2 = grade_point2 / credit_unit2;
    alert("Your gpa for this semester is: " + gpa2);
    let cgpa = gpa + gpa2;
    alert("your total CGPA is " + cgpa)
}
else{
    alert("your CGPA is " + gpa);
}