const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message !== '') {
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    chatBox.appendChild(msgElement);
    messageInput.value = '';
  }
});
