document.addEventListener("DOMContentLoaded", function () {
  var btnXemThem = document.getElementById("xemthemcosoyte");
  var btnAnBot = document.getElementById("anbotcosoyte");
  var danhSachBenhVien = document.getElementById("ndcosoyte-2");
  const cosoyte = document.querySelector(".cosoyte");

  function adjustHeightXemthem() {
    if (window.innerWidth > 1024) {
      cosoyte.style.height = "75vh";
    } else if (window.innerWidth >= 737 && window.innerWidth <= 1024) {
      cosoyte.style.height = "95vh";
    } else if (window.innerWidth >= 414 && window.innerWidth <= 736) {
      cosoyte.style.height = "130vh";
    }
  }
  function adjustHeightAnBot() {
    if (window.innerWidth > 1024) {
      cosoyte.style.height = "50vh";
    } else if (window.innerWidth >= 737 && window.innerWidth <= 1024) {
      cosoyte.style.height = "65vh";
    } else if (window.innerWidth >= 414 && window.innerWidth <= 736) {
      cosoyte.style.height = "90vh";
    }
  }

  btnXemThem.addEventListener("click", function () {
    danhSachBenhVien.style.display = "block";
    btnXemThem.style.display = "none";
    adjustHeightXemthem();
  });
  btnAnBot.addEventListener("click", function () {
    danhSachBenhVien.style.display = "none";
    btnXemThem.style.display = "block";
    adjustHeightAnBot();
  });

  window.addEventListener("resize", adjustHeightXemthem);
  window.addEventListener("resize", adjustHeightAnBot);
  adjustHeightXemthem(); // Gọi hàm để thiết lập chiều cao ban đầu
  adjustHeightAnBot();
});
