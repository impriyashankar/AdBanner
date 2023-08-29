# AdBanner
#Thought process: 

As the target audience is the business market, I attempted to include subtle animations and interactions. The user is invited to unveil a better look of the car models through continuous colour overlays on the cars. A close button on the new display helps close the modal and return to home display.

CTA and the benefits of leasing remain visible to the user at all stages of banner interaction. 

All colours used have been taken from the provided asset files.

#Design and Layout:
Banner and modals were designed from scratch on Figma using the fonts and assets provided. Sizing, spacing and layouts of the banner were developed based on the design.

Volkswagen website and general automotive ads were scanned for reference.


#Features:

Designed for 970x250 billboard ad.
Page is responsive. Units like % and vw are predominantly used to achieve responsiveness.
CTA leads to Volkswagen website.

#Animations and interactions:

Developed using GSAP.

On load: The individual car blocks experience overlay opacity transitions one by one continuously.

Hover on car: The auto-transition stops temporarily and the hovered block(div) is highlighted.

Hover on text content on the left side of the banner: The block gets a color overlay.

Click on car: The right side content of the banner is replaced with a bigger picture of the selected car along with highlighting the tax benefit.

Click on text content on the left side of the banner: The right side content of the banner is replaced with the entire collection of cars.




