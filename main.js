const steps = [{
  selector: "#kw",
  value: "世界上最高的山峰是什么",
  type: "input"
}, {
  selector: "#su",
  type: "button"
}];

function run(steps) {
  steps.forEach(({ type, selector, value }) => {
    switch (type) {
      case "input":
        document.querySelector(selector).value = value;
        break;
      case "button":
        document.querySelector(selector).click();
        break;
      default:
        console.log("default");
    }
  });
}

run(steps);
