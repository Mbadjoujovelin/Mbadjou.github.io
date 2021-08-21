ol.proj.get("EPSG:32632").setExtent([779853.745920, 427527.692758, 780154.239726, 427699.634796]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Buffer_1KM_0 = new ol.format.GeoJSON();
var features_Buffer_1KM_0 = format_Buffer_1KM_0.readFeatures(json_Buffer_1KM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Buffer_1KM_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Buffer_1KM_0.addFeatures(features_Buffer_1KM_0);var lyr_Buffer_1KM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_1KM_0, 
                style: style_Buffer_1KM_0,
                title: '<img src="styles/legend/Buffer_1KM_0.png" /> Buffer_1KM'
            });var format_Rue_1Km_1 = new ol.format.GeoJSON();
var features_Rue_1Km_1 = format_Rue_1Km_1.readFeatures(json_Rue_1Km_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Rue_1Km_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rue_1Km_1.addFeatures(features_Rue_1Km_1);var lyr_Rue_1Km_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rue_1Km_1, 
                style: style_Rue_1Km_1,
                title: '<img src="styles/legend/Rue_1Km_1.png" /> Rue_1Km'
            });var format_ARRONDISSEMENT_2 = new ol.format.GeoJSON();
var features_ARRONDISSEMENT_2 = format_ARRONDISSEMENT_2.readFeatures(json_ARRONDISSEMENT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_ARRONDISSEMENT_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ARRONDISSEMENT_2.addFeatures(features_ARRONDISSEMENT_2);var lyr_ARRONDISSEMENT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARRONDISSEMENT_2, 
                style: style_ARRONDISSEMENT_2,
                title: '<img src="styles/legend/ARRONDISSEMENT_2.png" /> ARRONDISSEMENT'
            });var format_Menage_Mfoundi_1KmGab_40mRoute_3 = new ol.format.GeoJSON();
var features_Menage_Mfoundi_1KmGab_40mRoute_3 = format_Menage_Mfoundi_1KmGab_40mRoute_3.readFeatures(json_Menage_Mfoundi_1KmGab_40mRoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Menage_Mfoundi_1KmGab_40mRoute_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Menage_Mfoundi_1KmGab_40mRoute_3.addFeatures(features_Menage_Mfoundi_1KmGab_40mRoute_3);var lyr_Menage_Mfoundi_1KmGab_40mRoute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Menage_Mfoundi_1KmGab_40mRoute_3, 
                style: style_Menage_Mfoundi_1KmGab_40mRoute_3,
                title: '<img src="styles/legend/Menage_Mfoundi_1KmGab_40mRoute_3.png" /> Menage_Mfoundi_1KmGab_40mRoute'
            });var format_GUICHETS_4 = new ol.format.GeoJSON();
var features_GUICHETS_4 = format_GUICHETS_4.readFeatures(json_GUICHETS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_GUICHETS_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GUICHETS_4.addFeatures(features_GUICHETS_4);var lyr_GUICHETS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GUICHETS_4, 
                style: style_GUICHETS_4,
                title: '<img src="styles/legend/GUICHETS_4.png" /> GUICHETS'
            });var format_village_1_5 = new ol.format.GeoJSON();
var features_village_1_5 = format_village_1_5.readFeatures(json_village_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_village_1_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_village_1_5.addFeatures(features_village_1_5);var lyr_village_1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_village_1_5, 
                style: style_village_1_5,
                title: '<img src="styles/legend/village_1_5.png" /> village_1'
            });

lyr_Buffer_1KM_0.setVisible(true);lyr_Rue_1Km_1.setVisible(true);lyr_ARRONDISSEMENT_2.setVisible(true);lyr_Menage_Mfoundi_1KmGab_40mRoute_3.setVisible(true);lyr_GUICHETS_4.setVisible(true);lyr_village_1_5.setVisible(true);
var layersList = [baseLayer,lyr_Buffer_1KM_0,lyr_Rue_1Km_1,lyr_ARRONDISSEMENT_2,lyr_Menage_Mfoundi_1KmGab_40mRoute_3,lyr_GUICHETS_4,lyr_village_1_5];
lyr_Buffer_1KM_0.set('fieldAliases', {'NOM': 'Zone Tampon', 'ADRESSE': 'ADRESSE', 'TELEPHONIQ': 'TELEPHONIQ', 'TYPE': 'TYPE', 'QUARTIER': 'QUARTIER', 'ARRONDISSE': 'ARRONDISSE', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Rue_1Km_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_ARRONDISSEMENT_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'SUPERFICIE': 'Area', 'POPULATION': 'POPULATION', 'DEPARTEMEN': 'DEPARTEMEN', 'REGION': 'REGION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Arrondisse': 'Arrondissement', });
lyr_Menage_Mfoundi_1KmGab_40mRoute_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'Ménages', 'type': 'type', });
lyr_GUICHETS_4.set('fieldAliases', {'NOM': 'guichets', 'ADRESSE': 'ADRESSE', 'TELEPHONIQ': 'TELEPHONIQ', 'TYPE': 'TYPE', 'QUARTIER': 'QUARTIER', 'ARRONDISSE': 'ARRONDISSE', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_village_1_5.set('fieldAliases', {'objectid': 'objectid', 'type_': 'type_', 'desc_type': 'desc_type', 'nom_lieu': 'Lieu-Dit', 'population': 'population', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', 'globalid': 'globalid', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', });
lyr_Buffer_1KM_0.set('fieldImages', {'NOM': 'TextEdit', 'ADRESSE': 'Hidden', 'TELEPHONIQ': 'Hidden', 'TYPE': 'Hidden', 'QUARTIER': 'Hidden', 'ARRONDISSE': 'Hidden', 'Longitude': 'Hidden', 'Latitude': 'Hidden', });
lyr_Rue_1Km_1.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'Hidden', 'ref': 'Hidden', 'oneway': 'Hidden', 'maxspeed': 'Hidden', 'layer': 'Hidden', 'bridge': 'Hidden', 'tunnel': 'Hidden', });
lyr_ARRONDISSEMENT_2.set('fieldImages', {'OBJECTID': 'Hidden', 'SCE_GEO': 'Hidden', 'SCE_SEM': 'Hidden', 'DATE_': 'Hidden', 'ORIGINE': 'Hidden', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'Hidden', 'DEPARTEMEN': 'Hidden', 'REGION': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Arrondisse': 'TextEdit', });
lyr_Menage_Mfoundi_1KmGab_40mRoute_3.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'TextEdit', 'type': 'Hidden', });
lyr_GUICHETS_4.set('fieldImages', {'NOM': 'TextEdit', 'ADRESSE': 'Hidden', 'TELEPHONIQ': 'Hidden', 'TYPE': 'Hidden', 'QUARTIER': 'Hidden', 'ARRONDISSE': 'Hidden', 'Longitude': 'Hidden', 'Latitude': 'Hidden', });
lyr_village_1_5.set('fieldImages', {'objectid': 'Hidden', 'type_': 'Hidden', 'desc_type': 'Hidden', 'nom_lieu': 'TextEdit', 'population': 'Hidden', 'last_edite': 'Hidden', 'last_edi_1': 'Hidden', 'created_us': 'Hidden', 'created_da': 'Hidden', 'globalid': 'Hidden', 'region': 'Hidden', 'departemen': 'Hidden', 'arrondisse': 'Hidden', });
lyr_Buffer_1KM_0.set('fieldLabels', {'NOM': 'header label', });
lyr_Rue_1Km_1.set('fieldLabels', {});
lyr_ARRONDISSEMENT_2.set('fieldLabels', {'SUPERFICIE': 'header label', 'Arrondisse': 'header label', });
lyr_Menage_Mfoundi_1KmGab_40mRoute_3.set('fieldLabels', {'name': 'no label', });
lyr_GUICHETS_4.set('fieldLabels', {'NOM': 'header label', });
lyr_village_1_5.set('fieldLabels', {'nom_lieu': 'header label', });
lyr_village_1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});