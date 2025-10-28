# Web Awesome MCP Server

Un serveur MCP (Model Context Protocol) pour les composants Web Awesome, fournissant des outils pour explorer, générer du code et personnaliser les composants UI.

## Installation

```bash
npm install
```

## Construction

```bash
npm run build
```

## Démarrage

```bash
npm start
```

Pour le développement :

```bash
npm run dev
```

## Tests

```bash
npm test
```

## Outils Disponibles

### listComponents
Liste tous les composants Web Awesome disponibles.

**Paramètres :**
- `category` (optionnel) : Filtrer par catégorie.

### generateComponentCode
Génère du code HTML pour un composant spécifique.

**Paramètres :**
- `tagName` (requis) : Le nom du tag (ex: `wa-button`).
- `properties` (optionnel) : Objet avec les propriétés.
- `content` (optionnel) : Contenu du slot par défaut.

### getComponentDocs
Récupère la documentation détaillée d'un composant.

**Paramètres :**
- `tagName` (requis) : Le nom du tag.

### themeCustomizer
Génère du CSS pour personnaliser un thème.

**Paramètres :**
- `variables` (requis) : Objet avec les variables CSS (ex: `{ "--wa-color-brand": "#ff0000" }`).

## Utilisation avec MCP

Ce serveur peut être intégré dans des clients MCP pour fournir des fonctionnalités liées à Web Awesome.

## Intégration avec GitHub Copilot

### Prérequis

- VS Code 1.102 ou supérieur avec l'extension GitHub Copilot Chat
- Node.js (v18 ou supérieur)
- Le serveur MCP compilé (`npm run build`)

### Configuration

La méthode recommandée pour ajouter un serveur MCP est de créer un fichier `mcp.json` dans votre workspace.

1. **Créer le fichier `mcp.json` à la racine de votre projet :**
   ```json
   {
     "mcpServers": {
       "web-awesome": {
         "command": "node",
         "args": ["${workspaceFolder}/dist/index.js"]
       }
     }
   }
   ```

2. **Démarrer le serveur :**
   ```bash
   npm start
   ```

3. **Confirmer la confiance :**
   Lors du premier démarrage, VS Code vous demandera de confirmer que vous faites confiance au serveur MCP. Acceptez pour permettre l'accès aux outils.

### Utilisation dans GitHub Copilot Chat

Une fois configuré, vous pouvez utiliser les outils Web Awesome dans GitHub Copilot Chat :

```
@web-awesome List all available components
@web-awesome Generate code for a wa-button component
@web-awesome Get documentation for wa-input
@web-awesome Create a custom theme with brand color #ff6b6b
```

Vous pouvez aussi utiliser les outils en mode agent ou les référencer explicitement avec `#tool-name`.

### Gestion des serveurs MCP

- **Lister les serveurs :** `Cmd/Ctrl + Shift + P` → "MCP: List Servers"
- **Redémarrer un serveur :** Sélectionnez le serveur dans la liste et choisissez "Restart"
- **Voir les logs :** Sélectionnez "Show Output" pour diagnostiquer les problèmes
- **Remettre à zéro le cache :** "MCP: Reset Cached Tools" si les outils ne s'affichent pas

### Dépannage

- **Serveur ne démarre pas :** Vérifiez que `npm run build` a été exécuté et que le fichier `dist/index.js` existe
- **Outils non disponibles :** Utilisez "MCP: Reset Cached Tools" et redémarrez VS Code
- **Erreur de confiance :** Utilisez "MCP: Reset Trust" pour réinitialiser
- **Chemin incorrect :** Le `${workspaceFolder}` doit pointer vers la racine de votre projet

### Ressources disponibles

Le serveur expose des ressources MCP pour accéder aux données JSON des composants :

- `wa://components/wa-button` - Données complètes du composant button
- `wa://components/wa-input` - Données complètes du composant input
- etc.

### Sécurité

⚠️ **Important :** Les serveurs MCP peuvent exécuter du code arbitraire sur votre machine. Ne configurez que des serveurs provenant de sources fiables.

## Licence

MIT