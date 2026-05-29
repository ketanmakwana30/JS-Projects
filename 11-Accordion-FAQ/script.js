const questions = document.querySelectorAll('.faq-question');

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        
        let item = question.parentElement;
        let isOpen = item.classList.contains("active");
        let allItem = document.querySelectorAll(".faq-item");

        allItem.forEach(function (el) {
            el.classList.remove('active');

        })

        if (isOpen === false) {
            item.classList.add('active');
        }
        
    });
});