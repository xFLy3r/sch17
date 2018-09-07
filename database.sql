-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 07 2018 г., 20:01
-- Версия сервера: 10.0.32-MariaDB-0+deb8u1
-- Версия PHP: 7.1.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `artur_yurko`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` tinyint(4) NOT NULL,
  `name` tinytext NOT NULL,
  `img` tinytext NOT NULL,
  `download` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `name`, `img`, `download`) VALUES
(1, 'Алгебра', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502697650_algebra-9-klas-ister-2017.jpg', 'https://filemanagersch17.000webhostapp.com/Algebra.zip'),
(2, 'Геометрія', 'https://images.ua.prom.st/948290321_w640_h640_a409.jpg', 'https://filemanagersch17.000webhostapp.com/Geometry.zip'),
(3, 'Українська Мова', 'https://mozok.click/uploads/posts/2017-10/1508100933_x-ukr-mova-glazova.jpg', 'https://filemanagersch17.000webhostapp.com/Ukr Mov.zip'),
(4, 'Українська Література', 'https://portfel.info//_ld/256/25638.jpg', 'https://filemanagersch17.000webhostapp.com/Ukr Lit.zip'),
(5, 'Географія', 'https://portfel.info//_ld/255/25576.jpg', 'https://filemanagersch17.000webhostapp.com/Geography.zip'),
(6, 'Біологія', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502697865_biologiya-9-klas-anderson-2017.jpg', 'https://filemanagersch17.000webhostapp.com/Biologia.zip'),
(7, 'Хімія', 'http://4book.org/photo/5970/8779/d13f/4a4e/f229/33a7/big_abda66d64de.jpg?1500546937', 'https://filemanagersch17.000webhostapp.com/Chemistry.zip'),
(8, 'Фізика', 'https://images.ua.prom.st/1118925784_w640_h640_t470145r.jpg', 'https://filemanagersch17.000webhostapp.com/Physics.zip'),
(9, 'Англійська Мова', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502694153_angliyska-mova-9-klas-kalinina-2017.jpg', 'https://filemanagersch17.000webhostapp.com/English.zip'),
(10, 'Зарубіжна Література', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502715753_zarubizhna-literatura-9-klas-voloschuk-2017.jpg', 'https://filemanagersch17.000webhostapp.com/Zarub Litereature.zip'),
(11, 'Історія України', 'https://portfel.info//_ld/255/25571.jpg', 'https://filemanagersch17.000webhostapp.com/Ukr History.zip'),
(12, 'Всесвітня Історія', 'http://4book.org/photo/5970/acc6/d13f/4a4e/eb29/3385/main_9090f352fa28e.jpg?1500556485', 'https://filemanagersch17.000webhostapp.com/Vsesv History.zip'),
(13, 'Інформатика', 'http://4book.org/photo/5970/acc6/d13f/4a4e/eb29/3385/main_9090f352fa28e.jpg?1500556485', 'https://filemanagersch17.000webhostapp.com/Informatics.zip'),
(14, 'Основи Здоровя', 'http://4book.org/photo/5811/b393/eef8/884e/ab01/441e/big_1s37216f1.jpg?1477555091', 'https://filemanagersch17.000webhostapp.com/Osn Zdor.zip'),
(15, 'Правознавство', 'https://images.ua.prom.st/936400141_w640_h640_a384.jpg', 'https://filemanagersch17.000webhostapp.com/Pravoznavstvo.zip'),
(16, 'Мистецтво', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502772934_mystectvo-9-klas-masol-2017.jpg', 'https://filemanagersch17.000webhostapp.com/Art.zip'),
(17, 'Технології Для Дівчат\n', 'http://4book.org/photo/59a7/bb67/2b1f/9474/f72b/bf4a/big_25049472587.jpg?1504164711', 'https://filemanagersch17.000webhostapp.com/Trudi F.zip'),
(18, 'Технології Для Хлопців', 'https://pidruchnyk.com.ua/uploads/posts/2017-08/1502869423_trudove-navchannya-9-klas-lebedev-2017.jpg', 'https://filemanagersch17.000webhostapp.com/Trudi M.zip');

-- --------------------------------------------------------

--
-- Структура таблицы `homework`
--

CREATE TABLE `homework` (
  `id` int(11) NOT NULL,
  `day` tinytext NOT NULL,
  `1` tinytext NOT NULL,
  `2` tinytext NOT NULL,
  `3` tinytext NOT NULL,
  `4` tinytext NOT NULL,
  `5` tinytext NOT NULL,
  `6` tinytext NOT NULL,
  `7` tinytext NOT NULL,
  `8` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `homework`
--

INSERT INTO `homework` (`id`, `day`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`) VALUES
(1, 'Понеділок', '', '', '', '', '', '', '', ''),
(2, 'Вівторок', '', '', '', '', '', '', '', ''),
(3, 'Середа', '', '', '', '', '', '', '', ''),
(4, 'Четвер', '', '', '', '', '', '', '', ''),
(5, 'П\'ятниця', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `lessons`
--

CREATE TABLE `lessons` (
  `id` tinyint(4) NOT NULL,
  `name` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `lessons`
--

INSERT INTO `lessons` (`id`, `name`) VALUES
(1, 'Алгебра'),
(2, 'Геометрія'),
(3, 'Англ. мов.#1<^>Англ. мов.#2'),
(4, 'Труди'),
(5, 'Укр. мов.'),
(6, 'Фіз-ра'),
(7, 'Історія Укр.'),
(8, 'Фізика'),
(9, 'Зарубіжна'),
(10, 'Інформ#1<^>Інформ#2'),
(11, 'Географія'),
(12, 'Біологія'),
(13, 'Іспанська<^>Німецька'),
(14, 'Всесвітня Іст.'),
(15, 'Хімія'),
(16, 'Укр. літ.'),
(17, 'Правознавство'),
(18, 'Укр.'),
(19, 'Математика'),
(20, 'Історія'),
(21, 'Осн. Здор.'),
(22, '');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` smallint(6) NOT NULL,
  `name` tinytext NOT NULL,
  `date` date NOT NULL,
  `text` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `name`, `date`, `text`) VALUES
(1, 'Знову в школу', '2018-08-31', 'У школу приходить на 8-30 у вишиванках у 410 кабінет. С третього урока - за розкладом.\r\n'),
(2, 'Збір Коштів', '2018-08-05', 'Укр. Літ. 58 грн. Збирає Надія Іванівна;\r\nБіологія 44 грн. Збирає Маша Гаврилюк;\r\nФізика 18 грн. 20 грн. Збирає Ліза Кудрявцева;\r\nГеографія 35 грн. Збирає Аня Личак;\r\nІсторія 27 грн Ліза Кудрявцева;\r\nПравознавство 25 грн Софія Фурман;\r\nУкр мова 35 грн Настя Дурманова');

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

CREATE TABLE `teachers` (
  `id` tinyint(4) NOT NULL,
  `name` tinytext NOT NULL,
  `tech` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `tech`) VALUES
(1, 'Щукіна Ірина Юріївна', 'Класний керівник Зар. Літ. '),
(2, 'Лелеко Надія Іванівна', 'Укр Мов/Літ'),
(3, 'Куцевська Інна Вікторівна', 'Алгебра/Геометрія'),
(4, 'Козлюк Алла Борисівна', 'Правознавство'),
(5, 'Линик Олена Петрівна', 'Історія'),
(6, 'Атаманова Олена Юріївна', 'Біологія'),
(7, 'Смаглюк Юлія Іванівна', 'Хімія'),
(8, 'Логвин Людмила Іванівна', 'Фізика'),
(9, 'Сергата Лариса Миколайвна', 'Географія'),
(10, 'Гребенюк Олена Миколаївна', 'Мистецтво'),
(11, 'Тихоненко Аліна Миколаївна', 'Інформатика№1'),
(12, 'Саражинський Микола Олександрович', 'Інформатика№2'),
(13, 'Лісник Олена Володимирівна', 'Основи Здоров`я'),
(14, 'Єрмоленко Лариса Анатоліївна', 'Англ. Мов.№1'),
(15, 'Сандецька Ірина Федорівна', 'Іспанська'),
(16, 'Дубина Марія Володимирівна', 'Німецька'),
(17, 'Гребенюк Людмила Василівна', 'Фізкультура'),
(18, 'Олійник Тетяна Іванівна', 'Технології Дівчата'),
(19, 'Поліщук Олег Владиславович', 'Технології Хлопці'),
(20, 'Мельникова Марина В`ячеславівна', 'Англ. Мов.№2');

-- --------------------------------------------------------

--
-- Структура таблицы `timetable`
--

CREATE TABLE `timetable` (
  `id` tinyint(4) NOT NULL,
  `day` tinytext NOT NULL,
  `1` tinytext NOT NULL,
  `2` tinytext NOT NULL,
  `3` tinytext NOT NULL,
  `4` tinytext NOT NULL,
  `5` tinytext NOT NULL,
  `6` tinytext NOT NULL,
  `7` tinytext NOT NULL,
  `8` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `timetable`
--

INSERT INTO `timetable` (`id`, `day`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`) VALUES
(1, 'Понеділок', 'Алгебра', 'Географія', 'Зарубіжна<^>Англ. мов.#2', 'Труди', 'Укр. мов.', 'Фіз-ра', 'Укр. літ.', ''),
(2, 'Вівторок', 'Географія', 'Хімія', 'Інформ#1<^>Інформ#2', 'Англ. мов.#1<^>Англ. мов.#2', 'Біологія', 'Алгебра', 'Історія', 'Фіз-ра'),
(3, 'Середа', 'Фізика', 'Укр. мов.', 'Географія', 'Англ. мов.#1<^>Англ. мов.#2', 'Іспанська<^>Німецька', 'Хімія', '', ''),
(4, 'Четвер', 'Алгебра', 'Біологія', 'Фізика', 'Англ. мов.#1<^>Англ. мов.#2', 'Зарубіжна', 'Правознавство', 'Іспанська<^>Німецька', ''),
(5, 'П\'ятниця', 'Зарубіжна', 'Фізика', 'Інформ#1<^>Інформ#2', 'Англ. мов.#1<^>Англ. мов.#2', 'Геометрія', 'Фіз-ра', 'Укр. літ.', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `homework`
--
ALTER TABLE `homework`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT для таблицы `homework`
--
ALTER TABLE `homework`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT для таблицы `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT для таблицы `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
