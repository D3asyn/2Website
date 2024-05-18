# A projekt futtatása (Node.js és npm szükséges)

Ez a projekt Node.js modulokat használ, és futtatásához a Node.js és az npm telepítése szükséges.

## Előfeltételek:

Telepítse a Node.js-t és az npm-et a hivatalos webhelyről: [Node.js letöltése](https://nodejs.org/en/download)

## Lépések:

### Függőségek telepítése:

1. Nyissa meg a terminált, és lépjen a projekt gyökérkönyvtárába a `cd` parancs használatával.
2. Ezután futtassa a következő parancsot a `package.json` fájlban szereplő összes szükséges függőség telepítéséhez:

    ```bash
    npm install
    ```

### Szkript futtatása:

A telepítés befejezése után a következő paranccsal futtathatja a fő szkriptet:

```bash
node ./index.js
```
