document.addEventListener("DOMContentLoaded", function() {
  const galleryList = document.getElementById('gallery');
  
  // Function to rotate items in the gallery
  function rotateGallery() {
    const firstItem = galleryList.firstElementChild;
    galleryList.removeChild(firstItem);
    galleryList.appendChild(firstItem);
  }
  
  setInterval(rotateGallery, 500);
});