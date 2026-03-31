# Channel Design System

Storybook de referência do produto Channel.
Documenta os dois ambientes visuais do produto: Legacy (JSF) e Angular + Bootstrap 5.

Publicado em: https://www.chromatic.com (link atualizado após primeiro deploy)

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
src/components        → componentes - header - button - table
src/tokens            → design tokens - tipografia - cores - espaçamentos
GEMINI.md            → contexto para o agente Antigravity
```

---

## Como contribuir

Cada nova demanda vira uma branch:
```
git checkout -b feat/nome-da-tela
```

Ao finalizar, abre um Pull Request para a branch `main`.
