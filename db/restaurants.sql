-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 05:50 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `img`) VALUES
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://static.thairath.co.th/media/Dtbezn3nNUxytg04aiLW83aVTf4sL0FJbWhPKPy9tjRWWn.webp'),
(2, 'ChaTraMue (ชาตรามือ) - เยาวราช', 'ชา กาแฟ, ชานมไข่มุก', 'https://s.isanook.com/he/0/ud/4/23241/white-tea.jpg'),
(3, 'รสเด็ดอร่อยตามสั่ง - บางซื่อ', 'Coupon, อาหารทะเล, อาหารตามสั่ง, ยำ', 'https://promotions.co.th/wp-content/uploads/2022/08/grilled-seafood.jpg'),
(4, 'ตี๋เปิ้ลก่วยเตี๋ยวต้มยำสุโขทัย - สวนมะลิ', 'Coupon, อาหารเส้น', 'https://img.wongnai.com/p/1920x0/2019/01/10/969acc566a18414b9f20549d7309b9c0.jpg'),
(5, 'ไก่ทอดนายจรัล - ถนนจรัญสนิทวงศ์ 5', 'ไก่ทอด', 'https://s.isanook.com/he/0/ud/4/23241/white-tea.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
