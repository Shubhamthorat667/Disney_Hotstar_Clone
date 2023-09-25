const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close");

let userMessage;

// Replace this with your actual OpenAI API key
const API_KEY = "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";
// const inputInitHeight =chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p></p>` 
        : `<span class="material-icons">smart_toy</span><p></p>`;

    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: userMessage }],
            temperature: 0.7
        })
    };
  //send the POST request to APPI, get response
    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
                messageElement.textContent = data.choices[0].message.content;
            } else {
                messageElement.textContent = "Oops! No response received.";
            }
        })
        .catch((error) => {
            console.error(error);
            messageElement.textContent = "Oops! Something went wrong";
        }).finally(() =>  chatbox.scrollTo(0,chatbox.scrollHeight));
}
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value=""

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight)

    setTimeout(() => {
        // display the thinking message while waiting
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight)
        generateResponse(incomingChatLi);
    }, 200);
}


// //adjust the height of the input textarea based on its content 
// chatInput.addEventListener("Input",() =>{
//     chatInput.style.height =`${inputInitHeight}px`;
//     chatInput.style.height =`${chatInput.scrollHeight}px`;

// });



sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));