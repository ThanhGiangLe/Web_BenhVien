function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("number").value,
  };
  const serviceID = "service_703d1gk";
  const templateID = "template_f569omc";
  emailjs
    .send(serviceID, templateID, parms)
    // .then()
    .catch((err) => console.log(err));
}
// file js
function showResult(event) {
  event.preventDefault(); // Ngăn chặn việc submit form mặc định
  var nameLabel = document.getElementById("name");
  var emailLabel = document.getElementById("email");
  var numberLabel = document.getElementById("number");
  var ageF = document.querySelector("input[name=ageForm]:checked");

  if (
    nameLabel.value.trim() !== "" &&
    emailLabel.value.trim() !== "" &&
    numberLabel.value.trim() !== "" &&
    ageF != null
  ) {
    tongDiem();
  }
}
function tongDiem() {
  let tong = 0;
  let huyetAp = document.querySelector('input[name="huyetAp"]:checked');
  let rungNhi = document.querySelector('input[name="rungNhi"]:checked');
  let thaoDuong = document.querySelector('input[name="thaoDuong"]:checked');
  let cholesterol = document.querySelector('input[name="cholesterol"]:checked');
  let beoPhi = document.querySelector('input[name="beoPhi"]:checked');
  let theLuc = document.querySelector('input[name="theLuc"]:checked');
  let timMach = document.querySelector('input[name="timMach"]:checked');
  let maTuy = document.querySelector('input[name="maTuy"]:checked');
  let age = document.querySelector('input[name="age"]:checked');
  var resultShow = document.querySelector(".result_show");
  var resultForm = document.getElementById("result");

  if (huyetAp) {
    tong += parseInt(huyetAp.value);
  }
  if (rungNhi) {
    tong += parseInt(rungNhi.value);
  }
  if (thaoDuong) {
    tong += parseInt(thaoDuong.value);
  }
  if (cholesterol) {
    tong += parseInt(cholesterol.value);
  }
  if (beoPhi) {
    tong += parseInt(beoPhi.value);
  }
  if (theLuc) {
    tong += parseInt(theLuc.value);
  }
  if (timMach) {
    tong += parseInt(timMach.value);
  }
  if (maTuy) {
    tong += parseInt(maTuy.value);
  }
  if (age) {
    tong += parseInt(age.value);
  }
  resultShow.innerHTML = `Tỉ lệ đột quỵ của bạn là: ${(tong / 40) * 100}%`;
  resultForm.style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.querySelector("input[name=ageForm]").checked = false;
  setTimeout(() => {
    resultForm.style.display = "none";
  }, 3000);
}
document.getElementById("survey-form").addEventListener("submit", showResult);
