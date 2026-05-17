const buttons = document.querySelectorAll(".price-card button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Dies ist ein gemockter Kaufprozess für das Praxisbeispiel.");
  });
});