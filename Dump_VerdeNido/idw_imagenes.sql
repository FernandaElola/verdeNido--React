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
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `RutaArchivo` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `idAlojamiento` (`idAlojamiento`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,1,'\\img\\Alojamientos_IMG\\CASA1.jpg'),(2,1,'\\img\\Alojamientos_IMG\\INTERIOR1.jpg'),(3,1,'\\img\\Alojamientos_IMG\\INTERIOR2.jpg'),(4,1,'\\img\\Alojamientos_IMG\\BAÑO1.jpg'),(5,2,'\\img\\Alojamientos_IMG\\CASA2.jpg'),(6,2,'\\img\\Alojamientos_IMG\\INTERIOR4.jpg'),(7,2,'\\img\\Alojamientos_IMG\\INTERIOR5.jpg'),(8,2,'\\img\\Alojamientos_IMG\\BAÑO2.jpg'),(9,3,'\\img\\Alojamientos_IMG\\CASA3.jpg'),(10,3,'\\img\\Alojamientos_IMG\\INTERIOR7.jpg'),(11,3,'\\img\\Alojamientos_IMG\\INTERIOR8.jpg'),(12,3,'\\img\\Alojamientos_IMG\\BAÑO3.jpg'),(13,4,'\\img\\Alojamientos_IMG\\CASA4.jpg'),(14,4,'\\img\\Alojamientos_IMG\\INTERIOR3.jpg'),(15,4,'\\img\\Alojamientos_IMG\\INTERIOR6.jpg'),(16,4,'\\img\\Alojamientos_IMG\\BAÑO4.jpg'),(17,5,'\\img\\Alojamientos_IMG\\CASA5.jpg'),(18,5,'\\img\\Alojamientos_IMG\\INTERIOR9.jpg'),(19,5,'\\img\\Alojamientos_IMG\\INTERIOR10.jpg'),(20,5,'\\img\\Alojamientos_IMG\\BAÑO5.jpg'),(21,6,'\\img\\Alojamientos_IMG\\CASA6.jpg'),(22,6,'\\img\\Alojamientos_IMG\\INTERIOR11.jpg'),(23,6,'\\img\\Alojamientos_IMG\\\\INTERIOR12.jpg'),(24,6,'\\img\\Alojamientos_IMG\\BAÑO6.jpg'),(25,7,'\\img\\Alojamientos_IMG\\CASA1.jpg'),(26,7,'\\img\\Alojamientos_IMG\\INTERIOR1.jpg'),(27,7,'\\img\\Alojamientos_IMG\\INTERIOR2.jpg'),(28,7,'\\img\\Alojamientos_IMG\\BAÑO1.jpg'),(29,8,'\\img\\Alojamientos_IMG\\CASA2.jpg'),(30,8,'\\img\\Alojamientos_IMG\\INTERIOR3.jpg'),(31,8,'\\img\\Alojamientos_IMG\\INTERIOR4.jpg'),(32,8,'\\img\\Alojamientos_IMG\\BAÑO2.jpg'),(33,9,'\\img\\Alojamientos_IMG\\CASA3.jpg'),(34,9,'\\img\\Alojamientos_IMG\\INTERIOR5.jpg'),(35,9,'\\img\\Alojamientos_IMG\\INTERIOR6.jpg'),(36,9,'\\img\\Alojamientos_IMG\\BAÑO3.jpg'),(37,10,'\\img\\Alojamientos_IMG\\CASA4.jpg'),(38,10,'\\img\\Alojamientos_IMG\\INTERIOR7.jpg'),(39,10,'\\img\\Alojamientos_IMG\\INTERIOR8.jpg'),(40,10,'\\img\\Alojamientos_IMG\\BAÑO4.jpg'),(41,11,'\\img\\Alojamientos_IMG\\CASA5.jpg'),(42,11,'\\img\\Alojamientos_IMG\\INTERIOR9.jpg'),(43,11,'\\img\\Alojamientos_IMG\\INTERIOR10.jpg'),(44,11,'\\img\\Alojamientos_IMG\\BAÑO5.jpg'),(45,12,'\\img\\Alojamientos_IMG\\CASA6.jpg'),(46,12,'\\img\\Alojamientos_IMG\\INTERIOR11.jpg'),(47,12,'\\img\\Alojamientos_IMG\\INTERIOR12.jpg'),(48,12,'\\img\\Alojamientos_IMG\\BAÑO6.jpg');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
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
