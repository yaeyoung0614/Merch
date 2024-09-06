function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  document.addEventListener("click", function (event) {
    var isClickInside =
      popup.contains(event.target) ||
      document.getElementById("clientspecific").contains(event.target);

    if (!isClickInside) {
      popup.style.display = "none";
    }
  });
}
