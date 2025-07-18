const bubbles = document.querySelectorAll('.bubble');

document.querySelector("body").addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (clientX - centerX) / 100;
  const offsetY = (clientY - centerY) / 100;

  bubbles.forEach((bubble, index) => {
    const factor = (index + 1) * 2;
    bubble.style.transform = `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
  });
});

let scroll_icon = document.getElementById('animate-scroll');
let header_change = document.querySelector(".main-header");
window.addEventListener('scroll', () => {
  if (scrollY == 0) {
    scroll_icon.style.opacity = 1;
     header_change.classList.remove("header_change");
  } else {
    scroll_icon.style.opacity = 0;
    header_change.classList.add("header_change");
  }
});


let show = document.querySelectorAll(".unavailable");
let overlay = document.querySelectorAll(".close");

show.forEach(show => {
  show.addEventListener('click', () => {
    document.querySelector('.popup').style.display = "flex";
  });
});

overlay.forEach(closed => {
  closed.addEventListener('click', () => {
    document.querySelector('.popup').style.display = "none";
  });
});

//Email.Js
function sendMail(){
  details = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_message: document.getElementById("from_message").value
  }

  emailjs.send("service_r1pdycm","template_wknqqxi", details).then(alert("Your Email successfully Sent!!"));
}



