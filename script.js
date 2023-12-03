$(window).on('load',function(){
	setTimeout(function(){ 
	$('.page-loader').fadeOut('slow');
	},3500);
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});



function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
  } else {
      alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
      document.getElementById('contactForm').reset();
  }
}

function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

function submitLogin() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  

  alert("Login submitted!\nEmail: " + email + "\nPassword: " + password);
}

function submitSignup() {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;



  alert("Signup submitted!\nName: " + name + "\nEmail: " + email + "\nPassword: " + password);
}







gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "70px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#page1 img ,#text , #buttons", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from("#right ,#left , #box", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page5 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from("#text4 ,#project ", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page6",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});

function togglePopup() {
  var overlay = document.getElementById('popupOverlay1');
  var popup = document.getElementById('popupContainer1');

  if (overlay.style.display === 'flex' || overlay.style.display === '') {
      overlay.style.display = 'none';
      popup.style.display = 'none';
  } else {
      overlay.style.display = 'flex';
      popup.style.display = 'block';
  }
}

function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  console.log('Name:', name);
  console.log('Phone Number:', phone);
  console.log('Email:', email);


  togglePopup();
}