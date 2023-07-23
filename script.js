
function fetchCatImage() {
    return fetch('https://cataas.com/cat')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      })
      .catch((error) => {
        console.error('Error fetching cat image:', error);
        return null;
      });
  }
  
  function displayCatImage(imageUrl) {
    const catImageContainer = document.getElementById('catImage');
    catImageContainer.innerHTML = `<img src="${imageUrl}" alt="Cat Image">`;
  }
  

  function handleFetchButtonClick() {
    fetchCatImage().then((imageUrl) => {
      if (imageUrl) {
        displayCatImage(imageUrl);
      } else {
        alert('Failed to fetch cat image. Please try again later.');
      }
    });
  }
  
  
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', handleFetchButtonClick);
  

  document.addEventListener('DOMContentLoaded', () => {
    handleFetchButtonClick();
  });
  