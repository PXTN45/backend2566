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
(1, 'McDonald\'s (แมคโดนัลด์) - ราชดำเนิน', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…75f84a0fb1b2b58e4320be3f_1688317413588921068.webp\r\n'),
(2, 'ChaTraMue (ชาตรามือ) - เยาวราช', 'ชา กาแฟ, ชานมไข่มุก', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…fa0b4bf79d277fe065250beb_1655367796276958677.webp'),
(3, 'รสเด็ดอร่อยตามสั่ง - บางซื่อ', 'Coupon, อาหารทะเล, อาหารตามสั่ง, ยำ', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…83504e22a8b1f5a2ea5851e1_1623751631792385157.webp'),
(4, 'ตี๋เปิ้ลก่วยเตี๋ยวต้มยำสุโขทัย - สวนมะลิ', 'Coupon, อาหารเส้น', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…07c94f029b7512bcfc2315e3_1597897820128291082.webp'),
(5, 'ไก่ทอดนายจรัล - ถนนจรัญสนิทวงศ์ 5', 'ไก่ทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…33d44b359a9550585f186407_1664116825269530916.webp');

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
