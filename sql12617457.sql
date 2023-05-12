-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freemysqlhosting.net
-- Generation Time: May 11, 2023 at 06:23 AM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql12617457`
--

-- --------------------------------------------------------

--
-- Table structure for table `ARMORY`
--

CREATE TABLE `ARMORY` (
  `armoryID` int(5) NOT NULL,
  `armoryName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `unitID` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ARMORY`
--

INSERT INTO `ARMORY` (`armoryID`, `armoryName`, `address`, `unitID`) VALUES
(10101, 'คลังกรมสรรพาวุธทหารบก', '300 หมู่ 1 ตำบลเขาพระงาม อำเภอเมือง จังหวัดลพบุรี 15160', 101),
(10201, 'คลังกรมการสารวัตรทหารบก', '75/3 ถนนพระรามที่ 6 แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพฯ 10400', 102);

-- --------------------------------------------------------

--
-- Table structure for table `borrow`
--

CREATE TABLE `borrow` (
  `unitID` int(3) NOT NULL,
  `weaponID` int(10) NOT NULL,
  `borrowDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `returnDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `borrowStatus` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `returnStatus` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `borrowID` int(5) NOT NULL,
  `borrowReason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `MILITARY`
--

CREATE TABLE `MILITARY` (
  `militaryID` int(10) NOT NULL,
  `Fname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `militaryForce` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `militaryType` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `armoryID` int(5) DEFAULT NULL,
  `unitID` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MILITARY`
--

INSERT INTO `MILITARY` (`militaryID`, `Fname`, `Lname`, `prefix`, `militaryForce`, `password`, `militaryType`, `armoryID`, `unitID`) VALUES
(66000001, 'ชยิน', 'ธารางาม', 'พันตรี', 'เหล่าทหารพลาธิการ', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', 'admin', NULL, 101),
(66000002, 'ธนัท', 'ทรัพย์ศิลา', 'ร้อยตรี', 'เหล่าทหารพลาธิการ', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', 'regular', NULL, 101),
(66000003, 'พัฒนภัทร', 'แสนสุวรรณวงศ์', 'สิบตรี', 'เหล่าทหารพลาธิการ', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', ' guard', 10101, 101),
(66000004, 'ภัทร', 'แสนสุวรรณวงศ์', 'พันตรี', 'เหล่าทหารม้า', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', 'admin', NULL, 102),
(66000005, 'พงศกร', 'ศรีสดุดี', 'ร้อยตรี', 'เหล่าทหารม้า', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', 'regular', NULL, 102),
(66000006, 'คมสัน', 'สว่างเสนา', 'สิบตรี', 'เหล่าทหารม้า', '$2y$10$cIWiH6NiURnWPd2v33TOTOL072Kf4W831f9b42bKmrrt8Q3k.h5eS', ' guard', 10201, 102);

-- --------------------------------------------------------

--
-- Table structure for table `UNIT`
--

CREATE TABLE `UNIT` (
  `unitID` int(3) NOT NULL,
  `department` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UNIT`
--

INSERT INTO `UNIT` (`unitID`, `department`) VALUES
(101, 'กรมสรรพาวุธทหารบก'),
(102, 'กรมการสารวัตรทหารบก');

-- --------------------------------------------------------

--
-- Table structure for table `WEAPON`
--

CREATE TABLE `WEAPON` (
  `weaponID` int(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `weaponName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `weaponType` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `armoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `WEAPON`
--

INSERT INTO `WEAPON` (`weaponID`, `status`, `weaponName`, `weaponType`, `armoryID`) VALUES
(661, 1, 'อาร์พีจี-7', 'อาร์พีจี', 10101),
(662, 1, 'อาร์พีจี-7', 'อาร์พีจี', 10101),
(663, 1, 'บราวนิง เอ4', 'ปืนกลขนาดกลาง', 10101),
(664, 1, 'บราวนิง เอ4', 'ปืนกลขนาดกลาง', 10101),
(665, 1, 'ไทป์ 86', 'ปืนพกกึ่งอัตโนมัติ', 10201),
(666, 1, 'กล็อก 19 เจน 4', 'ปืนพกกึ่งอัตโนมัติ', 10201),
(667, 1, 'อูซี', 'ปืนกลมือ', 10201),
(668, 1, 'เอชเค 33', 'ปืนเล็กยาวจู่โจม', 10201);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ARMORY`
--
ALTER TABLE `ARMORY`
  ADD PRIMARY KEY (`armoryID`),
  ADD KEY `unitIDA` (`unitID`);

--
-- Indexes for table `borrow`
--
ALTER TABLE `borrow`
  ADD KEY `weaponIDB` (`weaponID`),
  ADD KEY `unitIDB` (`unitID`);

--
-- Indexes for table `MILITARY`
--
ALTER TABLE `MILITARY`
  ADD PRIMARY KEY (`militaryID`),
  ADD KEY `unitIDM` (`unitID`);

--
-- Indexes for table `UNIT`
--
ALTER TABLE `UNIT`
  ADD PRIMARY KEY (`unitID`);

--
-- Indexes for table `WEAPON`
--
ALTER TABLE `WEAPON`
  ADD PRIMARY KEY (`weaponID`),
  ADD KEY `armoryIDW` (`armoryID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ARMORY`
--
ALTER TABLE `ARMORY`
  ADD CONSTRAINT `unitIDA` FOREIGN KEY (`unitID`) REFERENCES `UNIT` (`unitID`);

--
-- Constraints for table `borrow`
--
ALTER TABLE `borrow`
  ADD CONSTRAINT `unitIDB` FOREIGN KEY (`unitID`) REFERENCES `UNIT` (`unitID`),
  ADD CONSTRAINT `weaponIDB` FOREIGN KEY (`weaponID`) REFERENCES `WEAPON` (`weaponID`);

--
-- Constraints for table `MILITARY`
--
ALTER TABLE `MILITARY`
  ADD CONSTRAINT `unitIDM` FOREIGN KEY (`unitID`) REFERENCES `UNIT` (`unitID`);

--
-- Constraints for table `WEAPON`
--
ALTER TABLE `WEAPON`
  ADD CONSTRAINT `armoryIDW` FOREIGN KEY (`armoryID`) REFERENCES `ARMORY` (`armoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
