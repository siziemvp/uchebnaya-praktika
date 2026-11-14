<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Основы PHP</title>
</head>
<body>
    <h1>Моя первая программа PHP</h1>

    <?php
    echo "Я изучаю PHP!";
    ?>

    <h2>Задача 2. Переменные</h2>

    <?php

    $name = " Максим";
    $group = "ИС-1-25";
    $age = 17;
    $city = "Чебоксары";
    $course = 1;

    echo "Имя:" . $name . "<br>";
    echo "Группа: ". $group . "<br>";
    echo "Возраст:" . $age . "<br>";
    echo "Город:" . $city . "<br>";
    echo "Курс:" . $course . "<br>";

    ?>
    <h2>Задача 3. Арифметика</h2>
<?php

$a = 30;
$b = 6;

echo "Сложение: " . ($a + $b) . "<br>";
echo "Вычитание: " . ($a - $b) . "<br>";
echo "Умножение: " . ($a * $b) . "<br>";
echo "Деление: " . ($a / $b) . "<br>";
echo "Остаток от деления: " . ($a % $b) . '<br>';

$width = 8;
$height = 5;

$area = $width * $height;
$aaaa = 2*($width + $height);
echo 'Площадь прямоугольника: ' . ($area) . '<br>';
echo 'Периметр прямоугольника: ' . ($aaaa) . '<br>';
?>

<h2>Задача 4. Типы данных</h2>

<?php

$name = "Анна";
$age = 18;
$average = 4.5;
$isStudent = true;

var_dump($name);
echo "<br>";

var_dump($age);
echo "<br>";

var_dump($average);
echo "<br>";

var_dump($isStudent);
echo "<br>";

?>

<h2>Самостоятельное задание</h2>
    <?php
    $product = "Ноутбук"; 
    $price = 1500;
    $available =  false;

    var_dump($product);
    echo "<br>";
    var_dump($price);
    echo "<br>";
    var_dump($available);
    echo "<br>";
    ?>

 <h2>Информация о товаре</h2>
    <?php
    $product = "Линейка"; 
    $price = 100; 
    $quantity = 3000; 

    echo "Название товара: " . $product . "<br>";
    echo "Цена товара: " . $price . "<br>";
    echo "Количество товаров: " . $quantity . "<br>";
    echo "Общая стоимость товаров: " . $quantity*$price . "<br>";
    echo "Стоимость товаров со скидкой 10%: " . ($quantity*$price)*0.9 . "<br>";
    ?>
</body>
</html>
