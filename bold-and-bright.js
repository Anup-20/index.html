(function () {
  "use strict"; // Start of use strict

  // Initialize Parallax Functionality
  function initParallax() {
    if (!('requestAnimationFrame' in window)) return;
    if (/Mobile|Android/.test(navigator.userAgent)) return;

    var parallaxItems = document.querySelectorAll('[data-bss-parallax]');
    if (!parallaxItems.length) return;

    var defaultSpeed = 0.5;
    var visible = [];
    var scheduled;

    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);

    scroll();

    function scroll() {
      visible.length = 0;

      for (var i = 0; i < parallaxItems.length; i++) {
        var rect = parallaxItems[i].getBoundingClientRect();
        var speed = parseFloat(parallaxItems[i].getAttribute('data-bss-parallax-speed'), 10) || defaultSpeed;

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible.push({
            speed: speed,
            node: parallaxItems[i]
          });
        }
      }

      cancelAnimationFrame(scheduled);

      if (visible.length) {
        scheduled = requestAnimationFrame(update);
      }
    }

    function update() {
      for (var i = 0; i < visible.length; i++) {
        var node = visible[i].node;
        var speed = visible[i].speed;

        node.style.transform = 'translate3d(0, ' + (-window.scrollY * speed) + 'px, 0)';
      }
    }
  }

  initParallax();

  // Function to Handle Email Submission
  function sendEmail(event) {
    event.preventDefault();

    const params = {
      name: document.getElementById("name-1").value,
      email: document.getElementById("email-1").value,
      message: document.getElementById("message-1").value,
    };

    emailjs
      .send("your_service_id", "your_template_id", params)
      .then(function (response) {
        alert("Email sent successfully!");
      }, function (error) {
        alert("Failed to send email, please try again.");
      });
  }

  // Bind the sendEmail function to the form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", sendEmail);
  }

})(); // End of use strict
