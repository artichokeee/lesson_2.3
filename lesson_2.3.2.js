class Button {
  constructor(width, height, type, color) {
    this.width = 10;
    this.height = 25;
    this.type = "button";
    this.color = "green";
  }

  onClick() {
    console.log(
      `Width: ${this.width}, Height: ${this.height}, Type: ${this.type}, Color: ${this.color}`
    );
  }

  testButton() {
    if (
      this.width === 10 &&
      this.height === 25 &&
      this.type === "button" &&
      this.color === "green"
    ) {
      console.log("The button props correspond to class props");
    } else {
      console.log("The button props do not correspond to class props");
    }
  }
}

let newButton = new Button();

console.log(newButton.onClick());

console.log(newButton.testButton());
