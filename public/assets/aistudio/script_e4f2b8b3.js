// Mushtaque Ahmed Portfolio - Client JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Current year in footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  // Contact Form Handling (mailto fallback)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = (document.getElementById('name') as HTMLInputElement | null)?.value || '';
      const email = (document.getElementById('email') as HTMLInputElement | null)?.value || '';
      const subject = (document.getElementById('subject') as HTMLInputElement | null)?.value || 'Portfolio Contact Inquiry';
      const message = (document.getElementById('message') as HTMLTextAreaElement | null)?.value || '';

      const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:mushtaqueahmed.edu@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;

      window.location.href = mailtoUrl;
    });
  }
});
