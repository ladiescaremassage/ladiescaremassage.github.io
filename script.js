
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Mobile navigation
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
      toggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        toggle.textContent = "☰";
      });
    });
  }

  // Automatically update copyright year
  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // Contact form opens WhatsApp with a prepared message
  const form = document.getElementById("whatsapp-form");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const interest = document.getElementById("interest").value;
      const message = document.getElementById("message").value.trim();

      const text = [
        "Hello Ladies Care Massage!",
        "",
        "My name is " + name + ".",
        "I'm enquiring about: " + interest + ".",
        "Message: " + message,
        "",
        "Please share availability and confirm the details."
      ].join("\n");

      const whatsappURL =
        "https://wa.me/923061086161?text=" +
        encodeURIComponent(text);

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }
});
