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
-- Table structure for table `alojamientos`
--

DROP TABLE IF EXISTS `alojamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamientos` (
  `idAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text,
  `Latitud` decimal(10,8) NOT NULL,
  `Longitud` decimal(11,8) NOT NULL,
  `PrecioPorDia` decimal(10,2) NOT NULL,
  `CantidadDormitorios` int NOT NULL,
  `CantidadBanios` int NOT NULL,
  `Estado` enum('Disponible','Reservado') NOT NULL,
  `idTipoAlojamiento` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamiento`),
  KEY `idTipoAlojamiento` (`idTipoAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alojamientos`
--

LOCK TABLES `alojamientos` WRITE;
/*!40000 ALTER TABLE `alojamientos` DISABLE KEYS */;
INSERT INTO `alojamientos` VALUES (1,'El Refugio',' Este alojamiento se encuentra en lo profundo de la selva misionera, rodeado por una exuberante vegetación y el sonido relajante de la fauna local. Es el lugar ideal para desconectar y reconectar con la naturaleza.',-25.87750000,-54.59650000,280.00,3,2,'Reservado',3),(2,'Los Pinos','Ubicado en el corazón de los Andes patagónicos, Los Pinos ofrece una experiencia de montaña única. Despierta cada mañana con vistas a los picos nevados y disfruta de caminatas por senderos rodeados de majestuosos pinos.\r ',-40.76670000,71.64140000,80.00,2,1,'Disponible',2),(3,'La tranquilidad','Rodeado de bosques centenarios y ubicado en una zona de máxima tranquilidad, este alojamiento es perfecto para quienes buscan paz y silencio. Aquí, podrás relajarte y disfrutar de la belleza natural del entorno.',-41.13350000,-71.31040000,160.00,2,1,'Disponible',1),(4,'Costa del Sol','Situado cerca de un hermoso lago en una zona boscosa, Costa del Sol ofrece vistas espectaculares y una atmósfera de serenidad. Es ideal para actividades acuáticas y para disfrutar de la naturaleza en todo su esplendor.',-38.98620000,-68.07330000,320.00,3,2,'Reservado',4),(5,'Lago Sereno','Ubicado en las inmediaciones de un lago cristalino y rodeado de un denso bosque, Lago Sereno es el lugar perfecto para descansar y disfrutar de la tranquilidad del agua y el canto de los pájaros.',-29.41250000,-65.25060000,40.00,2,1,'Disponible',5),(6,'Ciudad Vieja','Este alojamiento combina la belleza natural de los alrededores boscosos con un toque de historia. Es un refugio encantador donde podrás disfrutar de una experiencia única rodeado de antiguas historias y naturaleza.',-39.68390000,-71.64760000,160.00,2,1,'Disponible',2),(7,'Neve','Este alojamiento se encuentra en una vasta extensión de bosque virgen, donde la naturaleza reina en su máxima expresión. Es el sitio ideal para quienes buscan una experiencia auténtica en contacto directo con el medio ambiente.',-40.28220000,-71.35490000,200.00,3,3,'Reservado',1),(8,'Tierra Verde','Este mágico alojamiento está situado en un bosque místico, donde la naturaleza parece contar historias a cada paso. Es el lugar ideal para una escapada romántica o para los amantes de la tranquilidad y el misterio.',-41.15000000,-71.11670000,50.00,4,2,'Disponible',3),(9,'Playa Azul','A pesar de su nombre, este alojamiento está rodeado por un denso bosque y se encuentra a poca distancia de un hermoso lago de aguas cristalinas. Es perfecto para combinar la experiencia del bosque con actividades acuáticas.',-42.92500000,-71.53330000,95.00,3,2,'Reservado',4),(10,'Bosque Encantado','Este alojamiento, rodeado por un impresionante paisaje boscoso, es perfecto para los amantes de la naturaleza. Aquí, podrás explorar senderos y observar la fauna local en su hábitat natural.',-26.96670000,-65.33330000,130.00,4,4,'Disponible',5),(11,'Marrakech','Ubicado en un entorno de bosque frondoso, Marrakech ofrece una mezcla única de exotismo y naturaleza. Disfruta de la paz y la serenidad mientras te relajas en este refugio inspirado en el estilo marroquí.',-28.47450000,-65.78520000,180.00,5,4,'Reservado',2),(12,'Savana','Enclavado en una zona boscosa cerca de las montañas, Savana es el lugar perfecto para quienes buscan disfrutar de la naturaleza en un entorno fresco y nevado. Es ideal para actividades al aire libre como el senderismo y el esquí.',-42.78270000,-65.04730000,450.00,5,5,'Disponible',5);
/*!40000 ALTER TABLE `alojamientos` ENABLE KEYS */;
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
