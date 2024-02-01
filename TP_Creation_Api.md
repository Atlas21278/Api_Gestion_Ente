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
