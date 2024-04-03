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


## Comment utiliser

1. Cloner ce dépôt sur votre machine locale.
2. Allez dans le dossier du projet Encheres/ .
3. Assurez-vous d'avoir Node.js installé sur votre machine.
4. Installez les dépendances dans server/ et client/ avec `npm install`.
5. Exécuter webpack dans le dossier client/ avec `npm run build`.    
6. Lancez le serveur dans le dossier server/ avec `node index.js`.
7. Accédez à l'application dans votre navigateur en ouvrant `http://localhost:8080`.


### structure du projet : 

- Serveur Node.js : La logique du serveur est gérée par plusieurs classes dans le dossier controllers, chacune traitant des routes spécifiques.

- Webpack : Les fichiers côté client sont organisés dans le dossier client. La configuration Webpack, située dans le fichier webpack.config.js, définit les points d'entrée, les sorties, et les plugins pour la gestion des ressources statiques.

- Communication en Temps Réel : Socket.io est utilisé pour permettre la communication bidirectionnelle entre le serveur et les clients, avec des émissions de type "ping" et "donnee".

### Fonctionnalités

- **Commissaire-priseur :**
  - Lancer une nouvelle enchère en spécifiant l'objet et le prix initial.
  - Arrêter une enchère en cours.
  - Visualiser les offres en temps réel.

- **Enchérisseur :**
  - Participer à une enchère en cours en plaçant des offres.
  - Recevoir des notifications en temps réel sur le déroulement de l'enchère.
  - Visualiser les détails de l'enchère en cours.

## Technologies utilisées

- **Socket.IO :** Pour la communication en temps réel entre le serveur et les clients.
- **HTML/CSS/JavaScript :** Pour la structure, le style et le comportement de l'application web.
- **Node.js :** Pour exécuter le serveur côté backend.
- **Webpack :** Pour la gestion des modules JavaScript et la création de bundles.





## projet2 Gestion des Spectacles

application de gestion des spectacles ! Cette application vous permet de consulter les spectacles disponibles, de réserver des tickets pour ces spectacles, et de visualiser vos réservations.

### Fonctionnalités

- Affichage de la liste des spectacles disponibles.
- Ajout de réservations pour les spectacles sélectionnés.
- Visualisation et suppression des réservations effectuées.

### Comment utiliser

1. Cloner ce dépôt sur votre machine locale.
2. Allez dans le dossier du projet /Spectacle .
3. Assurez-vous d'avoir Node.js installé sur votre machine.
4. Installez les dépendances dans server/ et client/ avec `npm install`.
5. Exécuter webpack dans le dossier client/ avec `npm run build`.    
6. Lancez le serveur dans le dossier server/ avec `node bin/www`.
7. Accédez à l'application dans votre navigateur en ouvrant `http://localhost:3000`.



4. **Configurer la base de données MongoDB :**
   - Assurez-vous d'avoir MongoDB installé sur votre machine.
   - Créez une base de données MongoDB nommée "spectacleBase".
   - Définissez les informations de connexion dans le fichier `config.js`.


### Utilisation

1. **Authentification :** Lorsque vous accédez à l'application, vous serez accueilli par une page de connexion. Connectez-vous en utilisant vos identifiants, impossible d'accéder a la page de admin si vous n'étes pas autoriser (vous étes pas admin) . 

2. **Affichage des spectacles :** Après connexion, la liste des spectacles disponibles sera affichée. Vous pouvez consulter les détails de chaque spectacle et choisir celui qui vous intéresse.
En tant q'admin vous avez la possibilité d'ajouter un des spectacles, ainsi que de les supprimer.  

3. **Ajout de réservations :** Pour réserver des tickets pour un spectacle, cliquez sur le bouton "Réserver" à côté du spectacle choisi. Vous avez la possibilité d'acheter des ticktes sous réserve des places 
disponible. 


4. **Visualisation et suppression des réservations :** Vous pouvez visualiser vos réservations sur la page d'accueil après connexion. Chaque réservation est répertoriée avec les détails du spectacle correspondant. Pour supprimer une réservation, cliquez sur le bouton "Supprimer" à côté de la réservation, Cela supprime une réservation, donc si vous voulez supprimer plusieurs réservations d'un méme spectacle il faut cliquer plusieurs fois sur le bouton. 
Si l'admin supprime un spectacle les tickets des utilisateur correspondant à au spectacle seront annulées automatiquement.





### Technologies Utilisées

- **Node.js** : Plateforme de développement JavaScript côté serveur.
- **Express.js** : Cadre d'application web pour Node.js.
- **MongoDB** : Base de données NoSQL utilisée pour stocker les spectacles et les réservations.
- **Mongoose** : Bibliothèque de modélisation d'objets MongoDB pour Node.js.
- **Socket.IO** : Bibliothèque JavaScript pour la communication en temps réel entre le client et le serveur.









