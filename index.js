$(document).ready(function() {
    
    'use strict';
    
    //panel
    $('#panel').click( function() {
        $('.popup').hide();
    });

    //show popup
    $('#side div').click( function() {
        $('.popup').hide();
        const popupId = $(this).attr('id') + '-popup';
        $('#' + popupId).show();
    });

    //---------- jokes ----------
    {
        const jokes = [
            {
                q: 'Why is 6 afraid of 7?',
                a: 'Because 7 8 9!'
            },
            {
                q: 'What is brown and sticky?',
                a: 'A stick.'
            },
            {
                q: 'What did the 0 say to the 8?',
                a: 'Nice belt!'
            }
        ];

        let jokeNumber = -1;
        
        function newJoke() {
            jokeNumber = (jokeNumber + 1) % jokes.length;
            $('#joke-question').text(jokes[jokeNumber].q);
            $('#joke-answer').text('');
        }
        $('#joke-new').click(newJoke);
        newJoke();

        function showAnswer() {
            $('#joke-answer').text(jokes[jokeNumber].a);
        }
        $('#joke-show-answer').click(showAnswer);

    }

    //---------- pictures ----------
    {
        let pictureNumber = -1;
        function nextPicture() {
            pictureNumber = (pictureNumber + 1) % 8;
            $('#picture')
                .css('background-image', 'url("images/pictures/p' + pictureNumber + '.JPG"')
        }
        $('#next-picture').click(nextPicture);
        $('#next-picture').click();
    }

    //---------- code ----------
    {
        window.removeCodeExample = function() {};
        let codeNumber = -1;        
        function nextCode() {
            codeNumber = (codeNumber + 1) % 6;
            $('#code-wrapper').html('');
            $.getScript('coding/c' + codeNumber + '.js');
        }
        $('#next-code').click(nextCode);
        $('#next-code').click();
    }

});