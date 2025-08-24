const grabNewMessages = async () => {
  const notificationWindow = document.querySelector('.notificationAlerts').firstElementChild
  notificationWindow.textContent = 'Loading...'
  try {
    const data = await simulateNetworkRequest()
    notificationWindow.textContent = `You have ${data} new notification${(data === 1) ? '' : 's'}.`
    console.log(data)
  } catch (error) {
    notificationWindow.textContent = `There was an error fetching your notifications`
    console.error(error)
  }
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