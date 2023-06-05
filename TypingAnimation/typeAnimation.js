const target = document.querySelector("#dynamic");

// 자료제공
const randomTyping = () => {
  const stringArr = ["JS뿌셔버리기", "JS투레그태클 걸기", "JS암바걸기"];
  let randomIndex = Math.floor(Math.random() * stringArr.length);
  let selectString = stringArr[randomIndex];
  let selectArr = selectString.split("");

  return selectArr;
};

// target 텍스트 리셋
const resetTyping = () => {
  target.textContent = "";
  dynamic(randomTyping());
};

// 커서 블링크 효과
const blink = () => {
  target.classList.toggle("active");
};
setInterval(blink, 500);

// 타이핑 효과
const dynamic = (randomString) => {
  if (randomString.length > 0) {
    target.textContent += randomString.shift();
    setTimeout(() => {
      dynamic(randomString);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
};

setInterval(dynamic(randomTyping()), 500);
