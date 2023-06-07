




let first_block=$('.first_block'),
questions_block=$('.questions_block'),
 to_questions_block=$('#to_questions_block'),
 to_final_block=$('.to_final_block'),
 final_block=$('.final_block'),
 coll_data_work=$('.coll_data_work'),
coll_data_ready=$('.coll_data_ready'),
to_final_lend=$('#to_final_lend'),
line_mail_text=$('#line_mail_text');


to_questions_block.click(function() {
    first_block.css('display', 'none');
    questions_block.css('display', 'flex');
    $(document).ready(function(){
        $(".slider").bxSlider({
            controls:false,
            
            mode: 'fade',
            auto: true
           
        });
       
      });
  } );
  to_final_block.click(function() {
    questions_block.css('display', 'none');
    final_block.css('display', 'flex');
    line_mail_text.html(emailval)
    setTimeout(ready_anim, 12000);
    const clock = radialIndicator("#indicatorContainerWrap", {
        radius: 70,
        barColor: '#00AD9E',
        fontSize: 31,
        duration: 10000,
        barWidth: 16,
        minValue: 0,
        maxValue: 100,
        roundCorner: true,
        percentage: true,
        fontColor: '#ffff',
    
    });
    clock.animate(100);

  } );

    
      $('.btn_m').click(function() {
var modal = $(this).data('modal');
$('.fade').fadeIn(500);
$('#' + modal).addClass('active');
});

$('.close').click(function() {
$('.fade').fadeOut(500);
$('.modal').removeClass('active');
});

$(document).keydown(function(e) {
if (e.keyCode === 27) {
e.stopPropagation();
$('.fade').fadeOut(500);
$('.modal').removeClass('active');
}
});
  


let sub=$('#submit');
let emailval;
// подписываюсь на ввод эл-ов
$(document).ready(function(){
$("#email").on('input', function(){
enableSubmit(checkState());
});
});

// валидация
function checkState(){
let email = $('#email');
emailval=email.val();
return (email && email.val().length > 0 && isEmail(email.val()))
}

// проверка правильности e-mail
function isEmail(string) {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(string).toLowerCase());
}

// включить/выключить кнопку "Отправить"
function enableSubmit(state) {

sub.prop("disabled", !state);
}

function ready_anim() {
    coll_data_work.css('display','none');
    coll_data_ready.css('display','block');
    to_final_lend.css('display','flex');
    }
    
