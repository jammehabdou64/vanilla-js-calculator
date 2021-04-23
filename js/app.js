addEventListener("click", (e) => {
  if (ui.select(".button-click-output").textContent == "Invalid operation") {
    ui.select(".button-click-output").textContent = "";
    ui.select(".result-output").textContent = 0;
  }

  if (event.target.nodeName == "BUTTON") {
    ui.output(e);

    if (ui.buttonPress(e) == "=") {
      ui.select(".button-click-output").textContent = ui
        .select(".button-click-output")
        .textContent.trim()
        .replace("=", "");
    }

    if (ui.buttonPress(e) == "C") {
      ui.select(".button-click-output").textContent = "";
    }

    if (ui.buttonPress(e) == "CE") {
      ui.select(".button-click-output").textContent = "";
      ui.select(".result-output").textContent = 0;
    }

    return;
  }
  return;
});
