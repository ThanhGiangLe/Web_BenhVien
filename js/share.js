document.addEventListener("DOMContentLoaded", function () {
  var chiaSeBtn = document.getElementById("chiase");
  var chiaseHeader = document.querySelector(".chiaseHeader");
  var chiaSeForm = document.getElementById("chiaSeForm");
  var thongBao = document.getElementById("thongBao");

  // Sự kiện click vào nút "CHIA SẺ NGAY"
  chiaSeBtn.addEventListener("click", function () {
    // Hiển thị form chia sẻ
    chiaseHeader.style.display = "block";
    chiaSeForm.style.display = "flex";
  });

  // Xử lý sự kiện click trên các nút chia sẻ (Facebook, Twitter, LinkedIn)
  var facebookBtn = document.getElementById("facebookBtn");
  var twitterBtn = document.getElementById("twitterBtn");
  var linkedinBtn = document.getElementById("instagramBtn");

  function chiaSeThanhCong() {
    // Hiển thị thông báo chia sẻ thành công
    thongBao.style.display = "flex";

    // Ẩn các nút chia sẻ và thông báo sau 3 giây
    setTimeout(function () {
      facebookBtn.style.display = "none";
      twitterBtn.style.display = "none";
      linkedinBtn.style.display = "none";
      chiaseHeader.style.display = "none";
      chiaSeForm.style.display = "none";
      thongBao.style.display = "none";
    }, 3000); // 3 giây

    // Sau 4 giây, đặt lại trạng thái ban đầu
    setTimeout(function () {
      facebookBtn.style.display = "inline-block";
      twitterBtn.style.display = "inline-block";
      linkedinBtn.style.display = "inline-block";
    }, 4000); // 4 giây
  }

  facebookBtn.addEventListener("click", chiaSeThanhCong);
  twitterBtn.addEventListener("click", chiaSeThanhCong);
  linkedinBtn.addEventListener("click", chiaSeThanhCong);
});
