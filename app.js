let botToken = "7693036027:AAGgm7tVLVVzKX3NxILjLr9Q33xVFe0vf1o";
let chatID = "5975293914";
let sendButton = document.getElementById("sendButton");
let inp = document.getElementById("inp");

sendButton.addEventListener("click", () => {
    let message = inp.value;
    let fullMessage = ` Message:\n ${message}`
    if (!message.trim()) return;
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        chat_id: chatID,
        text: fullMessage,
        }),
    });
    document.getElementById('inp').value = "";
});
