# Documentation de l'API Spectacle

Cette documentation décrit les différentes routes de l'API utilisées pour la gestion des spectacles dans notre application.


## Gérer les utilisateurs

### Accueil des utilisateurs

Redirige vers la page de profil de l'utilisateur.

- **Chemin**: `/users`
- **Méthode HTTP**: GET
- **Réponse**:
  - Redirection 302: Redirige vers la page de profil de l'utilisateur.

### Obtenir les détails de l'utilisateur connecté

Permet d'obtenir les détails de l'utilisateur connecté en utilisant le jeton d'authentification.

- **Chemin**: `/users/me`
- **Méthode HTTP**: GET
- **Autorisation requise**: Oui (utilisation de jeton d'authentification)
- **Réponse**:
  - Statut 200 - OK: Retourne les détails de l'utilisateur connecté au format JSON.

### Mettre à jour les informations de l'utilisateur connecté

Permet de mettre à jour les informations de l'utilisateur connecté.

- **Chemin**: `/users/me`
- **Méthode HTTP**: PUT
- **Autorisation requise**: Oui (utilisation de jeton d'authentification)
- **Données de la requête**:
  - Données à mettre à jour (nom, email, etc.)
- **Réponse**:
  - Statut 200 - OK: Retourne les nouvelles informations de l'utilisateur connecté au format JSON avec un message indiquant que la mise à jour a été réussie.


## Gestion de l'authentification et de l'accès

### Formulaire de connexion

Affiche le formulaire de connexion.

- **Chemin**: `/access/login`
- **Méthode HTTP**: GET
- **Réponse**:
  - Redirection 302: Redirige vers la page de formulaire de connexion.

### Connexion

Permet à un utilisateur de se connecter avec ses identifiants.

- **Chemin**: `/access/login`
- **Méthode HTTP**: POST
- **Données de la requête**:
  - Identifiant de l'utilisateur (login)
  - Mot de passe de l'utilisateur
- **Réponse**:
  - Statut 200 - OK: Si l'utilisateur est authentifié avec succès, renvoie un message indiquant que l'utilisateur est connecté.
  - Statut 401 - Unauthorized: Si l'authentification échoue en raison d'un mot de passe incorrect.
  - Statut 401 - Unauthorized: Si l'authentification échoue en raison d'un identifiant inconnu.

### Formulaire d'inscription

Affiche le formulaire d'inscription.

- **Chemin**: `/access/register`
- **Méthode HTTP**: GET
- **Réponse**:
  - Redirection 302: Redirige vers la page de formulaire d'inscription.

### Inscription

Permet à un utilisateur de s'inscrire avec ses informations.

- **Chemin**: `/access/register`
- **Méthode HTTP**: POST
- **Données de la requête**:
  - Données de l'utilisateur à enregistrer (login, password, etc.)
- **Réponse**:
  - Statut 201 - Created: Si l'inscription est réussie, renvoie les informations de l'utilisateur nouvellement enregistré au format JSON.
  - Statut 409 - Conflict: Si l'inscription échoue en raison d'un conflit (par exemple, un utilisateur avec le même identifiant existe déjà).

### Déconnexion

Permet à un utilisateur de se déconnecter.

- **Chemin**: `/access/logout`
- **Méthode HTTP**: GET
- **Réponse**:
  - Statut 200 - OK: Renvoie un message indiquant que l'utilisateur est déconnecté.









































## Créer un spectacle

Permet de créer un nouveau spectacle.

- **Chemin**: `/shows`
- **Méthode HTTP**: POST
- **Données de la requête**:
  - `titre`: Titre du spectacle (chaîne de caractères)
  - `date`: Date du spectacle (format YYYY-MM-DD)
  - `description`: Description du spectacle (chaîne de caractères)
- **Réponse**:
  - Statut 201 - Created: Le spectacle a été créé avec succès. Retourne les détails du spectacle créé.
  - Statut 400 - Bad Request: Si les données de la requête sont incorrectes ou incomplètes.

## Récupérer tous les spectacles

Permet de récupérer la liste de tous les spectacles disponibles.

- **Chemin**: `/shows`
- **Méthode HTTP**: GET
- **Réponse**:
  - Statut 200 - OK: Retourne la liste des spectacles disponibles.

## Réserver un ticket

Permet de réserver un ticket pour un spectacle spécifique.

- **Chemin**: `/user/takeTicket/:showId`
- **Méthode HTTP**: PUT
- **Paramètres de la requête**:
  - `showId`: Identifiant du spectacle pour lequel réserver un ticket (chaîne de caractères)
- **Réponse**:
  - Statut 200 - OK: Le ticket a été réservé avec succès.
  - Statut 404 - Not Found: Si le spectacle avec l'identifiant spécifié n'existe pas.

## Annuler une réservation de ticket

Permet d'annuler une réservation de ticket pour un spectacle spécifique.

- **Chemin**: `/user/cancelTicket/:showId`
- **Méthode HTTP**: DELETE
- **Paramètres de la requête**:
  - `showId`: Identifiant du spectacle pour lequel annuler la réservation (chaîne de caractères)
- **Réponse**:
  - Statut 200 - OK: La réservation de ticket a été annulée avec succès.
  - Statut 404 - Not Found: Si le spectacle avec l'identifiant spécifié n'existe pas.
