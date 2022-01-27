# BFS

## Requirements

```sh
node >= v16.13.2
```
## Quickstart

```sh
npm && npm run dev;
```
```sh
yarn && yarn dev;
```

## Steps

Le but principal est d'écrire un algorithme qui nous affiche la distance la plus court pour rejoindre deux points dans une matrice.
Plusieurs algorithmes peuvent être utilisé, notament :
- BFS (Breadth First Search)
- DFS (Depth First Search)

_BFS est un algorithme basé sur les vertex, tandis que DFS est un algorithme basé sur les bords. La structure de données en file d'attente est utilisée dans BFS. D'autre part, DFS utilise la pile ou la récursivité._


Je décide de partir sur une implémentation du BFS.

## Implémentation

Le BFS utilse un système de `queue` pour stocker les nodes visitées.

```typescript
// Array of node
const queue = [];
```

Dans notre cas, nous devons trouver la distance la plus courte à partir d'une position de départ et d'arrivée `[X,Y]`.
Des conditions sont à préciser :
- Les directions possibles sont haut, bas, gauche, droite
- Les nodes avec un 1 sont les nodes possibles pour un déplacement, 0 sont les impossibles.

```typescript
const start = [2, 4]
const finish = [1, 0]

const queue = [start];

// Nous sommes dans un tableau avec un axe x horizontal et un axe y vertical. 
// Donc pour un déplacement en haut, X = -1, Y - 0
const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]
```

Afin de faire voir si mouvement est possible, nous devons faire une itération

```typescript
const queue = [start]

const [x, y] queue.shift() // Récupere les coords 

for (let [moveX, moveY] of directions) {
    const nextX: number = currentX + moveX;
    const nextY: number = currentY + moveY;

    if (déplacement possible) {
        queue.push([nextX, nextY])
    }
}
```

Avec cela, nous pouvons récuperer les positions des déplacements possibles.