document.addEventListener('DOMContentLoaded', function () {
    const btnCalculer = document.getElementById('calculer');
    const resultat = document.getElementById('resultat');

    btnCalculer.addEventListener('click', function () {
        // Récupération des valeurs avec validation
        const getValeur = (id) => {
            const valeur = Number(document.getElementById(id).value);
            return isNaN(valeur) ? 0 : valeur;
        };

        const semences = getValeur('semences');
        const engrais = getValeur('engrais');
        const transport = getValeur('transport');
        const logement = getValeur('logement');
        const mainOeuvre = getValeur('main_oeuvre');
        const prixVente = getValeur('prix_vente');

        // Calculs
        const totalCouts = semences + engrais + transport + logement + mainOeuvre;
        const marge = prixVente - totalCouts;
        const pourcentageMarge = totalCouts > 0 ? (marge / totalCouts) * 100 : 0;

        // Formatage des nombres avec séparateurs de milliers
        const formatNombre = (nombre) => {
            return new Intl.NumberFormat('fr-FR').format(nombre.toFixed(2));
        };

        // Affichage des résultats
        let message = `
            <h3> Résultats de Calcul</h3>
            <div class="resultat-chiffre">
                Total des coûts : <strong>${formatNombre(totalCouts)} FCFA</strong>
            </div>
            <div class="resultat-chiffre">
                Prix de vente : <strong>${formatNombre(prixVente)} FCFA</strong>
            </div>
            <div class="resultat-chiffre">
                Marge brute : <strong>${formatNombre(marge)} FCFA</strong>
            </div>
            <div class="resultat-chiffre">
                Marge : <strong>${pourcentageMarge.toFixed(2)}%</strong>
            </div>
        `;

        if (marge > 0) {
            message += `
                <div style="margin-top: 15px; padding: 15px; background: rgba(76, 175, 80, 0.1); border-radius: 8px;">
                    <strong>Excellent ! Votre activité est rentable</strong>
                    <p style="margin: 5px 0 0 0; font-size: 14px;">Vous réalisez un bénéfice de ${formatNombre(marge)} FCFA</p>
                </div>
            `;
            resultat.className = "positif";
        } else if (marge === 0) {
            message += `
                <div style="margin-top: 15px; padding: 15px; background: rgba(33, 150, 243, 0.1); border-radius: 8px;">
                    <strong>Équilibre parfait</strong>
                    <p style="margin: 5px 0 0 0; font-size: 14px;">Vous couvrez exactement vos coûts</p>
                </div>
            `;
            resultat.className = "neutre";
        } else {
            message += `
                <div style="margin-top: 15px; padding: 15px; background: rgba(244, 67, 54, 0.1); border-radius: 8px;">
                    <strong>Attention : activité non rentable</strong>
                    <p style="margin: 5px 0 0 0; font-size: 14px;">Vous avez une perte de ${formatNombre(Math.abs(marge))} FCFA</p>
                </div>
            `;
            resultat.className = "negatif";
        }

        resultat.innerHTML = message;
    });

    // Ajout de la validation en temps réel
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
