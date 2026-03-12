
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sections = document.querySelectorAll('#dashboardSections section');
    const navLinks = document.querySelectorAll('.sidebar-link[data-section]');

    // Sidebar Toggle for Mobile
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // Basic Page Switching Logic (Simulated)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const sectionId = link.getAttribute('data-section');
            if (!sectionId) return;

            e.preventDefault();

            // Update Active Link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // In a real app, you'd show/hide sections here.
            console.log(`Navigating to ${sectionId}`);
            
            // Close sidebar on mobile after click
            if (window.innerWidth < 992) {
                sidebar.classList.remove('show');
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 992 && 
            sidebar.classList.contains('show') && 
            !sidebar.contains(e.target) && 
            e.target !== sidebarToggle && 
            !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('show');
        }
    });
});
