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

## Licence

MIT