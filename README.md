# TODO


## Git


```` shell script
git fetch --all
````

```` shell script
git pull
````

## Run 



Dependencies
````javascript
npm i 
````

Dependencies
````javascript
npm run dev 
````


## TODO - exo

CRUD - REST (./resources/product/product.resource.js)
    
Ajouter : 


<ul>
    <li>POST - route : / - retourne JSON avec message OK (message doit être la valeur envoyé dans le body de la requête via postman) / status 200 </li>
    <li>GET - route : / - retourne JSON avec message OK / status 200 </li>
    <li>GET by ID (parametre d'url) - route : /:id - retourne JSON avec message OK / status 200 SI id > 10 - retourne JSON avec message ERROR / 400 if id < 10 </li>
    <li>PUT - route : / - retourne JSON avec message / status 200 </li>
    <li>DELETE - route : / - retourne JSON avec message / status 200 </li>
</ul>

BONUS :

Réussir à chainer plusieurs middleware :  https://expressjs.com/fr/guide/writing-middleware.html

- Exemple disponible dans product.resource.js

I) 

1) Creer un nouveau endpoint ( /bonus ) - dans product.resource.js

2) Creer un middleware qui console.log("hello 1") et next() sur le suivant

3) Creer un middleware qui console.log("hello 2") et qui retourne un json

4) Utiliser ces deux middlewares sur le endpoint crée /bonus


````javascript
  routerProduct.get('/bonus', middleware1, middleware2);
````

II) 

1) Déplacer ces deux middlewares dans le dossier /services/products/product.service.js

2) Exporter ces middlewares comme fait pour le router product

3) Utiliser ces middleswares depuis le fichier router product
