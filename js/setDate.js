/**
 * Script pour l'ajout de la date dans la présentation
 * et du numéro
 */
;(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        /** DATE **************************************************************/
        var element = document.getElementById("date");
        var date = new Date();

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = month<10?"0"+month:month;
        var day = date.getDate();
        day = day<10?"0"+day:day;

        element.innerHTML = day + "/" + month + "/" + year;
        
    }, false);
})();
