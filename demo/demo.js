$(function () {

    var map = L.map('map').setView([6.9270786, 79.861243], 3);

    L.tileLayer('https://cartodb-basemaps-c.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);


    let dash_straight = {
        color: 'rgb(145, 146, 150)',
        fillColor: 'rgb(145, 146, 150)',
        dashArray: 8,
        opacity: 0.8,
        weight: '1',
    };


    /*L.bezier({
        from: [6.898507, 79.756158],
        to: [-24.714010, 133.890405],
        mid:{
            deep:4
        },
        icon: {
            path: "plane.png"
        }
    },dash_straight).addTo(map);

    L.bezier({
        from: [6.898507, 79.756158],
        to: [43.628646, 12.650990],
        mid:{
            deep:4
        },
        icon: {
            path: "plane.png"
        }
    },dash_straight).addTo(map);*/

    let cordinate = [];
    for(let i = 0;i<10;i++){
        cordinate[i] = [47.222537  + i-3,  2.256532 + i*5];
    }

     L.bezier({
        from: [6.898507, 79.756158],
        to: cordinate,

        icon: {
            path: "plane.png"
        }
    },dash_straight).addTo(map);


  /*L.bezier({
        from: [6.898507, 79.756158],
        to: [ -24.714010, 133.890405],

        icon: {
            path: "plane.png"
        }
    },dash_straight).addTo(map);*/




});