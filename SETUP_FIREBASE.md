# Guide de Configuration Firebase

Pour que votre application fonctionne, vous devez créer un projet Firebase gratuit et récupérer vos clés de configuration.

## Étape 1 : Créer le projet
1. Allez sur [console.firebase.google.com](https://console.firebase.google.com/) et connectez-vous avec votre compte Google.
2. Cliquez sur **"Ajouter un projet"** (ou "Create a project").
3. Donnez un nom (ex: `Memorisation-Classe`) et continuez.
4. Désactivez Google Analytics (pas nécessaire ici) et cliquez sur **"Créer le projet"**.

## Étape 2 : Créer l'application Web
1. Une fois le projet créé, cliquez sur l'icône **Web** (le symbole `</>`) au centre de la page.
2. Donnez un nom à l'app (ex: `App-Memorisation`) et cliquez sur **"Enregistrer l'application"**.
3. **IMPORTANT** : Vous allez voir un bloc de code avec `const firebaseConfig = { ... }`.
4. Copiez tout le contenu de l'objet `firebaseConfig` (ce qui est entre les accolades `{ ... }`).
5. Ouvrez le fichier `firebase-config.js` sur votre ordinateur et remplacez la partie correspondante par ce que vous venez de copier.

## Étape 3 : Configurer la Base de Données (Firestore)
1. Dans le menu de gauche de la console Firebase, cliquez sur **"Création"** puis **"Firestore Database"**.
2. Cliquez sur **"Créer une base de données"**.
3. Choisissez l'emplacement (ex: `eur3` pour l'Europe) et faites Suivant.
4. Choisissez **"Commencer en mode test"** (Important pour que ça marche tout de suite sans configuration complexe).
   > *Note : Le mode test est ouvert pendant 30 jours. Pour une utilisation à long terme en classe, c'est suffisant pour commencer, mais on pourra sécuriser plus tard.*
5. Cliquez sur **"Activer"**.

## Étape 4 : Configurer le Stockage des Images (Storage)
1. Dans le menu de gauche, cliquez sur **"Storage"**.
2. Cliquez sur **"Commencer"**.
3. Choisissez **"Commencer en mode test"** et faites Suivant -> Terminé.

## C'est tout !
Une fois que vous avez copié les clés dans `firebase-config.js`, ouvrez `admin.html` dans votre navigateur pour ajouter votre première question !
