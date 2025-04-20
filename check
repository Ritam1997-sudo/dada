 // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('show');
        });
        
        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.remove('show');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.remove('show');
            });
        });
        
        // Scroll reveal animation
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        
        window.addEventListener('scroll', reveal);
        window.addEventListener('load', reveal);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
           // Load Gallery on Button Click
        const loadGalleryBtn = document.getElementById('load-gallery-btn');
        const gallery = document.getElementById('gallery');

        loadGalleryBtn.addEventListener('click', () => {
            // Show gallery
            gallery.classList.remove('hidden');

            // Load images
            const images = gallery.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src'); // Remove data-src to prevent re-loading
            });

            // Disable button to prevent multiple clicks
            loadGalleryBtn.disabled = true;
            loadGalleryBtn.textContent = 'Gallery Loaded';
            loadGalleryBtn.classList.remove('btn-primary');
            loadGalleryBtn.classList.add('bg-gray-400', 'cursor-not-allowed');

            // Trigger reveal animation
            gallery.classList.add('active');
        });


        // Error Handling for Gallery
        document.addEventListener('DOMContentLoaded', () => {
            if (!gallery) {
                console.error('Gallery container not found');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.style.display = 'block';
                errorDiv.textContent = 'Unable to load gallery. Please try again later.';
                document.querySelector('.section').appendChild(errorDiv);
            }
        });
