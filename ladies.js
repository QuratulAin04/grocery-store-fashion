// let student = [1, 2, 3, 4, 5, 23, 65, 768, 93, "we", "she", 5, 6, 7, 8];

// for (let i = 0; i < student.length; i++) {
//   console.log("Student", +(i + 1) + "marks =", student[i]);
// }

// let pesaDouble = function (pesa, orPesa) {
//   alert("to pesa pesa karti hy " + pesa * orPesa);
//   //   return answer;
//   //   console.log(answer);
// };
// pesaDouble(33, 28);

// practice hide show
let a;
function showHide() {
  if (a == 1) {
    document.getElementById("image").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("image").style.display = "none";
    return (a = 1);
  }
}
