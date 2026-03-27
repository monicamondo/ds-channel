# Channel Design System

Storybook de referência do produto Channel.
Documenta os dois ambientes visuais do produto: Legacy (JSF) e Angular + Bootstrap 5.

Publicado em: https://www.chromatic.com (link atualizado após primeiro deploy)

---

## Dois ambientes

**Legacy (JSF)**
Componentes em HTML + CSS + JavaScript puro.
Referência para telas antigas do Channel.

**Angular**
Componentes em Angular + Bootstrap 5 + Font Awesome.
Referência para telas modernas do Channel.

---

## Como rodar localmente

Instalar dependências (apenas na primeira vez):
```
npm install
```

Rodar o Storybook:
```
npm run storybook
```

Acessa em: http://localhost:6006

---

## Como publicar no Chromatic
```
npx chromatic --project-token=SEU_TOKEN
```

O token fica salvo localmente no arquivo `.env` — nunca sobe para o GitHub.

---

## Estrutura do projeto
```
src/legacy/          → componentes e tokens do mundo JSF
src/angular/         → componentes e tokens do mundo Angular
src/shared/          → fontes, ícones e assets compartilhados
docs/                → decisões de design e anotações de mapeamento
GEMINI.md            → contexto para o agente Antigravity
```

---

## Como contribuir

Cada nova demanda vira uma branch:
```
git checkout -b feat/nome-da-tela
```

Ao finalizar, abre um Pull Request para a branch `main`.
