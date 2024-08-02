
  function onClickMenuItem(event) {
        checkbox.checked = false;
        }
        document.querySelectorAll(".mobile-menu__item > a").forEach((el) => el.addEventListener("click", onClickMenuItem));
