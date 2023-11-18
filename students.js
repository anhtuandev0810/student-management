// Validate form
function validateForm() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let description = document.getElementById("description").value;

  if (name === "") {
    alert("Please enter a name!");
    return false;
  }
  if (age < 0) {
    alert("Age must be greater than zero!");
    return false;
  } else if (address === "") {
    alert("Please enter a address!");
    return false;
  }
  return true;
}

// show list students:
function showListStudents() {
  let studentsList;
  if (localStorage.getItem("studentsList") === null) {
    studentsList = [];
  } else {
    studentsList = JSON.parse(localStorage.getItem("studentsList"));
  }

  let htmlData = "";
  studentsList.forEach(function (element, id) {
    htmlData += "<tr>";
    htmlData += "<td>" + element.name + "</td>";
    htmlData += "<td>" + element.age + "</td>";
    htmlData += "<td>" + element.address + "</td>";
    htmlData += "<td>" + element.description + "</td>";
    htmlData +=
      `
            <td>
                <button onclick="updateData(` +
      id +
      `)" class="btn btn-primary">Edit Student</button>
                <button onclick="deleteData(` +
      id +
      `)" class="btn btn-danger">Delete</button>
            </td>
        `;
    htmlData += "</tr>";
  });
  console.log(document.querySelector("#crudTable tbody"));
  document.querySelector("#crudTable tbody").innerHTML = htmlData;
}

document.onload = showListStudents();

// Add data:
function addData() {
  if (validateForm() === true) {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;

    let studentsList;
    if (localStorage.getItem("studentsList") === null) {
      studentsList = [];
    } else {
      studentsList = JSON.parse(localStorage.getItem("studentsList"));
    }

    studentsList.push({
      name: name,
      age: age,
      address: address,
      description: description,
    });

    localStorage.setItem("studentsList", JSON.stringify(studentsList));
    showListStudents();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("description").value = "";
  }
}

// Update student:
function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  let studentsList;
  if (localStorage.getItem("studentsList") === null) {
    studentsList = [];
  } else {
    studentsList = JSON.parse(localStorage.getItem("studentsList"));
  }

    document.getElementById("name").value = studentsList[index].name;
    document.getElementById("age").value = studentsList[index].age;
    document.getElementById("address").value = studentsList[index].address;
    document.getElementById("description").value = studentsList[index].description;

    document.querySelector("#Update").onclick = function() {
        if(validateForm() === true) {
            studentsList[index].name = document.getElementById("name").value;
            studentsList[index].age = document.getElementById("age").value;
            studentsList[index].address = document.getElementById("address").value;
            studentsList[index].description = document.getElementById("description").value;
        
            localStorage.setItem("studentsList", JSON.stringify(studentsList));
            showListStudents();

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("description").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}


// Delete student:
function deleteData(index) {
    let studentsList;
  if (localStorage.getItem("studentsList") === null) {
    studentsList = [];
  } else {
    studentsList = JSON.parse(localStorage.getItem("studentsList"));
  }

  studentsList.splice(index, 1);
  localStorage.setItem("studentsList", JSON.stringify(studentsList));
  showListStudents();
}