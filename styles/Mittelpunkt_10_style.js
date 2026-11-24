var size = 0;
var placement = 'point';

var style_Mittelpunkt_10 = function(feature, resolution){
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.0 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.0}),
            fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})})
    })];

    return style;
};
