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
  mainContent.classList.remove('hide');
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

  // const slideURL = document.getElementById('slideshowURL');
  // slideURL.content = `4;url=${rand}`;
  
  const mainContent = document.getElementsByTagName('main')[0];
  console.log(mainContent);

  const placeholder = document.getElementById('slideshowPlaceholder');
  const ifrm = document.createElement("iframe");
  ifrm.setAttribute("id", "slideshowPlaceholder");
  ifrm.setAttribute("title", `Slideshow Order Style`);
  // ifrm.setAttribute("width", `${window.innerWidth}`);
  // ifrm.setAttribute("height", `${window.innerHeight}`);
  ifrm.setAttribute("width", `${window.innerWidth - 7}px`);
  ifrm.setAttribute("height", `${window.innerHeight - 7}px`);

  ifrm.setAttribute("src", `${rand}`);
  if(placeholder) { // already exists
    placeholder.remove();
  }
  mainContent.classList.add('hide');
  document.body.appendChild(ifrm);

}

// startSlideshow();



function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
    
}

getScrollbarWidth();