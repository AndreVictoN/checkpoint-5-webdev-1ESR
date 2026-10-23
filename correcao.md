#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Correto
Nota: 1,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 10,00

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 10,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 10,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** PokéAPI (`https://pokeapi.co/api/v2/`, geração 4 / Sinnoh).  
**Caminho base:** raiz (`app/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next`; `app/layout.js` e `app/page.js`.

**Critério 2 — Lista com axios:** `app/API/api.js` cria instância axios; `app/page.js` faz `api.get("generation/4/")` e lista via `PokeList`.

**Critério 3 — useState e useEffect:** home e `app/details/[id]/page.js` usam ambos; `"use client"`.

**Critério 4 — 6 componentes:** `PokeList`, `Pokemon`, `PokemonAttributes`, `PokemonClass`, `PokemonParams`, `Sprites` (util `Capitalize` não conta).

**Critério 5 — Props:** vários filhos com props (`PokeList`←pokemon, `Pokemon`←pokemon/id, `Sprites`, `PokemonAttributes`, etc.).

**Critério 6 — Detalhes + axios + navegação:** `Link` para `/details/[id]`; detalhe busca espécie e sprites/tipos com `api.get`.

**Critério 7 — Comentários:** comentários úteis em page, details, API e componentes.

**Critério 8 — Commits:** 18 commits na `main`.

**Critério 9 — README / deploy link:** instruções (`npm install` / `npm run dev`) + `https://sinnoh-pokemon.vercel.app/`.

**Critério 10 — Deploy Vercel:** LIVE `https://sinnoh-pokemon.vercel.app/` (HTTP 200).

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). Há `setError` sem estado/`useState` de erro e sem UI de loading/erro na lista (só fallback Suspense no detalhe).
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Sem `useMemo`/`useCallback`/`useRef`.
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). Sem filtro textual na lista.
**Extra 4 — localStorage:** Não conquistado (+0,00). Ausente.
**Resumo extras:** nenhum; total 10,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/AndreVictoN/checkpoint-5-webdev-1ESR`
- **branch:** `main`
- **trecho log:** `5cdcc63` Update team members … `1f83f15` Initial commit from Create Next App
- **autores:** André Victor (17), Gabriel-Novaga (1)
- **commits (C8):** 18
