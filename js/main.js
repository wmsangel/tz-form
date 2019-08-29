// Отключаем все поля
function disabledFields() {
    $('form.editable input').each(function(){
        $(this).addClass('disabled');
        $(this).attr('disabled','disabled');
    });

    $('.edit-form').removeClass('hide');
    $('.save-form').addClass('hide');
}

// Проверка телефона
function phoneCheck() {
    var phone = $('.phone-field').val();
    phone = phone.replace(/[^0-9]/g,'');

    if (phone.length != 12) {
        $('.save-form').addClass('disabled');
        $('.phone-field').addClass('error');
        $('.field-error').removeClass('hide');
    } else {
        $('.save-form').removeClass('disabled');
        $('.phone-field').removeClass('error');
        $('.field-error').addClass('hide');
    }
}

// Включаем все поля
function enabledFields() {
    $('form.editable input').each(function(){
        $(this).removeClass('disabled');
        $(this).removeAttr('disabled');
    });

    $('.edit-form').addClass('hide');
    $('.save-form').removeClass('hide');

    phoneCheck()

}

// Работаем при загрузке
$(document).ready(function(){

    if ($('form').hasClass('editable')) {
        disabledFields();

        $('.edit-form').on('click', function(){
            enabledFields();
        });

        $('.save-form').on('click', function(){
            if (!$(this).hasClass('disabled')) {
                disabledFields();
            }
        });

        $('.phone-field').on("keyup", function() {
            phoneCheck();
        });
    }

});