const chatbotToggle = document.querySelector(".chatbot__button"); //Nút bật/tắt chatbot.
const sendChatBtn = document.querySelector(".chatbot__input-box span"); //Nút gửi tin nhắn.
const chatInput = document.querySelector(".chatbot__textarea"); //Ô nhập tin nhắn của người dùng.
const chatBox = document.querySelector(".chatbot__box"); //Vùng hiển thị các tin nhắn trong chatbot.
const chatbotCloseBtn = document.querySelector(".chatbot__header span"); //Nút đóng chatbot.

let userMessage; //Biến để lưu trữ tin nhắn của người dùng.
const inputInitHeight = chatInput.scrollHeight; //Chiều cao khởi tạo của ô nhập tin nhắn.
const API_KEY = "HERE"; //Khóa API cần thiết để kết nối với OpenAI.

//tạo tin nhắn

/*
    message: Nội dung tin nhắn.
    className: Loại tin nhắn (có thể là outgoing cho tin nhắn của người dùng hoặc incoming cho tin nhắn từ chatbot).
*/
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chatbot__chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span> <p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

//
// generateResponse: Hàm gửi yêu cầu đến API OpenAI để nhận phản hồi từ chatbot.
// API_URL: Đường dẫn đến API.
// Tạo các tùy chọn yêu cầu (requestOptions) bao gồm:
// Phương thức POST.
// Thêm tiêu đề Content-Type và Authorization với API_KEY.
// Nội dung yêu cầu với mô hình gpt-3.5-turbo và tin nhắn người dùng.
// Sử dụng fetch để gửi yêu cầu và nhận phản hồi.
// Cập nhật nội dung của tin nhắn trong giao diện với phản hồi từ chatbot.
// Nếu có lỗi, hiển thị thông báo lỗi cho người dùng.

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions"; //đường dãn với AI
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: userMessage }],
    }),
  };
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch((error) => {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Các bác sĩ đang bận, vui lòng chờ trong giây lát!";
      console.log(error);
    })
    .finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatBox.appendChild(createChatLi(userMessage, "outgoing"));
  chatBox.scrollTo(0, chatBox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});
chatbotToggle.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
sendChatBtn.addEventListener("click", handleChat);
