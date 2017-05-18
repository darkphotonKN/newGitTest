/**
 * Created by Kranti on 4/30/2017.
 */

$(document).ready(function() {

    /* constructor to create attribute
     each attribute will have two properties, default and current values, and increase and decrease functions */


    // highest class governing all stats
    function Stat(base, current) {
        this.base = base;
        this.current = current;
        this.incStat = function() {
            this.current = this.current+1;
        };
        this.decStat = function() {
            this.current = this.current-1;
        };

    }

    // player attributes
    function Attribute(base, current) {
        this.base = 1;
        this.current = current;
    }

    // inheritance of Stat methods into Attribute
    Attribute.prototype = new Stat();

    /* character attributes */
    var vigor = new Attribute(10, 1);
    var attunement = new Attribute(10, 1);
    var endurance = new Attribute(10, 1);
    var vitality = new Attribute(10, 1);
    var strength = new Attribute(10, 1);
    var dexterity = new Attribute(10, 1);
    var intelligence = new Attribute(10, 1);
    var faith = new Attribute(10, 1);
    var luck = new Attribute(10, 1);




    /* EVENTS */

    // on clicking increase stat
    $(this).click(function(event) { // needs to match on click EVENT
        // target onto event's id
        switch(event.target.id) {
            case 'vig_but_inc':
                vigor.incStat(); // increase stats once
                $('#vig_res').html(vigor.current);
                break;
            case 'vig_but_dec':
                vigor.decStat(); // increase stats once
                $('#vig_res').html(vigor.current);
                break;
            case 'att_but_inc':
                attunement.incStat(); // increase stats once
                $('#att_res').html(attunement.current);
                break;
            case 'att_but_dec':
                attunement.decStat(); // increase stats once
                $('#att_res').html(attunement.current);
                break;

            case 'end_but_inc':
                endurance.incStat(); // increase stats once
                $('#end_res').html(endurance.current);
                break;
            case 'end_but_dec':
                endurance.decStat(); // increase stats once
                $('#end_res').html(endurance.current);
                break;

            case 'vit_but_inc':
                vitality.incStat(); // increase stats once
                $('#vit_res').html(vitality.current);
                break;
            case 'vit_but_dec':
                vitality.decStat(); // increase stats once
                $('#vit_res').html(vitality.current);
                break;

            case 'str_but_inc':
                strength.incStat(); // increase stats once
                $('#str_res').html(strength.current);
                break;
            case 'str_but_dec':
                strength.decStat(); // increase stats once
                $('#str_res').html(strength.current);
                break;

            case 'dex_but_inc':
                dexterity.incStat(); // increase stats once
                $('#dex_res').html(dexterity.current);
                break;
            case 'dex_but_dec':
                dexterity.decStat(); // increase stats once
                $('#dex_res').html(dexterity.current);
                break;

            case 'int_but_inc':
                intelligence.incStat(); // increase stats once
                $('#int_res').html(intelligence.current);
                break;
            case 'int_but_dec':
                intelligence.decStat(); // increase stats once
                $('#int_res').html(intelligence.current);
                break;

            case 'fai_but_inc':
                faith.incStat(); // increase stats once
                $('#fai_res').html(faith.current);
                break;
            case 'fai_but_dec':
                faith.decStat(); // increase stats once
                $('#fai_res').html(faith.current);
                break;

            case 'luc_but_inc':
                luck.incStat(); // increase stats once
                $('#luc_res').html(luck.current);
                break;
            case 'luc_but_dec':
                luck.decStat(); // increase stats once
                $('#luc_res').html(luck.current);
                break;


            default:
                break;
        }
    });

    /* functions */
    function calcFinalPower() {

        return vitality.current + strength.current + endurance.current - luck.current;
    }

$('#calc_final').click(function() {
        var finalPower = calcFinalPower();
        console.log("Worked"); // check function was fired

        // add design to the result box
        //$('#result').addClass('final_out');

        // add final power to it
        $('#result').html("<div class='final_out'> Results <br/>Final Power = " + finalPower + "</div>");
    });


});




