
      // Import necessary libraries
      import { gsap } from 'gsap';
      import { ScrollTrigger } from 'gsap/ScrollTrigger';

      // Initialize GSAP
      gsap.registerPlugin(ScrollTrigger);

      // Load event listener
      window.addEventListener('load', () => {
         // Animation timeline
         const timeline = gsap.timeline();

         // Logo animation
         timeline.from('.logo', {
            duration: 1,
            opacity: 0,
            y: -50,
            ease: 'power2.inOut'
         });

         // Navigation animation
         timeline.from('.nav', {
            duration: 1,
            opacity: 0,
            y: -50,
            ease: 'power2.inOut',
            stagger: 0.2
         }, '-=0.5');

         // Menu animation
         timeline.from('.menu', {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: 'power2.inOut',
            stagger: 0.2
         }, '-=0.5');

         // Menu items
         const menuItems = [
            { name: 'طاعميه', price: '5﷼' },
            { name: 'فول', price: '2﷼' }
         ];

         // Create menu items dynamically
         const createMenuItems = () => {
            menuItems.forEach((item) => {
               const menuItem = document.createElement('div');
               menuItem.classList.add('menu-item');
               menuItem.innerHTML = `
                  <h2>${item.name}</h2>
                  <p>${item.price}</p>
               `;

               document.querySelector('.menu').appendChild(menuItem);
            });
         };

         createMenuItems();

         // Scroll trigger for menu items
         const scrollTrigger = () => {
            ScrollTrigger.create({
               trigger: '.menu',
               start: 'top center',
               end: 'bottom center',
               toggleClass: 'active',
               markers: false
            });
         };

         scrollTrigger();

         // Responsive logic
         const handleResize = () => {
            if (window.innerWidth < 768) {
               // Mobile layout
               document.querySelector('.nav').style.flexDirection = 'column';
               document.querySelector('.menu').style.flexDirection = 'column';
            } else {
               // Desktop layout
               document.querySelector('.nav').style.flexDirection = 'row';
               document.querySelector('.menu').style.flexDirection = 'row';
            }
         };

         window.addEventListener('resize', handleResize);
         handleResize();
      });
   