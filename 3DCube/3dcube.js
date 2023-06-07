let target = document.querySelector(".scene");

let isDrag = false;
let startX, startY;
let currentX = 0,
  currentY = 0;
let deltaX = 0,
  deltaY = 0;

const handleMouseDown = (event) => {
  isDrag = true;
  target.style.transition = `none`;

  startX = event.clientX;
  startY = event.clientY;
};
const handleMouseMove = (event) => {
  if (!isDrag) return;
  deltaX = event.clientX - startX;
  deltaY = event.clientY - startY;

  rotateCube();
};
const handleMouseUp = () => {
  isDrag = false;
  currentX += deltaX;
  currentY += deltaY;
  deltaX = 0;
  deltaY = 0;
  target.style.transition = `all 1s`;
};

const rotateCube = () => {
  target.style.transform = `rotate(${currentX + deltaX}deg) rotateX(${currentY + deltaY}deg)`;
};

if (!isDrag) {
  target.style.transition = `all 1s`;
  let deg = 0;
  let turnX = true;
  let interval = setInterval(() => {
    if (deg === 450) {
      turnX = !turnX;
      deg = 0;
    }
    if (turnX) {
      target.style.transform = `rotateX(${deg}deg)`;
    } else {
      target.style.transform = `rotateY(${deg}deg)`;
    }
    deg += 90;
  }, 1000);
}

target.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
