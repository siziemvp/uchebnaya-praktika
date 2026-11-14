console.log('jQuery подключена'); 
console.log('Версия:', $.fn.jquery);

//Задача 1.

$('#change-btn').click(function () {

    $('#message').text('Я изучаю jQuery!');
    $('#message').css('color', 'green');
$('#message').css('font-size', '24px');

});

// Задача 2.

$('#hide-btn').click(function () {
 $('#info-box').hide();

});

$('#show-btn').click(function () {
 $('#info-box').show();
});

 $('#toggle-btn').click(function () {
    $('#info-box').toggle();
});

// Задача 3.

$('#hello-btn').click(function () {

  const name = $('#name-input').val().trim();

  if (name === '') {
    $('#hello-result').text('Введите имя');
    $('#hello-result').css('color', 'red');
  } else if (name.length < 2) {
        $('#hello-result').text('Имя должно содержать минимум 2 символа');
        $('#hello-result').css('color', 'red');
  }  else {
    $('#hello-result').text('Привет, ' + name + '!');
    $('#hello-result').css('color', 'green');
  }
});

// Задача 4. AJAX

$('#load-btn').click(function () {

    $('#users').text('Загрузка...');

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',

        success: function (users) {

            $('#users').empty();

            $('<p>').text(users.length).appendTo('#users');

            for (const user of users) {

                const card = $('<div>').addClass('card');

                $('<h3>').text(user.name).appendTo(card);

                $('<p>').text(user.phone).appendTo(card);

                $('<p>').text(user.email).appendTo(card);

                $('<p>').text(user.address.city).appendTo(card);

                $('#users').append(card);

                $('.card').css('backgroundColor', 'lime');
            }

        },

        error: function () {
            $('#users').text('Ошибка загрузки');
        }

    });

});

// Самостоятельная часть

$('#hide-color').css('backgroundColor', 'lime');
$('#toggle-info').click(function () {
    $('#hide-info').toggle();
});
