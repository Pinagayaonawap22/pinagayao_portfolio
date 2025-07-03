
        function showNotification() {
            // Copy email to clipboard
            navigator.clipboard.writeText('pinagayaonawap22@gmail.com').then(() => {
                const notification = document.getElementById('notification');
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            }).catch(() => {
                // Fallback if clipboard API fails
                const notification = document.getElementById('notification');
                notification.textContent = '📧 Email: pinagayaonawap22@gmail.com';
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 5000);
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(12, 16, 37, 0.98)';
            } else {
                header.style.background = 'rgba(12, 16, 37, 0.95)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });

        function showProject(tabId) {
        const tabs = document.querySelectorAll('.project-tab');
        tabs.forEach(tab => tab.style.display = 'none');

        const selected = document.getElementById(tabId);
        if (selected) selected.style.display = 'block';
        }

