/**
 * Contact Form & Copy Email Handlers
 */
function initContactForm() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = window.siteConfig ? window.siteConfig.personal.email : "muhammad.ibrahim.dev@example.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(
          () => {
            if (window.showToast) window.showToast("Email address copied to clipboard!", "success");
          },
          () => {
            fallbackCopy(email);
          }
        );
      } else {
        fallbackCopy(email);
      }
    });
  }

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (!data.name || !data.email || !data.message) {
        if (window.showToast) window.showToast("Please fill in all required fields.", "error");
        return;
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        if (window.showToast) window.showToast("Message received! Thank you for reaching out.", "success");
      }, 900);
    });
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    if (window.showToast) window.showToast("Email address copied to clipboard!", "success");
  } catch (err) {
    if (window.showToast) window.showToast("Unable to copy email", "error");
  }
  document.body.removeChild(textArea);
}

if (typeof window !== "undefined") {
  window.initContactForm = initContactForm;
}
