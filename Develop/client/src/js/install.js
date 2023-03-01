const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Save the event object to use later
    const deferredPrompt = event;
    // Show the install button
    butInstall.style.display = 'block';
    // Add a click event handler to the install button
    butInstall.addEventListener('click', async () => {
      // Hide the install button
      butInstall.style.display = 'none';
      // Show the browser's install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const result = await deferredPrompt.userChoice;
      // Log the user's response
      console.log('User response to the install prompt:', result);
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  });
  

window.addEventListener('appinstalled', (event) => {
    console.log('The PWA has been installed.');
  });
  
