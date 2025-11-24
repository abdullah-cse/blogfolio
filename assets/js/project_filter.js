// Project Tag Filtering with Smooth Animations
(function () {
    'use strict';

    // Normalize tag for comparison (matches Hugo's urlize behavior)
    function normalizeTag(tag) {
        return tag.toLowerCase()
            .trim()
            .replace(/\s+/g, '-')  // Replace spaces with hyphens
            .replace(/[^\w-]/g, ''); // Remove special characters except hyphens
    }

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

                // Filter projects with animation
                projectCards.forEach(card => {
                    const projectTags = card.getAttribute('data-tags');

                    if (!projectTags) {
                        hideCard(card);
                        return;
                    }

                    // Split tags and normalize each one
                    const tagsArray = projectTags.split(',').map(t => normalizeTag(t));
                    const normalizedSelectedTag = normalizeTag(selectedTag);

                    if (selectedTag === 'all' || tagsArray.includes(normalizedSelectedTag)) {
                        showCard(card);
                    } else {
                        hideCard(card);
                    }
                });
            });
        });
    }

    // Animated show with proper fade-in
    function showCard(card) {
        // If already visible, do nothing
        if (!card.classList.contains('hidden') && !card.classList.contains('hiding')) {
            return;
        }

        // Remove hidden class to make it display: flex
        card.classList.remove('hidden');

        // Start with hiding state (opacity 0, scaled down)
        card.classList.add('hiding');

        // Force browser reflow to apply the hiding state first
        void card.offsetWidth;

        // Remove hiding class to trigger fade-in animation
        requestAnimationFrame(() => {
            card.classList.remove('hiding');
        });
    }

    // Animated hide
    function hideCard(card) {
        // If already hidden or hiding, do nothing
        if (card.classList.contains('hidden') || card.classList.contains('hiding')) {
            return;
        }

        // Add hiding class to trigger fade out
        card.classList.add('hiding');

        // After animation completes (500ms), add hidden class
        setTimeout(() => {
            if (card.classList.contains('hiding')) {
                card.classList.add('hidden');
            }
        }, 500); // Match CSS transition duration
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectFilters);
    } else {
        initProjectFilters();
    }
})();