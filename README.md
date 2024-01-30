# Jsfs GROUPE 1  LW

## Développeurs

Mahiedine Ferdjoukh



## TP 1

### présentation :

Mise en place à la main, avec Node.js, d'un petit serveur web qui fournit des réponses simples pour 3 routes élémentaires.


### Problèmes Rencontrés

Aucun problème pour le moment.


## TP 2

### présentation :

Première utilisation de socket.io avec mise à jour d'un graphique construit avec chart.js.


### Problèmes Rencontrés
- j'ai eu des erreurs sur la console du client, indiquant y'a trop d'appels recursive sauf que l'application marche trés bien.

### question 7 :  

j'ai fait en sorte que quand un client recois une donnée alors il execute les fonctions qui permettent de mettre a jour le graphique, donc remplacer les valeurs au fur et a mesure, en modifiant simplement le tableau des labels ainsi que le tableau des donnees de l'objet Chart.

## projet1 Vente aux Enchères :  

### presentation : 

Ce projet vise à créer une application de vente aux enchères en utilisant Node.js pour le serveur, Socket.io pour la communication en temps réel, et Webpack pour la gestion des dépendances et la construction des fichiers côté client.


### structure du projet : 

- Serveur Node.js : La logique du serveur est gérée par plusieurs classes dans le dossier controllers, chacune traitant des routes spécifiques.

- Webpack : Les fichiers côté client sont organisés dans le dossier client. La configuration Webpack, située dans le fichier webpack.config.js, définit les points d'entrée, les sorties, et les plugins pour la gestion des ressources statiques.

- Communication en Temps Réel : Socket.io est utilisé pour permettre la communication bidirectionnelle entre le serveur et les clients, avec des émissions de type "ping" et "donnee".

### problémes rencontrés : 




