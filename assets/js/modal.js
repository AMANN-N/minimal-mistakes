// Modal functionality for archive cards
document.addEventListener('DOMContentLoaded', function () {
    // Open modal when a card is clicked
    document.querySelectorAll('.archive__card[data-modal]').forEach(function (card) {
        card.addEventListener('click', function () {
            var modalId = card.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) modal.classList.add('is-open');
        });
    });

    // Close modal when clicking the close button or outside the content
    document.querySelectorAll('.archive-modal').forEach(function (modal) {
        var closeBtn = modal.querySelector('.archive-modal__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                modal.classList.remove('is-open');
            });
        }
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.classList.remove('is-open');
        });
    });
});
