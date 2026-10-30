var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'GoogleSatelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Regionen_1 = new ol.format.GeoJSON();
var features_Regionen_1 = format_Regionen_1.readFeatures(json_Regionen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionen_1.addFeatures(features_Regionen_1);
var lyr_Regionen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionen_1, 
                style: style_Regionen_1,
                popuplayertitle: 'Regionen',
                interactive: true,
                title: '<img src="styles/legend/Regionen_1.png" /> Regionen'
            });
var format_Hauptorte_2 = new ol.format.GeoJSON();
var features_Hauptorte_2 = format_Hauptorte_2.readFeatures(json_Hauptorte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hauptorte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hauptorte_2.addFeatures(features_Hauptorte_2);
var lyr_Hauptorte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hauptorte_2, 
                style: style_Hauptorte_2,
                popuplayertitle: 'Hauptorte',
                interactive: false,
                title: '<img src="styles/legend/Hauptorte_2.png" /> Hauptorte'
            });
var format_Bahntrassen_3 = new ol.format.GeoJSON();
var features_Bahntrassen_3 = format_Bahntrassen_3.readFeatures(json_Bahntrassen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bahntrassen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bahntrassen_3.addFeatures(features_Bahntrassen_3);
var lyr_Bahntrassen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bahntrassen_3, 
                style: style_Bahntrassen_3,
                popuplayertitle: 'Bahntrassen',
                interactive: false,
    title: 'Bahntrassen<br />\
    <img src="styles/legend/Bahntrassen_3_0.png" /> Bestandsstrecke<br />\
    <img src="styles/legend/Bahntrassen_3_1.png" /> Zulaufstrecken<br />\
    <img src="styles/legend/Bahntrassen_3_2.png" /> Fensterstollen<br />\
    <img src="styles/legend/Bahntrassen_3_3.png" /> BBT<br />' });
var format_Bahnhfe_4 = new ol.format.GeoJSON();
var features_Bahnhfe_4 = format_Bahnhfe_4.readFeatures(json_Bahnhfe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bahnhfe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bahnhfe_4.addFeatures(features_Bahnhfe_4);
var lyr_Bahnhfe_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bahnhfe_4, 
                style: style_Bahnhfe_4,
                popuplayertitle: 'Bahnhöfe',
                interactive: false,
                title: '<img src="styles/legend/Bahnhfe_4.png" /> Bahnhöfe'
            });
var format_Flsse_5 = new ol.format.GeoJSON();
var features_Flsse_5 = format_Flsse_5.readFeatures(json_Flsse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flsse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flsse_5.addFeatures(features_Flsse_5);
var lyr_Flsse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flsse_5, 
                style: style_Flsse_5,
                popuplayertitle: 'Flüsse',
                interactive: false,
                title: '<img src="styles/legend/Flsse_5.png" /> Flüsse'
            });
var format_Seen_6 = new ol.format.GeoJSON();
var features_Seen_6 = format_Seen_6.readFeatures(json_Seen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seen_6.addFeatures(features_Seen_6);
var lyr_Seen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seen_6, 
                style: style_Seen_6,
                popuplayertitle: 'Seen',
                interactive: false,
                title: '<img src="styles/legend/Seen_6.png" /> Seen'
            });
var format_Fernheizwerke_7 = new ol.format.GeoJSON();
var features_Fernheizwerke_7 = format_Fernheizwerke_7.readFeatures(json_Fernheizwerke_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fernheizwerke_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fernheizwerke_7.addFeatures(features_Fernheizwerke_7);
var lyr_Fernheizwerke_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fernheizwerke_7, 
                style: style_Fernheizwerke_7,
                popuplayertitle: 'Fernheizwerke',
                interactive: false,
                title: '<img src="styles/legend/Fernheizwerke_7.png" /> Fernheizwerke'
            });
var format_Druckstollen_8 = new ol.format.GeoJSON();
var features_Druckstollen_8 = format_Druckstollen_8.readFeatures(json_Druckstollen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Druckstollen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Druckstollen_8.addFeatures(features_Druckstollen_8);
var lyr_Druckstollen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Druckstollen_8, 
                style: style_Druckstollen_8,
                popuplayertitle: 'Druckstollen',
                interactive: false,
                title: '<img src="styles/legend/Druckstollen_8.png" /> Druckstollen'
            });
var format_Krafthuser_9 = new ol.format.GeoJSON();
var features_Krafthuser_9 = format_Krafthuser_9.readFeatures(json_Krafthuser_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krafthuser_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krafthuser_9.addFeatures(features_Krafthuser_9);
var lyr_Krafthuser_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Krafthuser_9, 
                style: style_Krafthuser_9,
                popuplayertitle: 'Krafthäuser',
                interactive: false,
                title: '<img src="styles/legend/Krafthuser_9.png" /> Krafthäuser'
            });
var group_Kraftwerke = new ol.layer.Group({
                                layers: [lyr_Flsse_5,lyr_Seen_6,lyr_Fernheizwerke_7,lyr_Druckstollen_8,lyr_Krafthuser_9,],
                                fold: 'open',
                                title: 'Kraftwerke'});
var group_BBT = new ol.layer.Group({
                                layers: [lyr_Bahntrassen_3,lyr_Bahnhfe_4,],
                                fold: 'open',
                                title: 'BBT'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Regionen_1.setVisible(true);lyr_Hauptorte_2.setVisible(true);lyr_Bahntrassen_3.setVisible(true);lyr_Bahnhfe_4.setVisible(true);lyr_Flsse_5.setVisible(true);lyr_Seen_6.setVisible(true);lyr_Fernheizwerke_7.setVisible(true);lyr_Druckstollen_8.setVisible(true);lyr_Krafthuser_9.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Regionen_1,lyr_Hauptorte_2,group_BBT,group_Kraftwerke];
lyr_Regionen_1.set('fieldAliases', {'Name': 'Name', 'Name2': 'Name2', });
lyr_Hauptorte_2.set('fieldAliases', {'Name': 'Name', });
lyr_Bahntrassen_3.set('fieldAliases', {'Baulos': 'Baulos', 'Typ': 'Typ', });
lyr_Bahnhfe_4.set('fieldAliases', {'Name': 'Name', 'NameVoll': 'NameVoll', });
lyr_Flsse_5.set('fieldAliases', {'NUMMER': 'NUMMER', 'BEZEICHNUN': 'BEZEICHNUN', 'LÄNGE__M_': 'LÄNGE__M_', 'DEMANIALGE': 'DEMANIALGE', 'LABEL': 'LABEL', });
lyr_Seen_6.set('fieldAliases', {'NAME': 'NAME', 'LOKALE_BEZ': 'LOKALE_BEZ', 'KODEX': 'KODEX', 'EINZUGSGEB': 'EINZUGSGEB', 'GEMEINDE': 'GEMEINDE', 'KOTE': 'KOTE', 'SEETIEFE__': 'SEETIEFE__', 'SEEFLÄCHE': 'SEEFLÄCHE', 'LÄNGE__M_': 'LÄNGE__M_', 'BREITE__M_': 'BREITE__M_', 'VOLUMEN__M': 'VOLUMEN__M', 'LABEL': 'LABEL', });
lyr_Fernheizwerke_7.set('fieldAliases', {'Name': 'Name', 'Beschriftu': 'Beschriftu', 'Anschlüss': 'Anschlüss', 'Produktion': 'Produktion', });
lyr_Druckstollen_8.set('fieldAliases', {'id': 'id', 'Kraftwerk': 'Kraftwerk', });
lyr_Krafthuser_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Leistung': 'Leistung', 'Beschriftu': 'Beschriftu', });
lyr_Regionen_1.set('fieldImages', {'Name': 'TextEdit', 'Name2': 'TextEdit', });
lyr_Hauptorte_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Bahntrassen_3.set('fieldImages', {'Baulos': 'TextEdit', 'Typ': 'TextEdit', });
lyr_Bahnhfe_4.set('fieldImages', {'Name': 'TextEdit', 'NameVoll': 'TextEdit', });
lyr_Flsse_5.set('fieldImages', {'NUMMER': 'TextEdit', 'BEZEICHNUN': 'TextEdit', 'LÄNGE__M_': 'TextEdit', 'DEMANIALGE': 'TextEdit', 'LABEL': 'TextEdit', });
lyr_Seen_6.set('fieldImages', {'NAME': 'TextEdit', 'LOKALE_BEZ': 'TextEdit', 'KODEX': 'TextEdit', 'EINZUGSGEB': 'TextEdit', 'GEMEINDE': 'TextEdit', 'KOTE': 'TextEdit', 'SEETIEFE__': 'TextEdit', 'SEEFLÄCHE': 'TextEdit', 'LÄNGE__M_': 'TextEdit', 'BREITE__M_': 'TextEdit', 'VOLUMEN__M': 'TextEdit', 'LABEL': 'TextEdit', });
lyr_Fernheizwerke_7.set('fieldImages', {'Name': 'TextEdit', 'Beschriftu': 'Range', 'Anschlüss': 'TextEdit', 'Produktion': 'Range', });
lyr_Druckstollen_8.set('fieldImages', {'id': 'TextEdit', 'Kraftwerk': 'TextEdit', });
lyr_Krafthuser_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Leistung': 'Range', 'Beschriftu': 'Range', });
lyr_Regionen_1.set('fieldLabels', {'Name': 'no label', 'Name2': 'no label', });
lyr_Hauptorte_2.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_Bahntrassen_3.set('fieldLabels', {'Baulos': 'no label', 'Typ': 'no label', });
lyr_Bahnhfe_4.set('fieldLabels', {'Name': 'header label - visible with data', 'NameVoll': 'no label', });
lyr_Flsse_5.set('fieldLabels', {'NUMMER': 'no label', 'BEZEICHNUN': 'no label', 'LÄNGE__M_': 'no label', 'DEMANIALGE': 'no label', 'LABEL': 'no label', });
lyr_Seen_6.set('fieldLabels', {'NAME': 'no label', 'LOKALE_BEZ': 'no label', 'KODEX': 'no label', 'EINZUGSGEB': 'no label', 'GEMEINDE': 'no label', 'KOTE': 'no label', 'SEETIEFE__': 'no label', 'SEEFLÄCHE': 'no label', 'LÄNGE__M_': 'no label', 'BREITE__M_': 'no label', 'VOLUMEN__M': 'no label', 'LABEL': 'no label', });
lyr_Fernheizwerke_7.set('fieldLabels', {'Name': 'no label', 'Beschriftu': 'no label', 'Anschlüss': 'no label', 'Produktion': 'no label', });
lyr_Druckstollen_8.set('fieldLabels', {'id': 'no label', 'Kraftwerk': 'no label', });
lyr_Krafthuser_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Leistung': 'no label', 'Beschriftu': 'no label', });
lyr_Krafthuser_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});