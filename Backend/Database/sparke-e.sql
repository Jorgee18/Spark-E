-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2024 a las 18:24:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spark-e`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `cod_comuna` varchar(5) NOT NULL,
  `cod_region` varchar(2) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`cod_comuna`, `cod_region`, `nombre`) VALUES
('01101', '01', 'Iquique'),
('01107', '01', 'Alto Hospicio'),
('01401', '01', 'Pozo Almonte'),
('01402', '01', 'Camiña'),
('01403', '01', 'Colchane'),
('01404', '01', 'Huara'),
('01405', '01', 'Pica'),
('02101', '02', 'Antofagasta'),
('02102', '02', 'Mejillones'),
('02103', '02', 'Sierra Gorda'),
('02104', '02', 'Taltal'),
('02201', '02', 'Calama'),
('02202', '02', 'Ollagüe'),
('02203', '02', 'San Pedro de Atacama'),
('02301', '02', 'Tocopilla'),
('02302', '02', 'María Elena'),
('03101', '03', 'Copiapó'),
('03102', '03', 'Caldera'),
('03103', '03', 'Tierra Amarilla'),
('03201', '03', 'Chañaral'),
('03202', '03', 'Diego de Almagro'),
('03301', '03', 'Vallenar'),
('03302', '03', 'Alto del Carmen'),
('03303', '03', 'Freirina'),
('03304', '03', 'Huasco'),
('04101', '04', 'La Serena'),
('04102', '04', 'Coquimbo'),
('04103', '04', 'Andacollo'),
('04104', '04', 'La Higuera'),
('04105', '04', 'Paiguano'),
('04106', '04', 'Vicuña'),
('04201', '04', 'Illapel'),
('04202', '04', 'Canela'),
('04203', '04', 'Los Vilos'),
('04204', '04', 'Salamanca'),
('04301', '04', 'Ovalle'),
('04302', '04', 'Combarbalá'),
('04303', '04', 'Monte Patria'),
('04304', '04', 'Punitaqui'),
('04305', '04', 'Río Hurtado'),
('05101', '05', 'Valparaíso'),
('05102', '05', 'Casablanca'),
('05103', '05', 'Concón'),
('05104', '05', 'Juan Fernández'),
('05105', '05', 'Puchuncaví'),
('05106', '05', 'Quilpué'),
('05107', '05', 'Quintero'),
('05108', '05', 'Villa Alemana'),
('05109', '05', 'Viña del Mar'),
('05201', '05', 'Isla de Pascua'),
('05301', '05', 'Los Andes'),
('05302', '05', 'Calle Larga'),
('05303', '05', 'Rinconada'),
('05304', '05', 'San Esteban'),
('05401', '05', 'La Ligua'),
('05402', '05', 'Cabildo'),
('05403', '05', 'Papudo'),
('05404', '05', 'Petorca'),
('05405', '05', 'Zapallar'),
('05501', '05', 'Quillota'),
('05502', '05', 'Calera'),
('05503', '05', 'Hijuelas'),
('05504', '05', 'La Cruz'),
('05505', '05', 'Limache'),
('05506', '05', 'Nogales'),
('05507', '05', 'Olmué'),
('05601', '05', 'San Antonio'),
('05602', '05', 'Algarrobo'),
('05603', '05', 'Cartagena'),
('05604', '05', 'El Quisco'),
('05605', '05', 'El Tabo'),
('05606', '05', 'Santo Domingo'),
('05701', '05', 'San Felipe'),
('05702', '05', 'Catemu'),
('05703', '05', 'Llaillay'),
('05704', '05', 'Panquehue'),
('05705', '05', 'Putaendo'),
('05706', '05', 'Santa María'),
('06101', '06', 'Rancagua'),
('06102', '06', 'Codegua'),
('06103', '06', 'Coinco'),
('06104', '06', 'Coltauco'),
('06105', '06', 'Doñihue'),
('06106', '06', 'Graneros'),
('06107', '06', 'Las Cabras'),
('06108', '06', 'Machalí'),
('06109', '06', 'Malloa'),
('06110', '06', 'Mostazal'),
('06111', '06', 'Olivar'),
('06112', '06', 'Peumo'),
('06113', '06', 'Pichidegua'),
('06114', '06', 'Quinta de Tilcoco'),
('06115', '06', 'Rengo'),
('06116', '06', 'Requínoa'),
('06117', '06', 'San Vicente'),
('06201', '06', 'Pichilemu'),
('06202', '06', 'La Estrella'),
('06203', '06', 'Litueche'),
('06204', '06', 'Marchihue'),
('06205', '06', 'Navidad'),
('06206', '06', 'Paredones'),
('06301', '06', 'San Fernando'),
('06302', '06', 'Chépica'),
('06303', '06', 'Chimbarongo'),
('06304', '06', 'Lolol'),
('06305', '06', 'Nancagua'),
('06306', '06', 'Palmilla'),
('06307', '06', 'Peralillo'),
('06308', '06', 'Placilla'),
('06309', '06', 'Pumanque'),
('06310', '06', 'Santa Cruz'),
('07101', '07', 'Talca'),
('07102', '07', 'Constitución'),
('07103', '07', 'Curepto'),
('07104', '07', 'Empedrado'),
('07105', '07', 'Maule'),
('07106', '07', 'Pelarco'),
('07107', '07', 'Pencahue'),
('07108', '07', 'Río Claro'),
('07109', '07', 'San Clemente'),
('07110', '07', 'San Rafael'),
('07201', '07', 'Cauquenes'),
('07202', '07', 'Chanco'),
('07203', '07', 'Pelluhue'),
('07301', '07', 'Curicó'),
('07302', '07', 'Hualañé'),
('07303', '07', 'Licantén'),
('07304', '07', 'Molina'),
('07305', '07', 'Rauco'),
('07306', '07', 'Romeral'),
('07307', '07', 'Sagrada Familia'),
('07308', '07', 'Teno'),
('07309', '07', 'Vichuquén'),
('07401', '07', 'Linares'),
('07402', '07', 'Colbún'),
('07403', '07', 'Longaví'),
('07404', '07', 'Parral'),
('07405', '07', 'Retiro'),
('07406', '07', 'San Javier'),
('07407', '07', 'Villa Alegre'),
('07408', '07', 'Yerbas Buenas'),
('08101', '08', 'Concepción'),
('08102', '08', 'Coronel'),
('08103', '08', 'Chiguayante'),
('08104', '08', 'Florida'),
('08105', '08', 'Hualqui'),
('08106', '08', 'Lota'),
('08107', '08', 'Penco'),
('08108', '08', 'San Pedro de la Paz'),
('08109', '08', 'Santa Juana'),
('08110', '08', 'Talcahuano'),
('08111', '08', 'Tomé'),
('08112', '08', 'Hualpén'),
('08201', '08', 'Lebu'),
('08202', '08', 'Arauco'),
('08203', '08', 'Cañete'),
('08204', '08', 'Contulmo'),
('08205', '08', 'Curanilahue'),
('08206', '08', 'Los Alamos'),
('08207', '08', 'Tirúa'),
('08301', '08', 'Los Angeles'),
('08302', '08', 'Antuco'),
('08303', '08', 'Cabrero'),
('08304', '08', 'Laja'),
('08305', '08', 'Mulchén'),
('08306', '08', 'Nacimiento'),
('08307', '08', 'Negrete'),
('08308', '08', 'Quilaco'),
('08309', '08', 'Quilleco'),
('08310', '08', 'San Rosendo'),
('08311', '08', 'Santa Bárbara'),
('08312', '08', 'Tucapel'),
('08313', '08', 'Yumbel'),
('08314', '08', 'Alto Biobío'),
('08401', '08', 'Chillán'),
('08402', '08', 'Bulnes'),
('08403', '08', 'Cobquecura'),
('08404', '08', 'Coelemu'),
('08405', '08', 'Coihueco'),
('08406', '08', 'Chillán Viejo'),
('08407', '08', 'El Carmen'),
('08408', '08', 'Ninhue'),
('08409', '08', 'Ñiquén'),
('08410', '08', 'Pemuco'),
('08411', '08', 'Pinto'),
('08412', '08', 'Portezuelo'),
('08413', '08', 'Quillón'),
('08414', '08', 'Quirihue'),
('08415', '08', 'Ránquil'),
('08416', '08', 'San Carlos'),
('08417', '08', 'San Fabián'),
('08418', '08', 'San Ignacio'),
('08419', '08', 'San Nicolás'),
('08420', '08', 'Treguaco'),
('08421', '08', 'Yungay'),
('09101', '09', 'Temuco'),
('09102', '09', 'Carahue'),
('09103', '09', 'Cunco'),
('09104', '09', 'Curarrehue'),
('09105', '09', 'Freire'),
('09106', '09', 'Galvarino'),
('09107', '09', 'Gorbea'),
('09108', '09', 'Lautaro'),
('09109', '09', 'Loncoche'),
('09110', '09', 'Melipeuco'),
('09111', '09', 'Nueva Imperial'),
('09112', '09', 'Padre Las Casas'),
('09113', '09', 'Perquenco'),
('09114', '09', 'Pitrufquén'),
('09115', '09', 'Pucón'),
('09116', '09', 'Saavedra'),
('09117', '09', 'Teodoro Schmidt'),
('09118', '09', 'Toltén'),
('09119', '09', 'Vilcún'),
('09120', '09', 'Villarrica'),
('09121', '09', 'Cholcho'),
('09201', '09', 'Angol'),
('09202', '09', 'Collipulli'),
('09203', '09', 'Curacautín'),
('09204', '09', 'Ercilla'),
('09205', '09', 'Lonquimay'),
('09206', '09', 'Los Sauces'),
('09207', '09', 'Lumaco'),
('09208', '09', 'Purén'),
('09209', '09', 'Renaico'),
('09210', '09', 'Traiguén'),
('09211', '09', 'Victoria'),
('10101', '10', 'Puerto Montt'),
('10102', '10', 'Calbuco'),
('10103', '10', 'Cochamó'),
('10104', '10', 'Fresia'),
('10105', '10', 'Frutillar'),
('10106', '10', 'Los Muermos'),
('10107', '10', 'Llanquihue'),
('10108', '10', 'Maullín'),
('10109', '10', 'Puerto Varas'),
('10201', '10', 'Castro'),
('10202', '10', 'Ancud'),
('10203', '10', 'Chonchi'),
('10204', '10', 'Curaco de Vélez'),
('10205', '10', 'Dalcahue'),
('10206', '10', 'Puqueldón'),
('10207', '10', 'Queilén'),
('10208', '10', 'Quellón'),
('10209', '10', 'Quemchi'),
('10210', '10', 'Quinchao'),
('10301', '10', 'Osorno'),
('10302', '10', 'Puerto Octay'),
('10303', '10', 'Purranque'),
('10304', '10', 'Puyehue'),
('10305', '10', 'Río Negro'),
('10306', '10', 'San Juan de la Costa'),
('10307', '10', 'San Pablo'),
('10401', '10', 'Chaitén'),
('10402', '10', 'Futaleufú'),
('10403', '10', 'Hualaihué'),
('10404', '10', 'Palena'),
('11101', '11', 'Coihaique'),
('11102', '11', 'Lago Verde'),
('11201', '11', 'Aisén'),
('11202', '11', 'Cisnes'),
('11203', '11', 'Guaitecas'),
('11301', '11', 'Cochrane'),
('11302', '11', 'O\'Higgins'),
('11303', '11', 'Torte'),
('11401', '11', 'Chile Chico'),
('11402', '11', 'Río Ibáñez'),
('12101', '12', 'Punta Arenas'),
('12102', '12', 'Laguna Blanca'),
('12103', '12', 'Río Verde'),
('12104', '12', 'San Gregorio'),
('12201', '12', 'Cabo de Hornos'),
('12202', '12', 'Antártica'),
('12301', '12', 'Porvenir'),
('12302', '12', 'Primavera'),
('12303', '12', 'Timaukel'),
('12401', '12', 'Natales'),
('12402', '12', 'Torres del Paine'),
('13101', '13', 'Santiago'),
('13102', '13', 'Cerrillos'),
('13103', '13', 'Cerro Navia'),
('13104', '13', 'Conchalí'),
('13105', '13', 'El Bosque'),
('13106', '13', 'Estación Central'),
('13107', '13', 'Huechuraba'),
('13108', '13', 'Independencia'),
('13109', '13', 'La Cisterna'),
('13110', '13', 'La Florida'),
('13111', '13', 'La Granja'),
('13112', '13', 'La Pintana'),
('13113', '13', 'La Reina'),
('13114', '13', 'Las Condes'),
('13115', '13', 'Lo Barnechea'),
('13116', '13', 'Lo Espejo'),
('13117', '13', 'Lo Prado'),
('13118', '13', 'Macul'),
('13119', '13', 'Maipú'),
('13120', '13', 'Ñuñoa'),
('13121', '13', 'Pedro Aguirre Cerda'),
('13122', '13', 'Peñalolén'),
('13123', '13', 'Providencia'),
('13124', '13', 'Pudahuel'),
('13125', '13', 'Quilicura'),
('13126', '13', 'Quinta Normal'),
('13127', '13', 'Recoleta'),
('13128', '13', 'Renca'),
('13129', '13', 'San Joaquín'),
('13130', '13', 'San Miguel'),
('13131', '13', 'San Ramón'),
('13132', '13', 'Vitacura'),
('13201', '13', 'Puente Alto'),
('13202', '13', 'Pirque'),
('13203', '13', 'San José de Maipo'),
('13301', '13', 'Colina'),
('13302', '13', 'Lampa'),
('13303', '13', 'Tiltil'),
('13401', '13', 'San Bernardo'),
('13402', '13', 'Buin'),
('13403', '13', 'Calera de Tango'),
('13404', '13', 'Paine'),
('13501', '13', 'Melipilla'),
('13502', '13', 'Alhué'),
('13503', '13', 'Curacaví'),
('13504', '13', 'María Pinto'),
('13505', '13', 'San Pedro'),
('13601', '13', 'Talagante'),
('13602', '13', 'El Monte'),
('13603', '13', 'Isla de Maipo'),
('13604', '13', 'Padre Hurtado'),
('13605', '13', 'Peñaflor'),
('14101', '14', 'Valdivia'),
('14102', '14', 'Corral'),
('14103', '14', 'Lanco'),
('14104', '14', 'Los Lagos'),
('14105', '14', 'Máfil'),
('14106', '14', 'Mariquina'),
('14107', '14', 'Paillaco'),
('14108', '14', 'Panguipulli'),
('14201', '14', 'La Unión'),
('14202', '14', 'Futrono'),
('14203', '14', 'Lago Ranco'),
('14204', '14', 'Río Bueno'),
('15101', '15', 'Arica'),
('15102', '15', 'Camarones'),
('15201', '15', 'Putre'),
('15202', '15', 'General Lagos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `cod_region` varchar(2) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`cod_region`, `nombre`) VALUES
('01', 'Tarapacá'),
('02', 'Antofagasta'),
('03', 'Atacama'),
('04', 'Coquimbo'),
('05', 'Valparaíso'),
('06', 'Región del Libertador Gral. Bernardo O\'Higgins'),
('07', 'Región del Maule'),
('08', 'Región del Biobío'),
('09', 'Región de La Araucanía'),
('10', 'Región de Los Lagos'),
('11', 'Región Aisén del Gral. Carlos Ibáñez del Campo'),
('12', 'Región de Magallanes y de la Antártica Chilena'),
('13', 'Región Metropolitana de Santiago'),
('14', 'Región de Los Ríos'),
('15', 'Arica y Parinacota');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(15) NOT NULL COMMENT 'Identificador del usuario',
  `nombre` varchar(20) NOT NULL COMMENT 'Nombre de usuario',
  `rut` varchar(15) NOT NULL COMMENT 'Rut del usuario',
  `correo` varchar(70) NOT NULL COMMENT 'Correo del usuario',
  `cod_comuna` varchar(5) NOT NULL COMMENT 'Código de la comuna en la que habita',
  `clave` varchar(70) NOT NULL COMMENT 'Contraseña encriptada del usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`cod_comuna`),
  ADD KEY `cod_region` (`cod_region`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`cod_region`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rut` (`rut`),
  ADD KEY `cod_comuna` (`cod_comuna`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del usuario';

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`cod_region`) REFERENCES `regiones` (`cod_region`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`cod_comuna`) REFERENCES `comunas` (`cod_comuna`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
