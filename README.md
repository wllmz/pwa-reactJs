

 # Projet de Simulation de Scores de Football
Ce projet comprend la création d'une application web de simulation de scores de football qui utilise React pour le front-end et une API REST simple construite avec Express.js pour le back-end. Un aspect clé du front-end est son développement en tant qu'application Progressive Web App (PWA), permettant une expérience utilisateur améliorée, y compris la disponibilité hors ligne et des performances optimisées. L'objectif est de simuler des scores de match de football qui s'actualisent aléatoirement toutes les minutes. En outre, nous avons intégré une fonctionnalité pour permettre à l'application de montrer les derniers scores connus même en étant hors ligne, grâce à l'utilisation du stockage local (localStorage).

## 1. API Express.js
L'API a été conçue pour simuler l'actualisation des scores de deux équipes (Team A et Team B) de manière aléatoire toutes les minutes. Elle expose une route /scores qui retourne les scores actuels des deux équipes sous format JSON.

### Points Clés :
Les scores sont stockés en mémoire, donc ils sont réinitialisés si l'API est redémarrée.

## 2. Application React (PWA)
L'application React, développée en tant que PWA, affiche les scores des deux équipes et les met à jour automatiquement toutes les minutes en interrogeant l'API. Elle utilise les hooks useState et useEffect pour gérer l'état des scores et pour effectuer les appels API périodiques.

### Gestion Hors Ligne :
Utilisation du localStorage pour stocker les derniers scores connus quand l'application est en ligne.
Affichage des scores stockés dans localStorage en cas de perte de connexion Internet, permettant à l'utilisateur de voir les derniers scores même hors ligne.
La nature PWA de l'application assure que les utilisateurs peuvent installer l'application sur leurs appareils et accéder aux fonctionnalités de base, y compris la consultation des derniers scores, même sans connexion Internet.

## 3. Page Hors Ligne (offline.html)
Une page statique offline.html a été préparée pour s'afficher lorsque l'application est en mode hors ligne. Elle informe l'utilisateur qu'il est hors ligne et tente d'afficher les derniers scores connus en lisant les données du localStorage.


### Démarrage du Projet

API Back-end :
Installer les dépendances : npm install.

Démarrer l'API : npm start.

Application React (PWA) :
Installer les dépendances : npm install.

Démarrer l'application : npm start.
