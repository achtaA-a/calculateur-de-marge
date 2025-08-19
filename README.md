# Calculateur de Marge Agricole 

Une application web simple et intuitive permettant aux agriculteurs de calculer leur marge bénéficiaire en prenant en compte tous les coûts de production.

##  Fonctionnalités

-  Calcul automatique de la marge bénéficiaire
-  Prise en compte de tous les coûts (semences, engrais, transport, logement, main d'œuvre)
-  Affichage en Francs CFA (FCFA)
-  Résultats détaillés avec pourcentage de marge
-  Interface colorée selon la rentabilité (vert = bénéfice, rouge = perte)
-  <img width="807" height="947" alt="Capture d’écran du 2025-08-19 12-05-04" src="https://github.com/user-attachments/assets/0d15c0a2-44cb-4e8b-b8ef-99def94670f7" />

-  

##  Utilisation

1.  Renseigner les coût:
   - Semences (graines, plants)
   - Engrais (chimiques ou organiques)
   - Transport (déplacements)
   - Logement (hébergement)
   - Main d'œuvre (salaires)

2. Entrer le prix de ventetotal de la production


3.Cliquer sur "Calculer la Marge" pour obtenir instantanément :
   - Le total des coûts
   - La marge brute
   - Le pourcentage de marge
   - Un indicateur de rentabilité

## Formules de Calcul

  Marge Brute = Prix de Vente - Total des Coûts

 Pourcentage de Marge = (Marge Brute / Total des Coûts) × 100%

##  Technologies Utilisées

- HTML5 : Structure de la page
- CSS3 : Styles et design responsive
- JavaScript : Calculs et interactivité

##  Personnalisation

Pour ajouter de nouveaux types de coûts :
```html
<div class="input-group">
    <label for="nouveau_cout">Nouveau Coût (FCFA)</label>
    <input type="number" id="nouveau_cout" placeholder="Description">
</div>

