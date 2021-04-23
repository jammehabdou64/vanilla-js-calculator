class Ui {
  select(element) {
    return document.querySelector(element);
  }

  buttonPress(event) {
    return event.target.textContent;
  }

  operationSymbol(event) {
    if (this.buttonPress(event) == "=") {
      let resultOutput = this.select(".result-output");

      let btnClick = this.select(".button-click-output");
      btnClick.innerHTML = btnClick.textContent.trim().replace("=", "");

      try {
        return (resultOutput.textContent = eval(
          btnClick.textContent.replace("x", "*")
        ));
      } catch (error) {
        return (btnClick.textContent = "Invalid operation");
      }
    }
    let t = this.select(".button-click-output");
  }

  output(event) {
    this.operationSymbol(event);
    return (this.select(".button-click-output").textContent += this.buttonPress(
      event
    ));
  }
}

const ui = new Ui();
