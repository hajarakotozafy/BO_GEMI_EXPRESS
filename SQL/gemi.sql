-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 11 août 2022 à 09:30
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gemi`
--

-- --------------------------------------------------------

--
-- Structure de la table `entretien`
--

DROP TABLE IF EXISTS `entretien`;
CREATE TABLE IF NOT EXISTS `entretien` (
  `num_entretien` int(11) NOT NULL AUTO_INCREMENT,
  `num_intervenant` int(11) NOT NULL,
  `num_materiel` int(11) NOT NULL,
  `date_intervention` datetime NOT NULL,
  `nb_heures` int(11) NOT NULL,
  PRIMARY KEY (`num_entretien`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entretien`
--

INSERT INTO `entretien` (`num_entretien`, `num_intervenant`, `num_materiel`, `date_intervention`, `nb_heures`) VALUES
(1, 2, 1, '2022-08-15 14:00:00', 4);

-- --------------------------------------------------------

--
-- Structure de la table `intervenant`
--

DROP TABLE IF EXISTS `intervenant`;
CREATE TABLE IF NOT EXISTS `intervenant` (
  `num_intervenant` int(11) NOT NULL AUTO_INCREMENT,
  `nom_intervenant` varchar(255) NOT NULL,
  `TH_intervenant` int(11) NOT NULL,
  PRIMARY KEY (`num_intervenant`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `intervenant`
--

INSERT INTO `intervenant` (`num_intervenant`, `nom_intervenant`, `TH_intervenant`) VALUES
(2, 'Haja Ny Aina', 60000);

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
CREATE TABLE IF NOT EXISTS `materiel` (
  `num_mat` int(11) NOT NULL AUTO_INCREMENT,
  `design` varchar(255) NOT NULL,
  `caracteristique` varchar(255) NOT NULL,
  `etat` int(11) NOT NULL COMMENT '(0: bon, 1: mauvais, 2: Abimé)',
  PRIMARY KEY (`num_mat`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `materiel`
--

INSERT INTO `materiel` (`num_mat`, `design`, `caracteristique`, `etat`) VALUES
(1, 'ORDI1', 'Core-i7, 8Go de RAM', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
