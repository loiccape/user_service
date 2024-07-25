1. Objectif
Le but de ce microservice est de gérer les utilisateurs de manière efficace et sécurisée. Il permettra de créer, lire, mettre à jour et supprimer des utilisateurs. Ce service pourra être connecté à d'autres microservices pour créer une application complète.

2. Technologies
Backend: Node.js avec Express.js
Base de données: MongoDB
Authentification: JSON Web Tokens (JWT)
Validation des données: Joi

3. Fonctionnalités
Le microservice "User" devra inclure les fonctionnalités suivantes :

Inscription d'un utilisateur
Connexion d'un utilisateur
Récupération des informations d'un utilisateur
Mise à jour des informations d'un utilisateur
Suppression d'un utilisateur
Récupération de la liste des utilisateurs (pour les administrateurs)

4. Schéma de Données
Le schéma des données utilisateur dans MongoDB pourrait ressembler à ceci :

{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "role": "string", // e.g., user, admin
  "createdAt": "date",
  "updatedAt": "date"
}

5. Endpoints de l'API
5.1. Inscription d'un utilisateur
Méthode: POST
URL: /api/users/register
Description: Créer un nouveau compte utilisateur.
Corps de la requête:

{
  "username": "string",
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string"
}

Réponse:

{
  "message": "User registered successfully",
  "userId": "ObjectId"
}


5.2 Connexion d'un utilisateur
Méthode: POST
URL: /api/users/login
Description: Authentifie un utilisateur et renvoie un token JWT.
Corps de la requête:

{
  "email": "string",
  "password": "string"
}

Réponse:

{
  "message": "Login successful",
  "token": "JWT token"
}


5.3. Récupération des informations d'un utilisateur
Méthode: GET
URL: /api/users/:id
Description: Récupère les informations d'un utilisateur spécifique.
Paramètres d'URL: id (ObjectId de l'utilisateur)
Réponse:
json
Copier le code
{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "role": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
5.4. Mise à jour des informations d'un utilisateur
Méthode: PUT
URL: /api/users/:id
Description: Met à jour les informations d'un utilisateur spécifique.
Paramètres d'URL: id (ObjectId de l'utilisateur)
Corps de la requête (au moins un des champs suivants):
json
Copier le code
{
  "username": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "password": "string"
}
Réponse:
json
Copier le code
{
  "message": "User updated successfully"
}

5.5. Suppression d'un utilisateur
Méthode: DELETE
URL: /api/users/:id
Description: Supprime un utilisateur spécifique.
Paramètres d'URL: id (ObjectId de l'utilisateur)
Réponse:

{
  "message": "User deleted successfully"
}

5.6. Récupération de la liste des utilisateurs (pour les administrateurs)
Méthode: GET
URL: /api/users
Description: Récupère la liste de tous les utilisateurs (accessible uniquement pour les administrateurs).
Réponse:

[
  {
    "_id": "ObjectId",
    "username": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "role": "string",
    "createdAt": "date",
    "updatedAt": "date"
  },
  ...
]

