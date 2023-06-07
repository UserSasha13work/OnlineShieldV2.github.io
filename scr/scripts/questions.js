let currentStep = 0;

;
(function() {
   let questionBox = document.getElementById('questions_box'),
        resultBox = document.getElementById('result-box'),
        progress1 = document.getElementById('progress'),
        counter = document.getElementById('counter'),
        progressBar = document.getElementById('progress'),
        steps = questionBox.getElementsByClassName('step'),
        check_box = document.getElementById('check_box'),
     
        emeil = document.getElementById('emeil'),
        progress;





    function questionCounter(el, quant, num) {
        el.innerHTML = '<span></span>' + num + '<span class="quantity"> / ' + quant + '</span>'
    }

    function questionProgress(el, quant, num) {
        if (!progress) progress = el.appendChild(document.createElement('span'));
        progress.style.right = 100 - (100 / quant * num) + '%';
    }

    for (let i = 0; i < steps.length; i++) {
        steps[i].addEventListener('click', function(e) {
            if (e.target.classList.contains('answer-btn') &&
                e.currentTarget.dataset.step !== currentStep) {

             

                currentStep = e.currentTarget.dataset.step * 1;
                questionProgress(progressBar, steps.length, currentStep);
                questionCounter(counter, steps.length, currentStep);
                e.currentTarget.style.display = 'none';

                if (steps[currentStep]) {
                    steps[currentStep].style.display = 'block';
                } else {
                    resultBox.style.display = 'block';
                   

                    // let timer = setTimeout(function() {
                        
                    //     window.location.href = "./land.html"
                        
                    // }, 5500);
                }
            }
        })
    }

    steps[currentStep].style.display = 'block';

    questionProgress(progressBar, steps.length, currentStep);
    questionCounter(counter, steps.length, currentStep);
})();




// $(function() {
//     $(".btn-submit").on("click", validate);

//     // Validate email
//     function validateEmail(email) {
//         var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//         return re.test(String(email).toLowerCase());
//     }

//     // send form
//     function sendForm(email) {
//         $.cookie('email', email, {
//             expires: 1
//         });

//         setTimeout(function() {
//             window.location.href = "./land.html"
//         }, 1000)
//     }

//     // validate email and send form after success validation
//     function validate() {
//         var email = $(".email").val();
//         var $error = $(".eerror");
//         $error.text("");

//         if (validateEmail(email)) {
//             $error.fadeOut();
//             sendForm(email);
//         } else {
//             $error.fadeIn();
//             $error.text('Input error. Enter type "yourname@email.com"');
//         }
//         return false;
//     }
// });