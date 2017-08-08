document.addEventListener("DOMContentLoaded", function() {

    const submitBtn = document.querySelector('button.submit'),
        input = document.querySelector('input'),
        form = document.querySelector('form');

    submitBtn.addEventListener('click', (e) => {
        console.log(input.value);

        if (input.value !== "haslo") {
            e.preventDefault()
            form.classList.toggle('error');
            errorMsg = document.createElement('p');

            errorMsg.innerHTML = '<b>Please provide a correct password</b>';
            form.insertBefore(errorMsg, form.firstChild);
        }
    });

    //form validation

});
