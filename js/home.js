var projectsList;
if (localStorage.getItem("projectsList") === null) {
  projectsList = [];
} else {
  projectsList = JSON.parse(localStorage.getItem("projectsList"));
}

console.log(projectsList);

let projects = document.getElementById("design");

var htmlDesign = "";
projectsList.forEach((element, index) => {
    htmlDesign += "<div class= 'design-information'>";
    htmlDesign += "<div class= 'design-information-top'>" + element.url + "</div>";
    htmlDesign += "<div class= 'design-information-button'>"
    htmlDesign += "<div class= 'left'>"
    htmlDesign += "<h4>" + element.name + "</h4>";
    htmlDesign += "<p>" + element.tags + "</p>";
    htmlDesign += "</div >";
    htmlDesign += "<div class= 'right'>";
    htmlDesign += "<span class= 'material-symbols-outlined'>" + "arrow_forward" + "</span>";
    htmlDesign += "</div>";
    htmlDesign += "</div>";
    htmlDesign += "</div>";

});

document.getElementById("design").innerHTML = htmlDesign;