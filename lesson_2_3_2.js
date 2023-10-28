class Button {
  constructor(width = 10, height = 25,type = "button", color = "green") {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }

  onClick() {
    console.log(
      `Width: ${this.width}, Height: ${this.height}, Type: ${this.type}, Color: ${this.color}`
    );
  }
}

function testButton(button, width = 10, height = 25, type = "button", color = "green") {
  if (
    width === button.width &&
    height === button.height &&
    type === button.type &&
    color === button.color
  ) {
    console.log("The button props correspond to class props");
  } else {
    console.log("The button props do not correspond to class props");
  }
}

let defaultButton = new Button();

let nonDefaultButton = new Button(20, 45, "button", "red");

defaultButton.onClick();

nonDefaultButton.onClick();

console.log(testButton(defaultButton));

console.log(testButton(nonDefaultButton));
