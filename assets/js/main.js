const pricingButtons = document.querySelectorAll(".price-card button");

pricingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Dies ist ein gemockter Kaufprozess für das Praxisbeispiel.");
  });
});

const contactButton = document.querySelector(".contact-form button");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    alert("Das Kontaktformular ist nur gemockt und sendet keine Daten.");
  });
}