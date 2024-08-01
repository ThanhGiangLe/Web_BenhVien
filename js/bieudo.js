document.addEventListener("DOMContentLoaded", function () {
  const vietnamData = {
    labels: ["Đột quỵ", "Không đột quỵ"],
    datasets: [
      {
        data: [21.8, 78.2], // Dữ liệu này chỉ là minh họa, cần được cập nhật từ nguồn chính thức
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const configVietnam = {
    type: "doughnut",
    data: vietnamData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              let value = context.raw;
              let total = context.dataset.data.reduce((a, b) => a + b, 0);
              let percentage = ((value / total) * 100).toFixed(2) + "%";
              return label + ": " + percentage;
            },
          },
        },
      },
    },
  };

  const vietnamChart = new Chart(
    document.getElementById("vietnamChart"),
    configVietnam
  );
});
