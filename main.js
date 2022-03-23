const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 100;
const currentFrame = index => (
  `animation/${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    console.log(img.src);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=585;
canvas.height=1266;
img.onload=function(){
  context.drawImage(img, 0, 0);
}


const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  var productElement = document.getElementById("button24");
  var productElement2 = document.getElementById("button25");
  console.log(scrollFraction);
  productElement.style.bottom = (-90 + (scrollFraction*100)).toString(10)+"%";
  productElement2.style.bottom = (-120 + (scrollFraction*160)).toString(10)+"%";
  console.log((-40 + (scrollFraction*50)).toString(10)+"%");

  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()