<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Зачет</title>
</head>
<body>
    <h2>Задание 1. О разработчике.</h2>
<?php
    $studentName = 'Алексеев Максим';
    $group = 'ИС-1-25';
    $course = '2 курс';
    $city = 'Чебоксары';

    $list = "
    <ul>
     <li>Студент: $studentName</li>
     <li>Группа: $group</li>
     <li>Курс: $course</li>
     <li>Город: $city</li>
    </ul>";

    echo(
        $list
    );
?>
<h2>Задание 2. Карточка товара.</h2>
<h3>Товар: Коврик для стола.</h3>
<?php
$tovarname = 'Коврик для мыши';
$price = 3000;
$kolvo = 100;
$bezskidki = $kolvo*$price;
$skidka = 10;
$tovarskidka = 0.9*($kolvo*$price);

echo "Название товара: " . $tovarname . "<br>";
    echo "Цена товара: " . $price . "<br>";
    echo "Количество товаров: " . $kolvo . "<br>";
    echo "Общая стоимость товаров: " . $kolvo*$price . "<br>";
    echo "Стоимость товаров со скидкой 10%: " . ($kolvo*$price)*0.9 . "<br>";
    ?>

<h3>Товар: Очки</h3>
<?php
$tovarname = 'Очки Кирилла';
$price = 25000;
$kolvo = 1;
$bezskidki = $kolvo*$price;
$skidka = 10;
$tovarskidka = 0.9*($kolvo*$price);

echo "Название товара: " . $tovarname . "<br>";
    echo "Цена товара: " . $price . "<br>";
    echo "Количество товаров: " . $kolvo . "<br>";
    echo "Общая стоимость товаров: " . $kolvo*$price . "<br>";
    echo "Стоимость товаров со скидкой 10%: " . ($kolvo*$price)*0.9 . "<br>";
    ?>
    <h3>Товар: Клавиатура</h3>
<?php
$tovarname = 'Клавиатура Колледжская';
$price = 500;
$kolvo = 80;
$bezskidki = $kolvo*$price;
$skidka = 10;
$tovarskidka = 0.9*($kolvo*$price);

echo "Название товара: " . $tovarname . "<br>";
    echo "Цена товара: " . $price . "<br>";
    echo "Количество товаров: " . $kolvo . "<br>";
    echo "Общая стоимость товаров: " . $kolvo*$price . "<br>";
    echo "Стоимость товаров со скидкой 10%: " . ($kolvo*$price)*0.9 . "<br>";
    ?>
<h2>Задание 3. Типы данных</h2>
<?php
var_dump($tovarname);
echo '<br>';
var_dump($price);
echo '<br>';
var_dump($kolvo);
echo '<br>';
var_dump($skidka);
echo '<br>';
$inStock = true;
$rating = 4.9;

var_dump($inStock);
echo '<br>';
var_dump($rating);
echo '<br>'

?>
</body>
</html>