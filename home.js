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
          // Lazy Loading Polyfill for Older Browsers
        document.addEventListener('DOMContentLoaded', () => {
            if ('loading' in HTMLImageElement.prototype) {
                // Native lazy loading is supported
                const lazyImages = document.querySelectorAll('img.lazy-load');
                lazyImages.forEach(img => {
                    img.src = img.dataset.src;
                });
            } else {
                // Fallback using IntersectionObserver
                const lazyImages = document.querySelectorAll('img.lazy-load');
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy-load');
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '0px 0px 100px 0px' // Load images 100px before they enter viewport
                });

                lazyImages.forEach(img => observer.observe(img));
            }
        });


        // Check if gallery is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const gallery = document.getElementById('gallery');
            if (!gallery || gallery.children.length === 0) {
                console.error('Gallery failed to load or is empty');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.style.display = 'block';
                errorDiv.textContent = 'Unable to load gallery. Please check your connection or try again later.';
                gallery.parentElement.appendChild(errorDiv);
            }
        });
        });
