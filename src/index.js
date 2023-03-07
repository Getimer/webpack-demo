import x from "./x.js";
import png from "./assets/111.png";

const div1 = document.getElementById("div1");
div1.innerHTML = `<img src="${png}"/>`;

const button = document.createElement("button");
button.innerText = "点击懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
div1.appendChild(button);
