
        // Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Projects section functions
        function showProjects() {
            document.getElementById('projectsSection').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeProjects() {
            document.getElementById('projectsSection').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function showAddProjectInfo() {
            alert('To add a new project:\n\n1. Replace the placeholder image URL\n2. Update the project title\n3. Write your project description\n4. Add your technology tags\n5. Update the demo and GitHub links\n\nYou can duplicate the project-card div and customize it with your project details!');
        }

        // Email notification
        function showEmailNotification() {
            const notification = document.getElementById('emailNotification');
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }

        // Smooth scroll to contact
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Initialize particles on load
        window.addEventListener('load', createParticles);

        // Add navigation functionality
        document.querySelectorAll('.nav-btn').forEach((btn, index) => {
            btn.addEventListener('click', function() {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);

                // Handle navigation
                if (index === 1) { // Projects button (index 1)
                    showProjects();
                }
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);