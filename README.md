# PRISMA JS BLOG

## INSTRUCTIONS:

1. To create a new empty Database, use migration: npx prisma migrate dev --name create_table_post
2. To seed the Database with data from db.json file, use: node seedDB.js
3. To execute functions call them in CLI: node index 'function name' (i.e. node index create)
4. Parameters needed by each function are stored in index.js, change them from there

## Panoramica

1. **Eseguire quanto segue:**

   - Create un nuovo progetto Node.js (senza Express) ed installate la Prisma CLI e il Prisma Client.

   - Successivamente definite un modello chiamato “Post” nel file schema.prisma, che deve contenere le seguenti proprietà:

     1. title
     2. slug (deve essere univoco)
     3. image (non obbligatoria)
     4. content
     5. published (boolean)
     6. createdAt
     7. updatedAt

   - Una volta creato il modello, dovete implementare le operazioni di CRUD specifiche per questo modello. Questo significa che dovete realizzare:
     1. Una funzione che consente di creare un Post.
     2. Una funzione che permette di leggere un Post usando lo slug.
     3. Una funzione che restituisce l’elenco di tutti i Post.
     4. Una funzione che consente di modificare un Post.
     5. Una funzione che elimina un Post.

2. **Bonus:**
   1. Crea una funzione che restituisca solo i Post pubblicati.
   2. Crea una funzione che restituisca solo i Post che contengono una determinata stringa nel contenuto.
   3. Tramite un argomento CLI poter indicare quale funzione eseguire dal file.
