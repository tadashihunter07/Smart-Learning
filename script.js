document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 1. Reset Nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // 2. Switch Tabs
            tabPanes.forEach(pane => pane.classList.add('hidden'));
            
            // Link index to Tab ID
            const tabIds = ['home-tab', 'schedule-tab', 'events-tab', 'profile-tab'];
            document.getElementById(tabIds[index]).classList.remove('hidden');

            // 3. Scroll top
            document.querySelector('.app-container').scrollTop = 0;
        });
    });
});