$(document).ready(function (event) {
    $('.day-task').addClass('clicked');
    
    $('.input-field-task').on('input', function () {
        if (this.value === '') {
            $('.label-input').css('visibility', 'visible');
        } else {
            $('.label-input').css('visibility', 'hidden');
        }
    });

    $('.work-task-box').hide();
    $('.day-task').on('click', function (e) {
        $('.work-task').removeClass('clicked');
        $('.day-task').addClass('clicked');
        $('.day-task-box').show();
        $('.work-task-box').hide();
    });

    $('.work-task').on('click', function (e) {
        $('.day-task').removeClass('clicked');
        $('.work-task').addClass('clicked');
        $('.work-task-box').show();
        $('.day-task-box').hide();
    });


    // var lengthList = $('.list-new-task li').length;
    // for (var i = 0 ; i < lengthList; i++) {
    //     var className = 'item'+i;
       
    // }

    $("input[type='checkbox']").click(function(e){
        var span = $($(`span[class='${this.value}']`));
        if (this.checked) {
            span.css('text-decoration','line-through');
        }else {
            span.css('text-decoration','none');
        }
    });
});
