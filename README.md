# Anny & Biel — Grand Prix do Casal

Jogo web local para duas pessoas, com corrida em 3D, dado, perguntas secretas, desafios, pit stops, turbos e estatísticas.

## Pista

O traçado e a ambientação são inspirados no circuito físico do Autódromo José Carlos Pace, em São Paulo (Interlagos). A arte, os carros e a identidade visual são originais: não há marcas, pinturas de equipes ou logotipos oficiais utilizados.

## Executar

No Windows, execute `iniciar-jogo.bat` e abra `http://localhost:8080`.

Ou, com Node.js instalado:

```bash
npx serve -l 8080 .
```

## Recursos

- Dois jogadores no mesmo dispositivo e respostas protegidas até a revelação.
- Pista 3D com carros de rodas expostas, boxes, arquibancadas, árvores, grid e casas físicas.
- 336 variações de perguntas e 180 desafios seguros.
- Dado, turbo, pane, surpresa, Music Pit, pit stop e checkpoint.
- Web Audio API, cartão de vitória, prêmios e persistência em `localStorage`.

