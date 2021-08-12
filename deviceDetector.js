var md = new MobileDetect(navigator.userAgent);


const webEngine = document.querySelector('.Webengine span');
const Manufacturer = document.querySelector('.manufacturer span');
const osName = document.querySelector('.os span');


 
const mobileDetect = window.matchMedia('(max-width: 768px)');
const desktopDetect = window.matchMedia('(min-width: 1024px)');

if(mobileDetect.matches){
       //tracker for mobile using mobile-detect.js
       webEngine.textContent = ` ${md.userAgent()}`;
       Manufacturer.textContent = `  ${md.phone()}`;
       osName.textContent = `  ${md.os()}`;
       
}

if(desktopDetect.matches){
     //tracker for desktop
      webEngine.textContent = ` ${platform.name}`;
      Manufacturer.textContent = ` ${platform.version}`;
      osName.textContent = ` ${platform.description}`
    
}
    
   ;



  // Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
// if (mediaQuery.matches) {
  // Then trigger an alert
//   alert('Media Query Matched!')
// }



//tracker for desktop using platform.js
console.log(platform.description)



// console.log(md.userAgent(), md.os(), md.tablet(), md.phone())