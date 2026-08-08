/**
 * NAGI FILM - Accessible Modal Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("works-dialog");
  if (!dialog) return;

  // Function to open the dialog with work data
  window.openWorkModal = function(workId) {
    if (!window.WORKS_DATA) return;
    
    const work = window.WORKS_DATA.find(w => w.id === workId);
    if (!work) return;

    // Target elements within the dialog
    const titleEl = dialog.querySelector(".dialog-title");
    const metaEl = dialog.querySelector(".dialog-meta");
    const descEl = dialog.querySelector(".dialog-description");
    const videoWrapper = dialog.querySelector(".dialog-video-wrapper");

    // Populate contents
    titleEl.textContent = work.title;
    metaEl.textContent = `${work.category} / ${work.year}`;
    descEl.textContent = work.description;

    // Load iframe video dynamically to avoid page-load lag and allow autoplay
    videoWrapper.innerHTML = `
      <iframe 
        src="${work.videoUrl}" 
        title="${work.title} video playback" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;

    // Show native modal
    dialog.showModal();
    document.body.classList.add("dialog-open");
    
    // Set focus to the close button for accessibility
    const closeBtn = dialog.querySelector(".dialog-close-btn");
    if (closeBtn) {
      closeBtn.focus();
    }
  };

  // Function to close the dialog
  window.closeWorkModal = function() {
    dialog.close();
  };

  // Close button trigger
  const closeBtn = dialog.querySelector(".dialog-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", window.closeWorkModal);
  }

  // Handle native "close" event (handles Esc key too)
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    // Clear the video iframe to stop playback instantly
    const videoWrapper = dialog.querySelector(".dialog-video-wrapper");
    if (videoWrapper) {
      videoWrapper.innerHTML = "";
    }
  });

  // Light dismiss: Close on clicking backdrop (outside the dialog bounds)
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY && 
      e.clientY <= rect.bottom &&
      rect.left <= e.clientX && 
      e.clientX <= rect.right
    );
    
    if (!isInDialog) {
      window.closeWorkModal();
    }
  });
});
