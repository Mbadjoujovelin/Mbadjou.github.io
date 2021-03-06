var size = 0;
var placement = 'point';

var style_GUICHETS_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "8.125px \'Tahoma\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOM") !== null && resolution > 0 && resolution < 2800) {
        labelText = String(feature.get("NOM"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(128,246,9,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
