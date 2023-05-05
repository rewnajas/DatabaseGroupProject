-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2023 at 01:14 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `real-time-web-chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`username`, `password`, `role`) VALUES
('admin', '$2a$10$P/6DEkvjXYVxpEYar77QeuSPgKBkk9I3qpMAsMu6mUId9QFSnTxOe', 'admin'),
('guard', '$2y$10$9uIqZCE3JEBTrFtynOvUsumF7.pYZk9zckr2/KnjrJfIzb.T1W9xq', 'guard'),
('user', '$2y$10$MZW5niGBvW2NqYEF1xWcp.m/mxRCQ6qCJvZ5a3V30/r7bXAUcub0K', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('8NfzKo_HKMjRpMTI_G9iE6ATL8b8B-4M', 1678627364, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"test\"}}'),
('oV3tyKgn94CWr5fHTD_Taqh7epg1RI7z', 1678616928, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"admin\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `weapon`
--

CREATE TABLE `weapon` (
  `weaponID` int(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `weaponName` varchar(100) NOT NULL,
  `weaponType` varchar(100) NOT NULL,
  `armoryID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weapon`
--

INSERT INTO `weapon` (`weaponID`, `status`, `weaponName`, `weaponType`, `armoryID`) VALUES
(1234567891, 1, 'AK-47', 'Assault Rifle', 11112),
(1234567892, 0, 'Five-seveN', 'Handgun', 11111),
(1234567893, 1, 'Dual Baretta', 'Handgun', 33321),
(1234567894, 1, 'Gatling', 'Heavy Machine Gun', 99999),
(1234567895, 1, 'M1887', 'Shotgun', 88888),
(1234567896, 1, 'Winchester Model 1897', 'Shotgun', 88888);

-- --------------------------------------------------------

--
-- Table structure for table `weapons`
--

CREATE TABLE `weapons` (
  `weapon_name` varchar(50) NOT NULL,
  `weapon_type` varchar(50) NOT NULL,
  `armory_name` varchar(50) NOT NULL,
  `num_available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weapons`
--

INSERT INTO `weapons` (`weapon_name`, `weapon_type`, `armory_name`, `num_available`) VALUES
('fn five-seven', 'semi-automatic pistol', 'mai_ru', 5),
('m-16', 'assault rifle', 'kid_mai_ook', 5),
('m-4', 'assault rifle', 'mai_bok', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `weapon`
--
ALTER TABLE `weapon`
  ADD PRIMARY KEY (`weaponID`);

--
-- Indexes for table `weapons`
--
ALTER TABLE `weapons`
  ADD PRIMARY KEY (`weapon_name`,`armory_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weapon`
--
ALTER TABLE `weapon`
  MODIFY `weaponID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1234567897;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
