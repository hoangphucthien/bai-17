$(document).ready(function() {
    $("#formDemo").validate({
            rules: {
            name: "required",
            field: {
              required: true,
              email: true
            },
            mess: {
                required: true,
                minlength: 3
            }
        },
            messages: {
            name: "Enter Your Name",
            mess: {
                required: "Write Your Messenger",
                minlength: "Message is short"
            }
        }
     });
     $(function () {
        $('button').click(function () {
            var click = $(this).find('.fa');
            $('.content-content').hide();
            $('button').find('.fa').removeClass('fa-minus').addClass('fa-plus');
            $('.text').css('color', 'black');
            $('.content-content').css('border-top' , 'hidden')
            $('.content-content').css('border-radius' , '6px')
            $('.tab').css('border-bottom' , 'hidden')

            if (click.hasClass('fa-plus')) {
                click.removeClass('fa-plus').addClass('fa-minus');
                $(this).parent().next().show();
            }
            else {
                click.removeClass('fa-minus').addClass('fa-plus');
                $(this).parent().next().hide();
                $(this).next().css('color', 'black');
            }
        })
    })
    $("#formDemo1").validate({
        rules: {
        name1: "required",
        field1: {
          required: true,
          email: true
        },
        subject: {
            required: true,
            number: true
        },
        mess1: {
            required: true,
            minlength: 2
        }
    },
        messages: {
        name1: "Enter Your Name",
        mess1: {
            required: "Write Your Messenger",
            minlength: "Message is Short"
        }
    }
 });
});

