function calculateResult(){

    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let average = total / 3;

    let grade;

    if(average >= 90)
        grade = "A";
    else if(average >= 75)
        grade = "B";
    else if(average >= 50)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
    "Name: " + name +
    "<br>Total: " + total +
    "<br>Average: " + average.toFixed(2) +
    "<br>Grade: " + grade;
}