/*
****    résolution d'un problème de determination du nombre de passager restant dans un bus
****
*/

function nbrePassagerRemain(busMvt) {
    var restPassager = 0;
    
    busMvt.forEach(element => {
        restPassager += element.incoming
        restPassager -= element.outgoing;
    });

    return restPassager;
}

var busMvt1 = [{incoming: 10, outgoing: 0}, {incoming: 3, outgoing: 5}, {incoming:5, outgoing:8}];

var busMvt2 = [{incoming: 3, outgoing: 0}, {incoming: 9, outgoing: 1}, {incoming:4, outgoing:10},
                {incoming: 12, outgoing: 2}, {incoming:6, outgoing:1}, {incoming:7, outgoing:10}];

var busMvt3 = [{incoming: 3, outgoing: 0}, {incoming: 9, outgoing: 1}, {incoming:4, outgoing:8},
                {incoming: 12, outgoing: 2}, {incoming:6, outgoing:1}, {incoming: 7, outgoing: 8}];
                

console.log(nbrePassagerRemain(busMvt1));

console.log(nbrePassagerRemain(busMvt2));

console.log(nbrePassagerRemain(busMvt3));