export const dropdown = (function () {
  const createDropdownListeners = () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(element => {
      element.addEventListener("mouseover", () => {
        element.children[1].classList.toggle("show");
      });
      element.addEventListener("mouseout", () => {
        element.children[1].classList.toggle("show");
      });
    });
  };

  return { createDropdownListeners};
})();