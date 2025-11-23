// Project Tag Filtering
(function () {
    'use strict';

    function initProjectFilters() {
        const filterButtons = document.querySelectorAll('.tag-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (filterButtons.length === 0 || projectCards.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const selectedTag = this.getAttribute('data-tag');

                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter projects with smooth animation
                projectCards.forEach(card => {
                    const projectTags = card.getAttribute('data-tags');

                    if (!projectTags) {
                        card.classList.add('hidden');
                        return;
                    }

                    const tagsArray = projectTags.toLowerCase().split(',').map(t => t.trim());

                    if (selectedTag === 'all' || tagsArray.includes(selectedTag.toLowerCase())) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectFilters);
    } else {
        initProjectFilters();
    }
})();