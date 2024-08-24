if (localStorage.getItem("loggedIn")) {
  var ulElem = document.getElementById("nav");
  ulElem.removeChild(ulElem.childNodes[7]);
  const link = document.getElementById("checklistLink");
  link.href = "checklistDynamic.html";
}

if (!localStorage.getItem("loggedIn")) {
  var ulElem = document.getElementById("nav");
  ulElem.removeChild(ulElem.childNodes[9]);
  const link = document.getElementById("checklistLink");
  link.href = "checklist.html";
}
