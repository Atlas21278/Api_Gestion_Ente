TP - Création de son API

Uml
Avion : - 
immatriculation varchar(10) PK
marque varchar(100)
modele varchar(100)
heuresVol int

Mécaniciens : 
id int PK 
nom varchar(100)
prenom varchar(100)
heuresVol int 

Entretiens : 
id int PK
dateEntretien 
typeEntretien varchar(100)
immatriculationAvion varchar(10) FK 
idMecanicien int FK 
remarque text


| Endpoint                        | Méthode HTTP | Paramètres                                      | Description                                             |
|---------------------------------|--------------|-------------------------------------------------|---------------------------------------------------------|
| `/avions`                       | GET          |                                                 | Récupère la liste de tous les avions.                   |
| `/avions`                       | POST         | Corps: { immatriculation, marque, modele, ... } | Ajoute un nouvel avion.                                 |
| `/avions/:immatriculation`      | GET          | immatriculation                                 | Récupère les détails d'un avion spécifique.             |
| `/avions/:immatriculation`      | PUT          | immatriculation, Corps: { marque, modele, ... } | Met à jour les détails d'un avion spécifique.           |
| `/avions/:immatriculation`      | DELETE       | immatriculation                                 | Supprime un avion spécifique.                           |
| `/mecaniciens`                  | GET          |                                                 | Récupère la liste de tous les mécaniciens.              |
| `/mecaniciens`                  | POST         | Corps: { nom, prenom, ... }                     | Ajoute un nouveau mécanicien.                           |
| `/mecaniciens/:id`              | GET          | id                                              | Récupère les détails d'un mécanicien spécifique.        |
| `/mecaniciens/:id`              | PUT          | id, Corps: { nom, prenom, ... }                 | Met à jour les détails d'un mécanicien spécifique.      |
| `/mecaniciens/:id`              | DELETE       | id                                              | Supprime un mécanicien spécifique.                      |
| `/entretiens`                   | GET          |                                                 | Récupère la liste de tous les entretiens.               |
| `/entretiens`                   | POST         | Corps: { dateEntretien, typeEntretien, ... }    | Ajoute un nouvel entretien.                             |
| `/entretiens/:id`               | GET          | id                                              | Récupère les détails d'un entretien spécifique.         |
| `/entretiens/:id`               | PUT          | id, Corps: { dateEntretien, typeEntretien, ... }| Met à jour les détails d'un entretien spécifique.       |
| `/entretiens/:id`               | DELETE       | id                                              | Supprime un entretien spécifique.                       |








| Endpoint                        | Erreur                                           | Description                                                  |
|---------------------------------|--------------------------------------------------|--------------------------------------------------------------|
| `POST /avions`                  | AUCUN AVION AJOUTE                               | Peut-être manque-t-il des données. L’avion n’a pas été ajouté.|
| `GET /avions`                   | AUCUN AVION TROUVE                               | Aucun avion n’a été trouvé.                                  |
| `GET /avions/:immatriculation`  | AUCUN AVION TROUVE - AVEC L'IMMATRICULATION :    | Impossible de récupérer l’avion associé à l’immatriculation passée en paramètres. |
| `GET /avions`                   | AUCUN AVION TROUVE - AVEC CES PARAMETRES :       | Impossible de récupérer l’avion associé aux paramètres envoyés. |
| `PUT /avions/:immatriculation`  | AUCUN AVION MODIFIE                              | Peut-être que l'immatriculation n'existe pas en BDD. L’avion n’a pas été mis à jour. |
| `GET /mecaniciens`              | AUCUN MECANICIEN TROUVE                          | Aucun mécanicien n’a été trouvé.                             |
| `GET /mecaniciens/:id`          | AUCUN MECANICIEN TROUVE - AVEC L'ID :            | Impossible de récupérer le mécanicien associé à l’ID passé en paramètres. |
| `PUT /mecaniciens/:id`          | AUCUN MECANICIEN MODIFIE                         | Peut-être que l'ID n'existe pas en BDD. Le mécanicien n’a pas été mis à jour. |
| `GET /entretiens`               | AUCUN ENTRETIEN TROUVE                           | Aucun entretien n’a été trouvé.                              |
| `GET /entretiens/:id`           | AUCUN ENTRETIEN TROUVE - AVEC L'ID :             | Impossible de récupérer l’entretien associé à l’ID passé en paramètres. |
| `PUT /entretiens/:id`           | AUCUN ENTRETIEN MODIFIE                          | Peut-être que l'ID n'existe pas en BDD. L’entretien n’a pas été mis à jour. |
