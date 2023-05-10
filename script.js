document.addEventListener("DOMContentLoaded", function() {
  //burger menu js:
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => {

    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  //carousel change js:
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0;
  let interval = null;

  function startCarousel() {
    interval = setInterval(() => {
      const currentItem = carouselItems[currentIndex];
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      const nextItem = carouselItems[currentIndex];
      currentItem.classList.remove('active');
      nextItem.classList.add('active');
    }, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
    interval = null;
  }

  startCarousel();

// Get the modal
  var subscribeModal = document.getElementById("subscribeModal");

// Get the button that opens the modal
  var subscribeBtn = document.getElementById("subscribeBtn");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
  subscribeBtn.onclick = function() {
    subscribeModal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    subscribeModal.style.display = "none";
  }



  // Get the modal
  var bookNowModal = document.getElementById("bookNowModal");

// Get the button that opens the modal
  var bookNowBtn = document.getElementById("bookNowButton");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
  bookNowBtn.onclick = function() {
    console.log("hello");
    bookNowModal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    bookNowModal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == subscribeModal) {
      subscribeModal.style.display = "none";
    }
  }

});



window.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("map-modal");
  const btn = document.getElementById("show-map-btn");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[2];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    initMap();
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
});

function initMap() {
  const location = { lat: 54.6805971, lng: 25.2975583 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}



