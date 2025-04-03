# **Argent Bank - Phase 1 : Authentification des utilisateurs**

## **Description du projet**
Argent Bank est une application bancaire web permettant aux utilisateurs de gérer leurs comptes et leurs profils. La phase 1 du projet se concentre sur l'authentification des utilisateurs et la gestion de leurs informations personnelles.

---

## **Fonctionnalités principales**
- **Visite de la page d'accueil** : L'utilisateur peut accéder à une page d'accueil statique.
- **Connexion** : L'utilisateur peut se connecter au système via un formulaire sécurisé.
- **Déconnexion** : L'utilisateur peut se déconnecter du système.
- **Visualisation du profil** : Une fois connecté, l'utilisateur peut consulter ses informations personnelles.
- **Modification du profil** : L'utilisateur peut mettre à jour ses informations personnelles et les enregistrer dans la base de données.

---

## **Technologies utilisées**
### Frontend
- **React (v17.0.2)** : Framework JavaScript pour construire l'interface utilisateur.
- **Redux Toolkit** :
  - `createSlice` pour gérer les actions et reducers.
  - `createAsyncThunk` pour les appels API asynchrones.
- **React Router (v6.0.2)** : Gestion des routes pour naviguer entre les pages.
- **Axios** : Librairie pour effectuer les appels API.
- **css** : Préprocesseur CSS pour styliser l'application.
- **Vitest** :  Framework de test rapide et léger basé sur Vite.
- **@testing-library/react**: Fournit des utilitaires pour tester les composants React.

### Backend
- **Node.js v12**
- **MongoDB Community Server**

---

## **Installation et configuration**

### Prérequis
- Node.js v12 ou supérieur
- MongoDB Community Server

### Étapes d'installation

#### Backend
1. Clonez le repository backend :
   ```bash
   git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git Project-10-Bank-API-Backend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur backend :
   ```bash
   npm run dev:server
   ```
4. Initialisez la base de données avec deux utilisateurs :
   ```bash
   npm run populate-db
   ```

#### Frontend
1. Clonez le repository frontend :
   ```bash
   git clone https://github.com/daddyjanno/ArgentBank-app.git ArgentBank-app
   ```
2. Installez les dépendances frontend :
   ```bash
   npm install
   ```
3. Lancez l'application frontend :
   ```bash
   npm start dev
   ```

---

## **Structure des fichiers**
### Frontend
```
src/
├── components/        # Composants réutilisables (Header, Footer, LogoutButton, etc.)
├── features/          # Redux slices (userSlice)
├── pages/             # Pages principales (Home, Login, User, Logout)
├── store/             # Configuration du store Redux
└── styles/            # Fichiers Sass pour le style
```

### Backend
```
api/
├── controllers/       # Gestion des endpoints API
├── models/            # Modèles de données MongoDB
└── routes/            # Définition des routes API
```

---

## **Endpoints API utilisés**
### Authentification
- `POST /api/v1/user/login` : Connecte un utilisateur et retourne un token.
- `POST /api/v1/user/profile` : Récupère les informations utilisateur après connexion.
- `PUT /api/v1/user/profile` : Met à jour les informations utilisateur.

---

## **Instructions pour tester**
### Tests manuels uniquement (pas de tests automatisés)
1. Connectez-vous avec un email valide (exemple : `tony@stark.com`) et un mot de passe correct (`password123`).
2. Essayez de vous connecter avec des identifiants invalides pour vérifier la gestion des erreurs.
3. Modifiez vos informations personnelles depuis la page profil.

---
### Tests automatisés
### Description des tests
Le projet inclut des tests automatisés pour valider les fonctionnalités principales de l'application. Ces tests utilisent **Vitest** et **React Testing Library** pour simuler les interactions utilisateur et vérifier le comportement attendu.

### Types de tests
1. **Tests unitaires** :
   - Vérifient les reducers Redux (exemple : `logoutUser`).
2. **Tests d'intégration** :
   - Valident l'interaction entre les composants React et le store Redux.
   - Exemple : Test du formulaire de connexion.
3. **Tests end-to-end (E2E)** :
   - Simulent le comportement utilisateur complet (connexion, affichage du profil, déconnexion).

---

### Exemple de test : Formulaire de connexion
#### Fichier : `src/__tests__/Login.test.jsx`
Ce test vérifie que le formulaire de connexion affiche un message d'erreur lorsque des identifiants invalides sont soumis.

---

### Exécution des tests
Pour exécuter les tests :

1. Assurez-vous que toutes les dépendances nécessaires sont installées :
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

2. Lancez les tests avec Vitest :
npm run test

text

3. Résultats attendus :
- Les tests réussis afficheront un ✅ dans la console.
- Les tests échoués afficheront un ❌ avec des détails sur l'erreur.

---

### Résolution des erreurs courantes
1. **Erreur : "useNavigate() may be used only in the context of a `<Router>` component"**  
Solution : Enveloppez le composant testé dans un `<MemoryRouter>` lors du rendu.

2. **Erreur : "Found multiple elements with the text: /sign in/i"**  
Solution : Utilisez `getByRole` pour cibler spécifiquement le bouton "Sign In".

---

### Importance des tests
Les tests automatisés garantissent la fiabilité et la maintenabilité du projet en détectant rapidement les régressions et en validant les comportements attendus.


## **Problèmes connus**
1. Message "User not found" si l'utilisateur n'existe pas dans la base de données backend.


---

## **Contributeurs**
Projet réalisé dans le cadre d'une formation OpenClassrooms.

---

## **Dernière mise à jour**
Ce README a été mis à jour le 03 avril 2025.

---
