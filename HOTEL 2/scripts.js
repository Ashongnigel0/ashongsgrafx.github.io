// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Booking form validation
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = bookingForm.elements['name'].value.trim();
      const email = bookingForm.elements['email'].value.trim();
      const phone = bookingForm.elements['phone'].value.trim();
      const checkin = bookingForm.elements['checkin'].value;
      const checkout = bookingForm.elements['checkout'].value;
      const guests = bookingForm.elements['guests'].value;

      let errors = [];

      if (!name) errors.push('Please enter your full name.');
      if (!email || !validateEmail(email)) errors.push('Please enter a valid email.');
      if (!phone) errors.push('Please enter your phone number.');
      if (!checkin) errors.push('Please select a check-in date.');
      if (!checkout) errors.push('Please select a check-out date.');
      if (checkin && checkout && new Date(checkout) <= new Date(checkin)) errors.push('Check-out date must be after check-in date.');
      if (!guests || guests < 1) errors.push('Please select number of guests.');

      if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
      }

      // If validation passed, submit the form (you can replace this with AJAX later)
      bookingForm.submit();
    });
  }

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();

      let errors = [];

      if (!name) errors.push('Please enter your name.');
      if (!email || !validateEmail(email)) errors.push('Please enter a valid email.');
      if (!message) errors.push('Please enter your message.');

      if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
      }

      // If validation passed, submit the form (replace with AJAX if desired)
      contactForm.submit();
    });
  }
});
