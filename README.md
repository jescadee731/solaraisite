# Solar AI - Landing Page

Un site de chargement moderne et animé pour l'application Solar AI - Tanning Assistant avec redirection automatique vers l'App Store.

## 🌟 Fonctionnalités

- **Animation de chargement élégante** avec un soleil animé
- **Barre de progression fluide** avec effets brillants
- **Redirection automatique** vers l'App Store après le chargement
- **TikTok Pixel intégré** pour le tracking analytique
- **Design responsive** adapté à tous les écrans
- **Animations CSS3** modernes et fluides

## 🚀 Démarrage rapide

1. **Installation des dépendances :**
   ```bash
   npm install
   ```

2. **Lancement en mode développement :**
   ```bash
   npm start
   ```

3. **Build pour production :**
   ```bash
   npm run build
   ```

## 📱 Fonctionnement

1. **Chargement** : Animation de progression de 0% à 100%
2. **Affichage** : Présentation des fonctionnalités clés de l'app
3. **Redirection** : Redirection automatique vers l'App Store après 2 secondes

## 🎨 Personnalisation

### Modifier le temps de redirection
Dans `src/App.tsx`, ligne 17 :
```typescript
setTimeout(() => {
  window.location.href = 'https://apps.apple.com/us/app/solar-ai-tanning-assistant/id6745706560';
}, 2000); // Modifier cette valeur (en millisecondes)
```

### Modifier la vitesse de chargement
Dans `src/App.tsx`, ligne 20 :
```typescript
return prev + 2; // Modifier cette valeur pour changer la vitesse
```

### Personnaliser les couleurs
Dans `src/App.css`, modifier les gradients :
```css
background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #4ecdc4 100%);
```

## 📊 Analytics TikTok

Le pixel TikTok est configuré avec l'ID : `D0URKCRC77U2P4BEBNUG`

Le code de tracking est automatiquement injecté dans le `<head>` de la page et track :
- Page views automatiques
- Prêt pour des événements personnalisés

## 🔗 Lien App Store

L'application redirige vers : https://apps.apple.com/us/app/solar-ai-tanning-assistant/id6745706560

## 🛠 Technologies utilisées

- **React 18** avec TypeScript
- **CSS3** avec animations avancées
- **TikTok Pixel** pour analytics
- **Create React App** pour le scaffolding

## 📱 Solar AI Features

- 🔍 **Scan facial** pour détecter le type de peau
- 📱 **Routine personnalisée** basée sur l'index UV
- ⏰ **Minuteurs guidés** et rappels
- 🌞 **Bronzage sécurisé** et uniforme

## 🌐 Déploiement

Pour déployer en production :

1. Build du projet :
   ```bash
   npm run build
   ```

2. Le dossier `build/` contient les fichiers statiques prêts pour le déploiement

3. Compatible avec tous les services d'hébergement :
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 📄 Licence

© 2025 Mercura Labs Inc. Tous droits réservés.
