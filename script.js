let iID;
// if(iID){stopSlideshow()}

async function startSlideshow() {
  console.log('starting slideshow');
  clearInterval(iID);
  iID = setInterval(() => {handleSlideshow()}, 10000);
}

function stopSlideshow() {
  console.log('cancelling slideshow');
  const slideURL = document.getElementById('slideshowURL');
  if(slideURL) {
    slideURL.remove();
  }
  clearInterval(iID);
}

const startButt = document.getElementById('start');
const stopButt = document.getElementById('stop');
startButt.addEventListener('click', startSlideshow);
stopButt.addEventListener('click', stopSlideshow);


function handleSlideshow() {
  console.log('handling slideshow');
  const urls = [
    `${window.location.origin}/index.html`,
    `${window.location.origin}/page1.html`,
    `${window.location.origin}/page2.html`,
    `${window.location.origin}/page3.html`,
    `${window.location.origin}/page4.html`,
    `${window.location.origin}/page5.html`
  ];
  const rand = urls[Math.floor(Math.random()*urls.length)];
  console.log('rand',rand);

  const slideURL = document.getElementById('slideshowURL');
  slideURL.content = `4;url=${rand}`;

}

// startSlideshow();