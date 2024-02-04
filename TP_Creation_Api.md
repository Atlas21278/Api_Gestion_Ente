# TP - Création de son API

## Objectif
L'objectif de ce TP est de débuter la création d'une API en suivant une architecture modèle-manager-controller et d'utiliser un package externe.

## Contexte
Dans le cadre de la gestion du système d'information de la base aérienne d'Istres, le but est de développer une application pour gérer les aéronefs. Cette API, développée en NodeJS et TypeScript, interagira avec une base de données MariaDB.

## Travail à réaliser

### Modèle conceptuel
Le modèle conceptuel est représenté par l'UML suivant :
![uml_tp-entretien](https://github.com/Atlas21278/Api_Gestion_Entretiens/assets/113702788/28bf8c10-fc58-49a8-95b5-0cb766c6c24b)

### Liste des endpoints
Les endpoints suivants sont définis pour interagir avec l'API :


| Endpoint                      | Paramètres                                                                                   | Description                                                             |
|-------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `POST /avions`                | Objet Avion passé dans le body au format JSON                                                | Ajoute un avion en base de données et retourne l'avion ajouté.          |
| `GET /avions`                 | Aucun                                                                                        | Retourne tous les avions.                                               |
| `GET /avions`                 | `?immatriculation=[string]`                                                                  | Retourne l'avion correspondant à l'immatriculation.                     |
| `PUT /avions/:immatriculation`| `immatriculation` - string dans URL, Objets champs à modifier dans le body                   | Met à jour les informations de l'avion et retourne l'avion modifié.     |
| `DELETE /avions/:immatriculation` | `immatriculation` - string dans URL                                                        | Supprime l'avion correspondant à l'immatriculation et retourne son id.  |
| `POST /mecaniciens`           | Objet Mécanicien passé dans le body au format JSON                                           | Ajoute un mécanicien en base de données et retourne le mécanicien ajouté.|
| `GET /mecaniciens`            | Aucun                                                                                        | Retourne tous les mécaniciens.                                          |
| `GET /mecaniciens`            | `?id=[int]`                                                                                  | Retourne le mécanicien correspondant à l'id.                            |
| `PUT /mecaniciens/:id`        | `id` - int dans URL, Objets champs à modifier dans le body                                   | Met à jour les informations du mécanicien et retourne le mécanicien modifié. |
| `DELETE /mecaniciens/:id`     | `id` - int dans URL                                                                          | Supprime le mécanicien correspondant à l'id et retourne son id.         |
| `POST /entretiens`            | Objet Entretien passé dans le body au format JSON                                            | Ajoute un entretien en base de données et retourne l'entretien ajouté.  |
| `GET /entretiens`             | Aucun                                                                                        | Retourne tous les entretiens.                                           |
| `GET /entretiens`             | `?id=[int]`                                                                                  | Retourne l'entretien correspondant à l'id.                              |
| `GET /entretiens`             | `?immatriculationAvion=[string]&idMecanicien=[int]&dateEntretien=[datetime]&typeEntretien=[string]` | Retourne les entretiens selon les filtres passés en paramètres.         |
| `PUT /entretiens/:id`         | `id` - int dans URL, Objets champs à modifier dans le body                                   | Met à jour les informations de l'entretien et retourne l'entretien modifié. |
| `DELETE /entretiens/:id`      | `id` - int dans URL                                                                          | Supprime l'entretien correspondant à l'id et retourne son id.           |


### Liste des erreurs possibles
Voici les erreurs que vous pouvez rencontrer lors de l'utilisation de l'API :


| Endpoint                         | Erreur                                                             | Description                                                             |
|----------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------|
| `POST /avions`                   | **`AUCUN AVION AJOUTE`**                                           | Peut-être manque-t-il des données. L’avion n’a pas été ajouté.          |
| `GET /avions`                    | **`AUCUN AVION TROUVE`**                                           | Aucun avion n’a été trouvé.                                              |
| `GET /avions/:immatriculation`   | **`AUCUN AVION TROUVE - AVEC L'IMMATRICULATION : {immatriculation}`** | Impossible de récupérer l’avion associé à l’immatriculation spécifiée.  |
| `PUT /avions/:immatriculation`   | **`AUCUN AVION MODIFIE`**                                          | Peut-être que l'immatriculation n'existe pas. L’avion n’a pas été mis à jour. |
| `DELETE /avions/:immatriculation`| **`AUCUN AVION SUPPRIME`**                                         | L’avion correspondant à l’immatriculation spécifiée n’a pas été supprimé. |
| `POST /mecaniciens`              | **`AUCUN MECANICIEN AJOUTE`**                                      | Peut-être manque-t-il des données. Le mécanicien n’a pas été ajouté.    |
| `GET /mecaniciens`               | **`AUCUN MECANICIEN TROUVE`**                                      | Aucun mécanicien n’a été trouvé.                                         |
| `GET /mecaniciens/:id`           | **`AUCUN MECANICIEN TROUVE - AVEC L'ID : {id}`**                    | Impossible de récupérer le mécanicien associé à l’ID spécifié.          |
| `PUT /mecaniciens/:id`           | **`AUCUN MECANICIEN MODIFIE`**                                     | Peut-être que l'ID n'existe pas. Le mécanicien n’a pas été mis à jour.  |
| `DELETE /mecaniciens/:id`        | **`AUCUN MECANICIEN SUPPRIME`**                                    | Le mécanicien correspondant à l’ID spécifié n’a pas été supprimé.       |
| `POST /entretiens`               | **`AUCUN ENTRETIEN AJOUTE`**                                       | Peut-être manque-t-il des données. L’entretien n’a pas été ajouté.      |
| `GET /entretiens`                | **`AUCUN ENTRETIEN TROUVE`**                                       | Aucun entretien n’a été trouvé.                                         |
| `GET /entretiens/:id`            | **`AUCUN ENTRETIEN TROUVE - AVEC L'ID : {id}`**                     | Impossible de récupérer l’entretien associé à l’ID spécifié.            |
| `PUT /entretiens/:id`            | **`AUCUN ENTRETIEN MODIFIE`**                                      | Peut-être que l'ID n'existe pas. L’entretien n’a pas été mis à jour.    |
| `DELETE /entretiens/:id`         | **`AUCUN ENTRETIEN SUPPRIME`**                                     | L’entretien correspondant à l’ID spécifié n’a pas été supprimé.         |

### Flux de Données Simplifié
Le schéma suivant illustre le flux de données entre les clients, l'API, et la base de données :
![flux_de_donées_Entretien](https://github.com/Atlas21278/Api_Gestion_Entretiens/assets/113702788/5e046375-93f2-45f1-ae00-62c6d872dbcf)



### Description Simplifiée du Processus

- **Requêtes des Clients :** Les clients (développeurs et utilisateurs finaux) envoient des requêtes HTTP à l'API pour interagir avec le système (création, lecture, mise à jour, suppression d'informations).

- **Traitement par l'API :** L'API reçoit ces requêtes, les transforme en instructions SQL adaptées, et les transmet à la base de données MariaDB pour exécution.

- **Interaction avec la BDD :** La base de données exécute les instructions SQL reçues, effectue les opérations demandées, et renvoie les résultats à l'API.

- **Réponses de l'API :** L'API traite les informations reçues de la BDD et envoie les réponses appropriées aux clients, incluant les données requises, les confirmations d'actions réalisées, ou des messages d'erreur.




