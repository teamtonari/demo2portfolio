document.addEventListener("DOMContentLoaded", () => {
  // Only initialize on desktop/mouse pointer devices
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  // Create cursor elements
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  
  dot.classList.add("custom-cursor");
  ring.classList.add("custom-cursor-ring");
  
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.classList.add("custom-cursor-active");

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  let isMoving = false;

  // Track Mouse Position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    
    // Position dot immediately
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth Ring Follow (requestAnimationFrame)
  const ease = 0.12; // Easing factor (lower is smoother/slower)
  
  function updateRing() {
    if (isMoving) {
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }
    requestAnimationFrame(updateRing);
  }
  requestAnimationFrame(updateRing);

  // Hover Interactions
  const addHoverEffects = () => {
    const hoverTargets = document.querySelectorAll("a, button, input, textarea, select, .work-card, .work-card-wide, .dialog-close-btn");
    
    hoverTargets.forEach((target) => {
      // Avoid duplicate event listeners
      if (target.dataset.cursorBound) return;
      target.dataset.cursorBound = "true";

      target.addEventListener("mouseenter", () => {
        dot.classList.add("hover");
        ring.classList.add("hover");
      });

      target.addEventListener("mouseleave", () => {
        dot.classList.remove("hover");
        ring.classList.remove("hover");
      });
    });
  };

  // Initial bindings
  addHoverEffects();

  // Watch for dynamic elements being added (e.g. from works.js grid)
  const observer = new MutationObserver(() => {
    addHoverEffects();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Handle color inversion on dark backgrounds
  const darkSections = document.querySelectorAll(".contact-cta, .site-footer, .hero");
  
  window.addEventListener("scroll", () => {
    let cursorOnDark = false;
    
    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // If cursor is within bounds of this dark section
      if (mouseY >= rect.top && mouseY <= rect.bottom && mouseX >= rect.left && mouseX <= rect.right) {
        cursorOnDark = true;
      }
    });

    if (cursorOnDark) {
      document.body.classList.add("contact-cta-cursor");
    } else {
      document.body.classList.remove("contact-cta-cursor");
    }
  });
  
  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });
});
