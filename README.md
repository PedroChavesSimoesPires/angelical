<<<<<<< HEAD
# Community Portal

Portal oficial da comunidade com dois universos: **Minecraft SMP** e **Angelical X**.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router 7
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/     # UI reutilizável, layout, loja
├── config/         # Configurações do site (placeholders)
├── contexts/       # Carrinho de compras por universo
├── data/           # Dados mockados (SMP e Angelical)
├── pages/          # Páginas por rota
├── services/       # Camada de API (placeholders)
└── types/          # Tipos TypeScript
```

## Personalização

Edite `src/config/site.ts` para substituir placeholders:

- `[NOME DO PROJETO]`
- `[IP DO MINECRAFT]`
- `[LINK DO DISCORD]`
- `[NOME DO SERVIDOR]`

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — portal de escolha |
| `/minecraft` | Início do SMP |
| `/minecraft/loja` | Loja do Minecraft |
| `/minecraft/ranking` | Ranking de jogadores |
| `/angelical` | Início do Angelical X |
| `/angelical/loja` | Loja do Angelical X |
| `/angelical/comunidade` | Membros da comunidade |

## Próximos passos

- Integrar API do servidor Minecraft (status, jogadores)
- Discord OAuth para login
- Gateway de pagamento (Pix, cartão)
- Painel administrativo
- Substituir mocks em `src/services/` por chamadas reais
=======
# Community Portal

Portal oficial da comunidade com dois universos: **Minecraft SMP** e **Angelical X**.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router 7
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/     # UI reutilizável, layout, loja
├── config/         # Configurações do site (placeholders)
├── contexts/       # Carrinho de compras por universo
├── data/           # Dados mockados (SMP e Angelical)
├── pages/          # Páginas por rota
├── services/       # Camada de API (placeholders)
└── types/          # Tipos TypeScript
```

## Personalização

Edite `src/config/site.ts` para substituir placeholders:

- `[NOME DO PROJETO]`
- `[IP DO MINECRAFT]`
- `[LINK DO DISCORD]`
- `[NOME DO SERVIDOR]`

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — portal de escolha |
| `/minecraft` | Início do SMP |
| `/minecraft/loja` | Loja do Minecraft |
| `/minecraft/ranking` | Ranking de jogadores |
| `/angelical` | Início do Angelical X |
| `/angelical/loja` | Loja do Angelical X |
| `/angelical/comunidade` | Membros da comunidade |

## Próximos passos

- Integrar API do servidor Minecraft (status, jogadores)
- Discord OAuth para login
- Gateway de pagamento (Pix, cartão)
- Painel administrativo
- Substituir mocks em `src/services/` por chamadas reais
>>>>>>> 71f272f19e1bf72f304845b72f92920d271658d5
