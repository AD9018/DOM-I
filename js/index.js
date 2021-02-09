const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  }

};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(document.querySelectorAll('.container'))

// NAV SETUP 

document.querySelectorAll('a')[0].textContent = siteContent.nav["nav-item-1"];
document.querySelectorAll('a')[1].textContent = siteContent.nav["nav-item-2"];
document.querySelectorAll('a')[2].textContent = siteContent.nav["nav-item-3"];
document.querySelectorAll('a')[3].textContent = siteContent.nav["nav-item-4"];
document.querySelectorAll('a')[4].textContent = siteContent.nav["nav-item-5"];
document.querySelectorAll('a')[5].textContent = siteContent.nav["nav-item-6"];

// SECTION CTA SETUP 

let sectionLogo = document.getElementById('cta-img');
sectionLogo.setAttribute('src', siteContent['cta']['img-src'])

let title = document.querySelector('h1');
title.innerHTML = siteContent.cta.h1.split(" ").join("<br>");

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

document.querySelectorAll('a').forEach(aColor => aColor.style.color = '#60b347')

let appensiated = document.createElement('a')
appensiated.textContent = 'FAQ'
appensiated.style.color = '#60b347'
document.querySelector('nav').appendChild(appensiated)

let prepentiated = document.createElement('a')
prepentiated.textContent = 'Spotify'
prepentiated.style.color = '#60b347'
document.querySelector('nav').prepend(prepentiated)

// SECTION MAIN CONTENT SETUP************************************************

let textContents = document.querySelectorAll('.text-content');

let firstTextContent = textContents[0].children;
firstTextContent[0].innerHTML = siteContent['main-content']['features-h4'];
firstTextContent[1].innerHTML = siteContent['main-content']['features-content'];

let secondTextContent = textContents[1].children;
secondTextContent[0].innerHTML = siteContent['main-content']['about-h4'];
secondTextContent[1].innerHTML = siteContent['main-content']['about-content'];
// IMAGE SETUP***************************************************************
let codeImg = document.getElementById('middle-img');
codeImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let thirdTextContext = textContents[2].children;
thirdTextContext[0].innerHTML = siteContent['main-content']['services-h4'];
thirdTextContext[1].innerHTML = siteContent['main-content']['services-content'];

let fourthTextContext = textContents[3].children;
fourthTextContext[0].innerHTML = siteContent['main-content']['product-h4'];
fourthTextContext[1].innerHTML = siteContent['main-content']['product-content'];

let fifthTextContext = textContents[4].children;
fifthTextContext[0].innerHTML = siteContent['main-content']['vision-h4'];
fifthTextContext[1].innerHTML = siteContent['main-content']['vision-content'];


// LAST SECTION SETUP

let lastSection = document.querySelectorAll('.contact');

let firstSectionContent = lastSection[0].children;
firstSectionContent[0].innerHTML = siteContent['contact']['contact-h4'];
firstSectionContent[1].innerHTML = siteContent['contact']['address'].split("t S").join("t<br>S");
firstSectionContent[2].innerHTML = siteContent['contact']['phone']
firstSectionContent[3].innerHTML = siteContent['contact']['email']


// FOOTER SETUP
let footer = document.querySelector('footer');
footer.children[0].innerHTML = siteContent.footer.copyright;