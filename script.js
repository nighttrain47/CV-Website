document.addEventListener("DOMContentLoaded", function () {
    // Welcome message
    setTimeout(function() {
        const greeting = "Welcome to Kiều Thiện Bảo's CV website!";
        const notification = document.createElement("div");
        notification.textContent = greeting;
        notification.style.position = "fixed";
        notification.style.top = "20px";
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.backgroundColor = "#4e7bbd";
        notification.style.color = "white";
        notification.style.padding = "10px 20px";
        notification.style.borderRadius = "30px";
        notification.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
        notification.style.zIndex = "1000";
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.5s ease";
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = "1";
        }, 100);
        
        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }, 500);
    
    // Add smooth scrolling for section navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e0edff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f0f7ff';
        });
    });
});