$(document).ready(function() {
    $('#typeQuestion').change(function() {

        if($(this).val() === "Множественный выбор")
        {
            new_type='checkbox';
        }
        else
        {
            new_type="radio";
        }
            $('input[name="questionBlock"]').each(function(index){
                var new_input = $(this).clone();
                new_input.attr("type", new_type);
                new_input.insertBefore($(this));
                $(this).remove();
            });
        }
    )

 $('.clear').on('click', function () {
    $('#question').val("")

 });

    $(document).on('submit', '#form', function(event) {
        event.preventDefault();
     });


    $('.AddNewAnswer').click(function(event) {

        addDynamicExtraField();
        return false;
    });
    function addDynamicExtraField() {

        var div = $('<div/>',{
            'class' : 'divAnswer'
        }).appendTo($('.Answer'));

        var label = $('<label>', {

            'class': 'labelAnswer'
        }).appendTo(div);

        var inputText = $('<input/>', {
            type: 'text',
            name : 'question',
            'class' : 'inputTextQuestion addArray',

        }).appendTo(div);

        var inputRadio = $('<input/>', {
            type: 'radio',
            name : 'questionBlock',
        }).appendTo(div);

        var inputDel = $('<input/>', {
            type: 'submit',
            value: 'X',
            'class' : 'deleteAnswer'
        }).appendTo(div);

        inputDel.click(function() {
            $(this).parent().remove();
            enumerate();
            });

        enumerate();
    }

    $('.deleteAnswer').click(function(event) {
        $(this).parent().remove();
        enumerate();
        return false;
    });

    function enumerate() {
        $('.labelAnswer').each(function( index, element ) {

            $(this).html((index + 1) + ')');
        });
    }

    $('.submit').on('click', function () {
        var options = [];
        $('.addArray').each(function(){
            options.push($(this).val());
        });
        console.log(options)
    })

});


