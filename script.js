console.log("Website loaded successfully!");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "translateY(0)";
  });
});