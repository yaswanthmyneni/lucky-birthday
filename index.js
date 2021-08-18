var dateOfBirth = document.getElementById("dateofbirth");
var luckynumber = document.getElementById("luckynumber");
var check = document.getElementById("check");
var output = document.getElementById("output");

var cancel = document.getElementsByTagName('span');
var notice = document.getElementById('notice');

cancel[0].addEventListener('click', () => {
    notice.style.display = 'none';
});

check.addEventListener("click", () => {
  var dateSelected, year, month, day, luckyNumber;

  dateSelected = dateOfBirth.value;
  year = dateSelected.substr(0, 4);
  month = dateSelected.substr(5, 2);
  day = dateSelected.substr(8);

  sum = parseInt(year + month + day);
  luckyNumber = parseInt(luckynumber.value);

  remainder = sum % luckyNumber;

  if (remainder === 0) {
    output.innerHTML =
      "<h4> You are lucky </h4>" +
      "<img src='./images/undraw_happy_feeling.svg'>";
  } else {
    output.innerHTML =
      "<h4> You are not lucky </h4>" +
      "<img src='./images/undraw_feeling_blue.svg'>";
  }
});


