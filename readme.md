<img src="./assets/screeb-by-christopher_t_howlett-128_128.png" height="64"> <img src="./assets/screeps.png" height="64"> <img src="./assets/hypercube.png" height="64"> <img src="./assets/typescript.png" height="64">

```
 .▄▄ ·  ▄▄· ▄▄▄  ▄▄▄ .▄▄▄ .▄▄▄▄·
 ▐█ ▀. ▐█ ▌▪▀▄ █·▀▄.▀·▀▄.▀·▐█ ▀█▪
 ▄▀▀▀█▄██ ▄▄▐▀▀▄ ▐▀▀▪▄▐▀▀▪▄▐█▀▀█▄
 ▐█▄▪▐█▐███▌▐█•█▌▐█▄▄▌▐█▄▄▌██▄▪▐█
  ▀▀▀▀ ·▀▀▀ .▀  ▀ ▀▀▀  ▀▀▀ ·▀▀▀▀
```

_Boite à outils pour [Screepers](https://screeps.com/)_

# Pre-requis

    Node >= 16.14.2

# Installation

### **1. Cloner le repository :**

_HTTP_

    git clone https://github.com/AVillalonga/Screeb.git

_SSH_

    git clone git@github.com:AVillalonga/Screeb.git

### **2. Installer les packages via npm**

```
npm install
```

### **3. Configuration**

Vous trouverez le fichier "`.template.env`" dans le sous dossier "`Screeb/screeb/`" dupliquer le
dans le même répertoire et nommé votre duplicata "`.env`".

Ouvrer le fichier et remplacer les valeurs. Les valeurs commençant par un dunder "`__`" sont optionnelles.

# Scripts

|          script name |                                                                            |
| -------------------: | :------------------------------------------------------------------------- |
|            `compile` | Transpile le typescript en Commonjs                                        |
|            `migrate` | Lance le script de migration contenu dans "`Screeb/screeb/bin/migrate.js`" |
|            `webpack` | Bundle avec webpack en mode production                                     |
|         `webpackDev` | Bundle avec webpack en mode developpement                                  |
| `webpackDev&Migrate` | Bundle avec webpack en mode developpement et execute la 'migration'        |
|              `watch` | `Compile`, `Webpack` et `Migrate` à la volée                               |
|               `test` | Lance les testes ([Jest](https://jestjs.io/fr/)) **_⚠️ CUMING SOON_**      |
|              `clean` | Supprime le dossier `Screeb/release/` **_⚠️ CUMING SOON_**               |

# Arbre de fichiers

```
┌ /ROOT/
│   .gitignore                          # gitignore
│   readme.md                           # <———————— Vous êtes ici !
│
├───assets
│       hypercube.png                   # logo webpack
│       screeb_by_quill_us.png          # logo screeb
│       screeb_by_quill_us__128_128.png # logo screeb (128x128px)
│       screeps.png                     # logo screeps
│       typescript.png                  # logo typescript
│
└───screeb
    │   .template.env                   # template des variables d'environnement
    │   package-lock.json               #
    │   package.json                    # Fichier de configuration Node
    │   tsconfig.json                   # Fichier de configuration Typescript
    │   webpack.config.js               # Fichier de configuration Webpack
    │
    ├───bin
    │       gameover.js                 # Afficher 'Game over'
    │       migrate.js                  # Script de migration (déplace le bundle vers le dossier du jeu)
    │
    └───src                             # [dir] contient le code source
           main.ts                      # Contient la Gameloop

```
