# The Finals FR

**Le site communautaire francophone dédié au compétitif sur The Finals** — ranked, meta, esport, wiki.

Site construit en public dans le cadre d'une reconversion vers l'IA. Les articles sont produits via un workflow IA (draft + recherche + mise en forme) puis **validés manuellement** avant publication.

## Stack

- [Astro](https://astro.build/) 6 — static site generator, SEO-first.
- [MDX](https://mdxjs.com/) — articles en markdown enrichi.
- Déploiement : [Vercel](https://vercel.com/) (free tier).
- Hébergement du code : GitHub.
- Workflow de publication IA : *à venir* — commit automatisé de fichiers markdown dans `src/content/blog/`, re-déploiement auto via Vercel.

## Structure

```
src/
├── components/      ← header, footer, base-head, date formatter
├── content/
│   └── blog/        ← les articles (1 fichier markdown = 1 article)
├── content.config.ts← schéma des articles (title, category, pubDate...)
├── layouts/
│   └── BlogPost.astro
├── pages/
│   ├── index.astro       ← home
│   ├── a-propos.astro
│   ├── [category].astro  ← pages Ranked / Meta / Esport / Wiki / Actus / Lore
│   └── blog/
│       ├── index.astro   ← tous les articles
│       └── [...slug].astro
└── consts.ts        ← titre, description, sections de nav
```

## Catégories d'articles

Chaque article peut être catégorisé via le frontmatter :

```yaml
---
title: "Titre de l'article"
description: "Description SEO (max ~155 caractères)"
pubDate: "2026-04-19"
category: Ranked   # Ranked | Meta | Esport | Wiki | Actus | Lore
author: Benjamin
heroImage: "../../assets/blog-placeholder-1.jpg"  # optionnel
---

Corps de l'article en markdown...
```

## Développement local

```bash
npm install          # installer les dépendances
npm run dev          # lancer le serveur de dev sur http://localhost:4321
npm run build        # construire le site statique dans dist/
npm run preview      # prévisualiser le build
```

Requiert Node.js ≥ 22.12.

## Licence

- **Code** : MIT.
- **Articles** : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr).

## Crédits

Site indépendant — non affilié à **Embark Studios** ni à **Nexon**. *The Finals* et ses assets appartiennent à leurs propriétaires respectifs.
