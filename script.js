// FAQ
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});

// Form alert for flight 
function showalert() {
  alert("Your Flight travel Form is Submitted Sucessfuly. Wait For 24 working hours we will send you a confirmation email for more details. Thank You!");
}
// Form alert for bus 
function showbusalert() {
  alert("Your bus travel Form is Submitted Sucessfuly. Wait For 24 working hours we will send you a confirmation email for more details. Thank You!");
}

// form alert contact 
function formalert() {
  alert("Form submited sucessfuly!");
}

// form appear 
// form 1 
function openForm1() {
  document.getElementById("Booking-way-form").style.display = "block";
  document.getElementById("black-overlay").style.display = "block";
};
function closeForm() {
  document.getElementById("Booking-way-form").style.display = "none";
  document.getElementById("black-overlay").style.display = "none";
};
// form 2 
function openform2() {
  document.getElementById("Booking-way-form2").style.display = "block";
  document.getElementById("black-overlay").style.display = "block";
}
function closeForm2() {
  document.getElementById("Booking-way-form2").style.display = "none";
  document.getElementById("black-overlay").style.display = "none";
}
// form 3 
function openform3() {
  document.getElementById("Booking-way-form3").style.display = "block";
  document.getElementById("black-overlay").style.display = "block";
}
function closeForm3() {
  document.getElementById("Booking-way-form3").style.display = "none";
  document.getElementById("black-overlay").style.display = "none";
}

// Bus Form 1
function showbusform1() {
  document.getElementById("Booking-bus-form1").style.display = "block";
  document.getElementById("black-overlay").style.display = "block";
}
function closeForm4() {
  document.getElementById("Booking-bus-form1").style.display = "none";
  document.getElementById("black-overlay").style.display = "none";
}
// bus form 2
function showbusform2() {
  document.getElementById("Booking-bus-form2").style.display = "block";
  document.getElementById("black-overlay").style.display = "block";
}
function closeForm5() {
  document.getElementById("Booking-bus-form2").style.display = "none";
  document.getElementById("black-overlay").style.display = "none";
}
// overla7y form removengi
function removeform() {
  document.getElementById("Booking-way-form").style.display = "none";
  document.getElementById("Booking-way-form2").style.display = "none";
  document.getElementById("Booking-way-form3").style.display = "none";
  document.getElementById("Booking-bus-form1").style.display = "none";
  document.getElementById("Booking-bus-form2").style.display = "none";

  document.getElementById("black-overlay").style.display = "none";
}
// feedback 
function showfeedback() {
  document.getElementById("Feedbackform").style.display = "Block";
  document.getElementById("bluroverlay").style.display = "block";
}
function removefeedbackform() {
  document.getElementById("Feedbackform").style.display = "none";
  document.getElementById("bluroverlay").style.display = "none";
  document.getElementById("Query-form").style.display = "none";
}
// Query 
function showQuery() {
  document.getElementById("Query-form").style.display = "Block";
  document.getElementById("bluroverlay").style.display = "block";
}
function footerform() {
  document.getElementById("Feedbackform").style.display = "none";
  document.getElementById("bluroverlay").style.display = "none";
  document.getElementById("Query-form").style.display = "none";
}
function review() {
  alert("Form Submitted Secessfuly!");
}

// booking dasch search bar
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dateInput = document.getElementById('dateInput');
  const travelersInput = document.getElementById('travelersInput');
  const searchBtn = document.getElementById('searchBtn');
  const resortSection = document.getElementById('hotel-loc');

  //  Date  Block 
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  //  filter
  if (searchInput) {
    const beaches = ["Maldives", "Bali", "Miami", "Bora Bora", "Cancun", "Hawaii", "Phuket", "Santorini", "Maui", "Fiji", "Bahamas", "Seychelles"];
    const suggestionsList = document.createElement('ul');
    suggestionsList.id = 'suggestions-list';
    searchInput.parentNode.appendChild(suggestionsList);

    searchInput.addEventListener('input', () => {
      const val = searchInput.value.toLowerCase();
      suggestionsList.innerHTML = '';
      if (val) {
        const matches = beaches.filter(b => b.toLowerCase().includes(val));
        if (matches.length > 0) {
          matches.forEach(beach => {
            const li = document.createElement('li');
            li.textContent = beach;
            li.addEventListener('click', () => {
              searchInput.value = beach;
              suggestionsList.style.display = 'none';
            });
            suggestionsList.appendChild(li);
          });
          suggestionsList.style.display = 'block';
        } else {
          suggestionsList.style.display = 'none';
        }
      } else {
        suggestionsList.style.display = 'none';
      }
    });

    // Hide when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.style.display = 'none';
      }
    });
  }

  //  Search Button going down
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const dest = searchInput ? searchInput.value.trim() : "";
      const date = dateInput ? dateInput.value : "";
      const travel = travelersInput ? travelersInput.value : "";

      if (dest && date && travel) {
        if (resortSection) {
          resortSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        alert("Please fill out the field");
      }
    });
  }
});


// AMINATIONS  
const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("start"); 
          observer.unobserve(entry.target);    
        }
      });
    }, { threshold: 0.4 });

    elements.forEach(el => observer.observe(el));


// Header background 
 const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector(".nav");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
        // Toggle icon between bars and times (X)
        if (nav.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
             nav.classList.remove("active");
             menuIcon.classList.remove("fa-xmark");
             menuIcon.classList.add("fa-bars");
        });
    });
}
