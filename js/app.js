document.addEventListener("DOMContentLoaded", function() {


    const submitBtn = document.querySelector('button.submit'),
        input = document.getElementsByTagName('input')[0];

        console.log(submitBtn);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(input.value);
    });

});
