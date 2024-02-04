TP - Création de son API


![uml_tp-entretien](https://github.com/Atlas21278/Api_Gestion_Entretiens/assets/113702788/2b190a8e-e0e5-4d0a-8733-2385bb4274a6)


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





### Description Simplifiée du Processus

- **Requêtes des Clients :** Les clients (développeurs et utilisateurs finaux) envoient des requêtes HTTP à l'API pour interagir avec le système (création, lecture, mise à jour, suppression d'informations).

- **Traitement par l'API :** L'API reçoit ces requêtes, les transforme en instructions SQL adaptées, et les transmet à la base de données MariaDB pour exécution.

- **Interaction avec la BDD :** La base de données exécute les instructions SQL reçues, effectue les opérations demandées, et renvoie les résultats à l'API.

- **Réponses de l'API :** L'API traite les informations reçues de la BDD et envoie les réponses appropriées aux clients, incluant les données requises, les confirmations d'actions réalisées, ou des messages d'erreur.




