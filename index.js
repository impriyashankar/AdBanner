
let golfCar = document.querySelector(".main-banner-container .golf");
let passatCar = document.querySelector(".main-banner-container .passat");
let passatVCar = document.querySelector(".main-banner-container .passat-v");
let txtContent = document.querySelector(".main-banner-container .section-left");

// Defining animations for hover on each car and text section

let golfHoverOverlay = gsap.to(".main-banner-container .image-content .overlay-golf", {
  duration: 1,
  opacity: 1,
  paused: true,
  ease: 'power1.out'
});

let passatHoverOverlay = gsap.to(".main-banner-container .image-content .overlay-passat", {
  duration: 1,
  opacity: 1,
  paused: true,
  ease: 'power1.out'
});

let passatVHoverOverlay = gsap.to(".main-banner-container .image-content .overlay-passat-v", {
  duration: 1,
  opacity: 1,
  paused: true,
  ease: 'power1.out'
});

let textOverlay = gsap.to(".main-banner-container .section-left .overlay-section-left", {
  duration: 1,
  opacity: 1,
  paused: true,
  ease: 'power1.out'
});

// Animation auto-playing from banner load until hover

let carAnimation = gsap.timeline({ repeat: -1, repeatDelay: .5, yoyo: true });

function startCarAnimation() {

  carAnimation.to(".overlay-golf", { opacity: 1 });
  carAnimation.to(".overlay-passat", { opacity: 1 });
  carAnimation.to(".overlay-passat-v", { opacity: 1 });
}

function stopCarAnimation() {
  if (carAnimation) {
    carAnimation.pause();
  }
}

startCarAnimation();

// Triggering the animations

golfCar.addEventListener("mouseenter", () => {
  golfHoverOverlay.play();
  if (carAnimation) {
    carAnimation.pause();

  }
});

golfCar.addEventListener("mouseleave", () => {
  golfHoverOverlay.reverse();
  carAnimation.reverse();

});

passatCar.addEventListener("mouseenter", () => {
  passatHoverOverlay.play();
  if (carAnimation) {
    carAnimation.pause();

  }
});

passatCar.addEventListener("mouseleave", () => {
  passatHoverOverlay.reverse();
  carAnimation.reverse(); });

passatVCar.addEventListener("mouseenter", () => {
  passatVHoverOverlay.play();
  if (carAnimation) {
    carAnimation.pause();

  }
});

passatVCar.addEventListener("mouseleave", () => {
  passatVHoverOverlay.reverse();
  carAnimation.reverse(); });

txtContent.addEventListener("mouseenter", () => { textOverlay.play() });

txtContent.addEventListener("mouseleave", () => {
  textOverlay.reverse();
  startCarAnimation(); });


// Animation leading to modal display element by element - complete car collection


const modal = document.querySelector('#modal-3-car-display');
const modalBlankBanner = modal.querySelector('#modal-3-car-display .banner-content');
const carBg = modal.querySelector('#modal-3-car-display .image-content');
const header = modal.querySelector('#modal-3-car-display .header');
const subHeader = modal.querySelector('#modal-3-car-display .sub-header');
const cta = modal.querySelector('#modal-3-car-display .cta');
const logoFrame = modal.querySelector('#modal-3-car-display .logo-frame');
const highlighter = modal.querySelector('#modal-3-car-display .highlighter');
const closeBtn = modal.querySelector('#modal-3-car-display .close-btn');


// Playing animations sequentially
function playSequentialAnimations() {
  gsap.fromTo(
    modalBlankBanner,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
  gsap.fromTo(
    carBg,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .25 }
  );
  gsap.fromTo(
    [header, logoFrame],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .5 }
  );

  gsap.fromTo(
    [subHeader, cta, closeBtn],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .75 }
  );

  gsap.fromTo(
    highlighter,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 1 }
  );
}


function openModal() {
  modal.style.display = 'block';
  gsap.to(modal, { opacity: 1, duration: 0.3 });
}


const triggerAllCars = document.querySelector('.section-left');
triggerAllCars.addEventListener('click', () => {
  openModal();
  playSequentialAnimations();
});


function closeModal() {
  gsap.to(modal, {
    opacity: 0, duration: .5, ease: 'power1.inOut', onComplete: () => {
      modal.style.display = 'none'; // Hide the modal after animation
    }
  });
}

closeBtn.addEventListener('click', () => {
  closeModal(); /*Return to home display*/
});

// ****** Golf car selection - Animation leading to modal display element by element

const golfModal = document.querySelector('#modal-golf-car-display');
const golfModalBlankBanner = golfModal.querySelector('#modal-golf-car-display .banner-content');
const golfCarBg = golfModal.querySelector('#modal-golf-car-display .image-content');
const golfHeader = golfModal.querySelector('#modal-golf-car-display .header');
const golfSubHeader = golfModal.querySelector('#modal-golf-car-display .sub-header');
const golfCta = golfModal.querySelector('#modal-golf-car-display .cta');
const golfLogoFrame = golfModal.querySelector('#modal-golf-car-display .logo-frame');
const golfHighlighter = golfModal.querySelector('#modal-golf-car-display .highlighter');
const golfCloseBtn = golfModal.querySelector('#modal-golf-car-display .close-btn');

// Function to play animations sequentially
function playSequentialAnimationsGolf() {
  gsap.fromTo(
    golfModalBlankBanner,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
  gsap.fromTo(
    golfCarBg,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .25 }
  );
  gsap.fromTo(
    [golfHeader, golfLogoFrame],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .5 }
  );

  gsap.fromTo(
    [golfSubHeader, golfCta, golfCloseBtn],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .75 }
  );

  gsap.fromTo(
    golfHighlighter,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 1 }
  );
}

function openGolfModal() {
  golfModal.style.display = 'block';
  gsap.to(golfModal, { opacity: 1, duration: 0.3 });
}

const triggerGolf = document.querySelector('.golf');
triggerGolf.addEventListener('click', () => {
  openGolfModal();
  playSequentialAnimationsGolf();
});



function closeGolfModal() {
  gsap.to(golfModal, {
    opacity: 0, duration: .5, ease: 'power1.inOut', onComplete: () => {
      golfModal.style.display = 'none'; // Hide the modal after animation
    }
  });
}

golfCloseBtn.addEventListener('click', () => {
  closeGolfModal();

});

// **********

// Passat car selection - Animation leading to modal display element by element
const passatModal = document.querySelector('#modal-passat-car-display');
const passatModalBlankBanner = passatModal.querySelector('#modal-passat-car-display .banner-content');
const passatCarBg = passatModal.querySelector('#modal-passat-car-display .image-content');
const passatHeader = passatModal.querySelector('#modal-passat-car-display .header');
const passatSubHeader = passatModal.querySelector('#modal-passat-car-display .sub-header');
const passatCta = passatModal.querySelector('#modal-passat-car-display .cta');
const passatLogoFrame = passatModal.querySelector('#modal-passat-car-display .logo-frame');
const passatHighlighter = passatModal.querySelector('#modal-passat-car-display .highlighter');
const passatCloseBtn = passatModal.querySelector('#modal-passat-car-display .close-btn');


function playSequentialAnimationsPassat() {
  gsap.fromTo(
    passatModalBlankBanner,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
  gsap.fromTo(
    passatCarBg,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .25 }
  );
  gsap.fromTo(
    [passatHeader, passatLogoFrame],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .5 }
  );

  gsap.fromTo(
    [passatSubHeader, passatCta, passatCloseBtn],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .75 }
  );

  gsap.fromTo(
    passatHighlighter,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 1 }
  );
}


function openPassatModal() {
  passatModal.style.display = 'block';
  gsap.to(passatModal, { opacity: 1, duration: 0.3 });
}

const triggerPassat = document.querySelector('.passat');
triggerPassat.addEventListener('click', () => {
  openPassatModal();
  playSequentialAnimationsPassat();
});


function closePassatModal() {
  gsap.to(passatModal, {
    opacity: 0, duration: .5, ease: 'power1.inOut', onComplete: () => {
      passatModal.style.display = 'none';
    }
  });
}

passatCloseBtn.addEventListener('click', () => {
  closePassatModal();
});

// Passat V selection - Animation leading to modal display element by element

const passatVModal = document.querySelector('#modal-passat-v-car-display');
const passatVModalBlankBanner = passatVModal.querySelector('.banner-content');
const passatVCarBg = passatVModal.querySelector('.image-content');
const passatVHeader = passatVModal.querySelector('.header');
const passatVSubHeader = passatVModal.querySelector('.sub-header');
const passatVCta = passatVModal.querySelector(' .cta');
const passatVLogoFrame = passatVModal.querySelector('.logo-frame');
const passatVHighlighter = passatVModal.querySelector('.highlighter');
const passatVCloseBtn = passatVModal.querySelector('.close-btn');


function playSequentialAnimationsPassatV() {
  gsap.fromTo(
    passatVModalBlankBanner,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
  gsap.fromTo(
    passatVCarBg,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .25 }
  );
  gsap.fromTo(
    [passatVHeader, passatVLogoFrame],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .5 }
  );

  gsap.fromTo(
    [passatVSubHeader, passatVCta, passatVCloseBtn],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: .75 }
  );

  gsap.fromTo(
    passatVHighlighter,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, delay: 1 }
  );
}

function openPassatVModal() {
  passatVModal.style.display = 'block';
  gsap.to(passatVModal, { opacity: 1, duration: 0.3 });
}

const triggerPassatV = document.querySelector('.passat-v');
triggerPassatV.addEventListener('click', () => {
  openPassatVModal();
  playSequentialAnimationsPassatV();
});

function closePassatVModal() {
  gsap.to(passatVModal, {
    opacity: 0, duration: .5, ease: 'power1.inOut', onComplete: () => {
      passatVModal.style.display = 'none';
    }
  });
}

passatVCloseBtn.addEventListener('click', () => {
  closePassatVModal();
});
