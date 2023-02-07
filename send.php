<?php

  $recepient = "tyradire@yandex.ru";
  $sitename = "Название сайта";

  $name = trim($_POST["name"]);
  $phone = trim($_POST["phone"]);
  $time = trim($_POST["time"]);
  $message = "Имя: $name \nТелефон: $phone \nTime: $time";

  $pagetitle = "Новая заявка с сайта \"$sitename\"";
  mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
  
?>