DROP DATABASE IF EXISTS phpmanage;
CREATE DATABASE phpmanage;
USE phpmanage;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `apikey` varchar(60) NOT NULL,
  `duration_limit` int(10) unsigned DEFAULT NULL,
  `banned` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `username` (`apikey`)
);

CREATE TABLE `history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_key` varchar(60) NOT NULL,
  `target` text NOT NULL,
  `port` text NOT NULL,
  `duration` text NOT NULL,
  `method` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_key` (`user_key`)
);
