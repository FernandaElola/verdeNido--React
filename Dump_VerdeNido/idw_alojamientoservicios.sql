-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: idw
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alojamientoservicios`
--

DROP TABLE IF EXISTS `alojamientoservicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamientoservicios` (
  `idAlojamientoServicio` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `idServicio` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamientoServicio`),
  KEY `idAlojamiento` (`idAlojamiento`),
  KEY `idServicio` (`idServicio`),
  CONSTRAINT `alojamientoservicios_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`),
  CONSTRAINT `alojamientoservicios_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicios` (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientoservicios`
--

LOCK TABLES `alojamientoservicios` WRITE;
/*!40000 ALTER TABLE `alojamientoservicios` DISABLE KEYS */;
INSERT INTO `alojamientoservicios` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,2,7),(8,2,8),(9,2,9),(10,2,10),(11,2,1),(12,2,2),(13,3,3),(14,3,4),(15,3,5),(16,3,6),(17,3,7),(18,3,8),(19,4,1),(20,4,2),(21,4,3),(22,4,4),(23,4,5),(24,4,6),(25,5,7),(26,5,8),(27,5,9),(28,5,10),(29,5,1),(30,5,2),(31,6,3),(32,6,4),(33,6,5),(34,6,6),(35,6,7),(36,6,8),(37,7,9),(38,7,10),(39,7,1),(40,7,2),(41,7,3),(42,7,4),(43,8,5),(44,8,6),(45,8,7),(46,8,8),(47,8,9),(48,8,10),(49,9,1),(50,9,2),(51,9,3),(52,9,4),(53,9,5),(54,9,6),(55,10,7),(56,10,8),(57,10,9),(58,10,10),(59,10,1),(60,10,2),(61,11,3),(62,11,4),(63,11,5),(64,11,6),(65,11,7),(66,11,8),(67,12,9),(68,12,10),(69,12,1),(70,12,2),(71,12,3),(72,12,4);
/*!40000 ALTER TABLE `alojamientoservicios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-23 20:08:08
