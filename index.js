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
            },
             
            {
                q: 'I challenged 1 to a fight. He brought with him 3, 5, 7 and 9.', 
                a: 'That\'s when I knew the odds were against me.'
            },
        
            {
                q:'Knock knock. Who\'s there?<br><br>Boo.<br><br>Boo who?',
                a: 'No need to cry.'
            },
            
            {
                q: 'Why did Tigger look in the tiolet?',
                a: 'Because he was looking for Pooh.'
            },
        
            {
                q: 'What do you call a magician who has lost his magic?',
                a: 'Ian.'
            }    
       
        ];

        let jokeNumber = -1;
        
        function newJoke() {
            jokeNumber = (jokeNumber + 1) % jokes.length;
            $('#joke-question').html(jokes[jokeNumber].q);
            $('#joke-answer').html('');
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
        let codeNumber = 0;        
        
        function runCodeExample() {
            $('#code-wrapper').html('');
            $.getScript('coding/c' + codeNumber + '.js');
        }

        $('#rerun-code').click(runCodeExample);

        $('#next-code').click(function() {
            codeNumber = (codeNumber + 1) % 6;
            runCodeExample();
        });

        runCodeExample();
    }

});