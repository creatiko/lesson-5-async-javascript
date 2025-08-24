const grabNewMessages = () => {
    //only edit this function
    const notificationWindow = document.querySelector('.notificationAlerts').firstElementChild
    const data =  simulateNetworkRequest()
    notificationWindow.textContent = `You have ${data} new messages.`
}













//DO NOT EDIT BELOW THIS POINT
async function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Network error"));
      } else {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        resolve(randomNumber);
      }
    }, 1000);
  });
}

function startButtonListener() {
  const button = document.querySelector('button')
  button.addEventListener('pointerdown', grabNewMessages)
}

startButtonListener();