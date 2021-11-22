var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_huanuco_limite_provincia_1 = new ol.format.GeoJSON();
var features_huanuco_limite_provincia_1 = format_huanuco_limite_provincia_1.readFeatures(json_huanuco_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huanuco_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huanuco_limite_provincia_1.addFeatures(features_huanuco_limite_provincia_1);
var lyr_huanuco_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huanuco_limite_provincia_1, 
                style: style_huanuco_limite_provincia_1,
                interactive: true,
    title: 'huanuco_limite_provincia<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_0.png" /> <br />\
    <img src="styles/legend/huanuco_limite_provincia_1_1.png" /> AMBO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_2.png" /> DOS DE MAYO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_3.png" /> HUACAYBAMBA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_4.png" /> HUAMALIES<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_5.png" /> HUANUCO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_6.png" /> LAURICOCHA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_7.png" /> LEONCIO PRADO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_8.png" /> MARAÑON<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_9.png" /> PACHITEA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_10.png" /> PUERTO INCA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_11.png" /> YAROWILCA<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_huanuco_limite_provincia_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_huanuco_limite_provincia_1];
lyr_huanuco_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_huanuco_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_huanuco_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_huanuco_limite_provincia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});