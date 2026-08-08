/**
 * NAGI FILM - Main Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Header Opacity Adjustment on Scroll ---
  const header = document.querySelector(".site-header");
  
  if (header && !header.classList.contains("subpage")) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // --- Mobile Navigation Drawer (Hamburger) ---
  const hamburger = document.querySelector(".hamburger");
  const navDrawer = document.querySelector(".nav-drawer");
  const drawerLinks = document.querySelectorAll(".drawer-links a");
  
  if (hamburger && navDrawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = navDrawer.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen);
      
      // Morph hamburger lines
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (isOpen) {
        lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
      }
    });
    
    // Close drawer when clicking any link inside
    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        navDrawer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        const lines = hamburger.querySelectorAll(".hamburger-line");
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
      });
    });
  }

  // --- Contact Form Submission Handling ---
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  
  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default submission
      
      // Perform simple validation check
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Collect data (for simulation)
      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalBtnText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = "SENDING...";

      // Simulate network request
      setTimeout(() => {
        // Hide form and display confirmation message
        contactForm.style.display = "none";
        formFeedback.classList.add("success");
        formFeedback.innerHTML = `
          <h3>Thank you.</h3>
          <p class="ja">メッセージが送信されました。内容を確認し、近日中にご連絡いたします。</p>
          <p>Your message has been received. We will get back to you shortly.</p>
        `;
        
        // Scroll to feedback top
        formFeedback.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1500);
    });
  }

  // --- Scroll Reveal Animation Fallback (IntersectionObserver) ---
  const isScrollTimelineSupported = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  
  if (!isScrollTimelineSupported) {
    console.log("CSS Scroll-driven animations not supported. Activating IntersectionObserver fallback.");
    
    const revealOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    // Track scroll-reveal elements
    const elementsToReveal = document.querySelectorAll(".reveal-item, .clip-reveal, .image-reveal");
    elementsToReveal.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    console.log("Native CSS Scroll-driven animations are active.");
  }
});
