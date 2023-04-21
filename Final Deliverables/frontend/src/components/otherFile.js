export const html = `<!DOCTYPE html>
<html>
<head>
    
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    
        <script>
            L_NO_TOUCH = false;
            L_DISABLE_3D = false;
        </script>
    
    <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>
    <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"/>
    
            <meta name="viewport" content="width=device-width,
                initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <style>
                #map_46113f17546a5138496e8bd42ad5facf {
                    position: relative;
                    width: 100.0%;
                    height: 100.0%;
                    left: 0.0%;
                    top: 0.0%;
                }
                .leaflet-container { font-size: 1rem; }
            </style>
        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.1.0/leaflet.markercluster.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.1.0/MarkerCluster.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.1.0/MarkerCluster.Default.css"/>
</head>
<body>
    
    
            <div class="folium-map" id="map_46113f17546a5138496e8bd42ad5facf" ></div>
        
</body>
<script>
    
    
            var map_46113f17546a5138496e8bd42ad5facf = L.map(
                "map_46113f17546a5138496e8bd42ad5facf",
                {
                    center: [0.0, 0.0],
                    crs: L.CRS.EPSG3857,
                    zoom: 2,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_101de6a1a82229bc2a5617dfc7418938 = L.tileLayer(
                "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"            ).addTo(map_46113f17546a5138496e8bd42ad5facf);
        
    
            var fast_marker_cluster_99037675a7798111c533e10513d7a6ad = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_01a9f9a445293ee107b75bcb497c6a79 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_021490bd18fd1252bd8f3ea41477faef = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_7a871b10ad3cef80a17b8bc966e99be2 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_5a6569a805ec24bfd390bce4585b253a = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_6c0587c8d159ca5e030c045f3c0d7100 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_64ed898ba3aa8ddfd856c255f1f8bf53 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_472fc3a9eb4da076710e5f28696cf31c = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_88d843a9ba0e6497afc4654148ebfa6b = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_1dfdbe205f93d74b9513092a9dbf7f6f = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_2bf3c5f2f63c18696e596b2fbe9ed29c = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_3ea62d2518c124259bc4e78a2b8198b9 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_ebb9488057fda2ebc9a2dc4b58869881 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_54aa22901eb2010149eba6f8535455d4 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_9283dc8099a70cf1b141a20bd0d4699f = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_bc5d8af16f96ea5ad2aedd337cc4d861 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_0a4e166ab4e2eb09b686178cbfd154c3 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_7edf36d26da2fab64821f4debe7979b7 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_b95552336d3cb713aefe634d32a7f940 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_e2bf872f5e3ab3f903063a207817f4c0 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_c638330505407a27e753fdcd8e6e8143 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_99fac52d350c30084134fcb016c3083a = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_f59f04a7e5a8662b06253d39ecb82fb8 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_b4c74273ac4dce82e594c2f29a0d00f3 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_6a3f3a9490197cd40f6072aa77e50686 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_e82dd9a6c914c5e2db8170ca924a4ceb = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_6bdcba2f693b26915ede5d1715151730 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_7d7981903eef8fe754b0a5fef96de410 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_3998a8d18d9e1dd25317a0d8b0cd0308 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_fef7077f3bc46a64254973d12fbf0a96 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_8717e2bd3e9fed098dd63bc2adae4c4c = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_752867edcbbcbb067a10f640572fb872 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_ba3436c4b98b4409055b93854900a3b1 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_d0a258821539fdd6ed18b6b5f153aa4a = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_bb58055ae2f91e8a88496a1d70861bdd = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_b7d4ae2e20086364ee82481e59e3e6b2 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_9b3275189d708f0c0345b985e2aa4fbe = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_aeabec76c0d6c1b285d7d5c3b6eca45f = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_47f917f38373d14527e9f6c445ceb858 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_be152b6db3c57cb508b09e433fb9fa14 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_75be12dae9535fd61a92df28162c8680 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_07120085c8ec475d5c230a202dcf9031 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_e5db6d3685a58a003c0983c94f06c670 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_66ce6c41650999a7506083b846aaee54 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_a7c3d1dbd1e1606edd5da2645f31a2b3 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_e56af4ab36c47b5ebc2c0d4109c4e70c = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_9e63d88decb7664f2fbb8943bb6512c2 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_57024ad6527cc5e8a523943350d4163f = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_37406dfb6d688e3d0c07c9c2ca2f3f1b = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_d219712b70a1ff0a702f648fc6a62e6d = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_8b6391bf6f605a08f3d09df8e29ba4e1 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_73d8fc5c27d940742ecfa42b5bd0bf30 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_ad85835f111160229613e410408aaa43 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_75deafed16f299afa1b97fb602353ada = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_4199a467068a221070064e9954b438ef = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_b821cc84922067d65daa81dea6d47888 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_bc83df0578551d54f752dc4bdc24b123 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [35.02285767, -93.04924011]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_0fdddb75f7a40df08f0812ae57e9dc01 = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_4deee37f77e215e231af03ba314b39cb = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_66ec0516821a11dd565cb683dfa69f9e = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var fast_marker_cluster_cd9f0e380685782c23d1a0c0cc72442b = (function(){
                
                var callback = function (row) {
                    var icon = L.AwesomeMarkers.icon();
                    var marker = L.marker(new L.LatLng(row[0], row[1]));
                    marker.setIcon(icon);
                    return marker;
                };

                var data = [[41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [41.87194, 12.56738], [27.72502708, 111.3275528], [37.09024, -95.712891], [35.86166, 104.195397], [37.09024, -95.712891], [35.86166, 104.195397], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [27.60689735, 111.7137146], [15.29893303, 105.81389618], [-0.789275, 113.921327], [-0.789275, 113.921327], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [41.87194, 12.56738], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [60.28740692, 9.1084137], [32.76642609, -86.84033203], [60.472024, 8.468946], [60.472024, 8.468946], [60.28740692, 9.1084137], [60.28740692, 9.1084137], [41.87194, 12.56738], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [41.87194, 12.56738], [56.18561172, -2.55643797], [37.09024, -95.712891], [37.09024, -95.712891], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [31.46384811, -99.33329773], [33.90394211, -80.89408112], [44.38907242, -114.65937042], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [34.89980316, -92.43915558], [35.02285767, -93.04924011], [37.09024, -95.712891], [37.09024, -95.712891], [34.89980316, -92.43915558], [34.89980316, -92.43915558]];
                var cluster = L.markerClusterGroup({});

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var marker = callback(row);
                    marker.addTo(cluster);
                }

                cluster.addTo(map_46113f17546a5138496e8bd42ad5facf);
                return cluster;
            })();
        
    
            var layer_control_92815e17ec78aeba6e4b5368cc9447de = {
                base_layers : {
                    "cartodbdark_matter" : tile_layer_101de6a1a82229bc2a5617dfc7418938,
                },
                overlays :  {
                    "macro_element_99037675a7798111c533e10513d7a6ad" : fast_marker_cluster_99037675a7798111c533e10513d7a6ad,
                    "macro_element_01a9f9a445293ee107b75bcb497c6a79" : fast_marker_cluster_01a9f9a445293ee107b75bcb497c6a79,
                    "macro_element_021490bd18fd1252bd8f3ea41477faef" : fast_marker_cluster_021490bd18fd1252bd8f3ea41477faef,
                    "macro_element_7a871b10ad3cef80a17b8bc966e99be2" : fast_marker_cluster_7a871b10ad3cef80a17b8bc966e99be2,
                    "macro_element_5a6569a805ec24bfd390bce4585b253a" : fast_marker_cluster_5a6569a805ec24bfd390bce4585b253a,
                    "macro_element_6c0587c8d159ca5e030c045f3c0d7100" : fast_marker_cluster_6c0587c8d159ca5e030c045f3c0d7100,
                    "macro_element_64ed898ba3aa8ddfd856c255f1f8bf53" : fast_marker_cluster_64ed898ba3aa8ddfd856c255f1f8bf53,
                    "macro_element_472fc3a9eb4da076710e5f28696cf31c" : fast_marker_cluster_472fc3a9eb4da076710e5f28696cf31c,
                    "macro_element_88d843a9ba0e6497afc4654148ebfa6b" : fast_marker_cluster_88d843a9ba0e6497afc4654148ebfa6b,
                    "macro_element_1dfdbe205f93d74b9513092a9dbf7f6f" : fast_marker_cluster_1dfdbe205f93d74b9513092a9dbf7f6f,
                    "macro_element_2bf3c5f2f63c18696e596b2fbe9ed29c" : fast_marker_cluster_2bf3c5f2f63c18696e596b2fbe9ed29c,
                    "macro_element_3ea62d2518c124259bc4e78a2b8198b9" : fast_marker_cluster_3ea62d2518c124259bc4e78a2b8198b9,
                    "macro_element_ebb9488057fda2ebc9a2dc4b58869881" : fast_marker_cluster_ebb9488057fda2ebc9a2dc4b58869881,
                    "macro_element_54aa22901eb2010149eba6f8535455d4" : fast_marker_cluster_54aa22901eb2010149eba6f8535455d4,
                    "macro_element_9283dc8099a70cf1b141a20bd0d4699f" : fast_marker_cluster_9283dc8099a70cf1b141a20bd0d4699f,
                    "macro_element_bc5d8af16f96ea5ad2aedd337cc4d861" : fast_marker_cluster_bc5d8af16f96ea5ad2aedd337cc4d861,
                    "macro_element_0a4e166ab4e2eb09b686178cbfd154c3" : fast_marker_cluster_0a4e166ab4e2eb09b686178cbfd154c3,
                    "macro_element_7edf36d26da2fab64821f4debe7979b7" : fast_marker_cluster_7edf36d26da2fab64821f4debe7979b7,
                    "macro_element_b95552336d3cb713aefe634d32a7f940" : fast_marker_cluster_b95552336d3cb713aefe634d32a7f940,
                    "macro_element_e2bf872f5e3ab3f903063a207817f4c0" : fast_marker_cluster_e2bf872f5e3ab3f903063a207817f4c0,
                    "macro_element_c638330505407a27e753fdcd8e6e8143" : fast_marker_cluster_c638330505407a27e753fdcd8e6e8143,
                    "macro_element_99fac52d350c30084134fcb016c3083a" : fast_marker_cluster_99fac52d350c30084134fcb016c3083a,
                    "macro_element_f59f04a7e5a8662b06253d39ecb82fb8" : fast_marker_cluster_f59f04a7e5a8662b06253d39ecb82fb8,
                    "macro_element_b4c74273ac4dce82e594c2f29a0d00f3" : fast_marker_cluster_b4c74273ac4dce82e594c2f29a0d00f3,
                    "macro_element_6a3f3a9490197cd40f6072aa77e50686" : fast_marker_cluster_6a3f3a9490197cd40f6072aa77e50686,
                    "macro_element_e82dd9a6c914c5e2db8170ca924a4ceb" : fast_marker_cluster_e82dd9a6c914c5e2db8170ca924a4ceb,
                    "macro_element_6bdcba2f693b26915ede5d1715151730" : fast_marker_cluster_6bdcba2f693b26915ede5d1715151730,
                    "macro_element_7d7981903eef8fe754b0a5fef96de410" : fast_marker_cluster_7d7981903eef8fe754b0a5fef96de410,
                    "macro_element_3998a8d18d9e1dd25317a0d8b0cd0308" : fast_marker_cluster_3998a8d18d9e1dd25317a0d8b0cd0308,
                    "macro_element_fef7077f3bc46a64254973d12fbf0a96" : fast_marker_cluster_fef7077f3bc46a64254973d12fbf0a96,
                    "macro_element_8717e2bd3e9fed098dd63bc2adae4c4c" : fast_marker_cluster_8717e2bd3e9fed098dd63bc2adae4c4c,
                    "macro_element_752867edcbbcbb067a10f640572fb872" : fast_marker_cluster_752867edcbbcbb067a10f640572fb872,
                    "macro_element_ba3436c4b98b4409055b93854900a3b1" : fast_marker_cluster_ba3436c4b98b4409055b93854900a3b1,
                    "macro_element_d0a258821539fdd6ed18b6b5f153aa4a" : fast_marker_cluster_d0a258821539fdd6ed18b6b5f153aa4a,
                    "macro_element_bb58055ae2f91e8a88496a1d70861bdd" : fast_marker_cluster_bb58055ae2f91e8a88496a1d70861bdd,
                    "macro_element_b7d4ae2e20086364ee82481e59e3e6b2" : fast_marker_cluster_b7d4ae2e20086364ee82481e59e3e6b2,
                    "macro_element_9b3275189d708f0c0345b985e2aa4fbe" : fast_marker_cluster_9b3275189d708f0c0345b985e2aa4fbe,
                    "macro_element_aeabec76c0d6c1b285d7d5c3b6eca45f" : fast_marker_cluster_aeabec76c0d6c1b285d7d5c3b6eca45f,
                    "macro_element_47f917f38373d14527e9f6c445ceb858" : fast_marker_cluster_47f917f38373d14527e9f6c445ceb858,
                    "macro_element_be152b6db3c57cb508b09e433fb9fa14" : fast_marker_cluster_be152b6db3c57cb508b09e433fb9fa14,
                    "macro_element_75be12dae9535fd61a92df28162c8680" : fast_marker_cluster_75be12dae9535fd61a92df28162c8680,
                    "macro_element_07120085c8ec475d5c230a202dcf9031" : fast_marker_cluster_07120085c8ec475d5c230a202dcf9031,
                    "macro_element_e5db6d3685a58a003c0983c94f06c670" : fast_marker_cluster_e5db6d3685a58a003c0983c94f06c670,
                    "macro_element_66ce6c41650999a7506083b846aaee54" : fast_marker_cluster_66ce6c41650999a7506083b846aaee54,
                    "macro_element_a7c3d1dbd1e1606edd5da2645f31a2b3" : fast_marker_cluster_a7c3d1dbd1e1606edd5da2645f31a2b3,
                    "macro_element_e56af4ab36c47b5ebc2c0d4109c4e70c" : fast_marker_cluster_e56af4ab36c47b5ebc2c0d4109c4e70c,
                    "macro_element_9e63d88decb7664f2fbb8943bb6512c2" : fast_marker_cluster_9e63d88decb7664f2fbb8943bb6512c2,
                    "macro_element_57024ad6527cc5e8a523943350d4163f" : fast_marker_cluster_57024ad6527cc5e8a523943350d4163f,
                    "macro_element_37406dfb6d688e3d0c07c9c2ca2f3f1b" : fast_marker_cluster_37406dfb6d688e3d0c07c9c2ca2f3f1b,
                    "macro_element_d219712b70a1ff0a702f648fc6a62e6d" : fast_marker_cluster_d219712b70a1ff0a702f648fc6a62e6d,
                    "macro_element_8b6391bf6f605a08f3d09df8e29ba4e1" : fast_marker_cluster_8b6391bf6f605a08f3d09df8e29ba4e1,
                    "macro_element_73d8fc5c27d940742ecfa42b5bd0bf30" : fast_marker_cluster_73d8fc5c27d940742ecfa42b5bd0bf30,
                    "macro_element_ad85835f111160229613e410408aaa43" : fast_marker_cluster_ad85835f111160229613e410408aaa43,
                    "macro_element_75deafed16f299afa1b97fb602353ada" : fast_marker_cluster_75deafed16f299afa1b97fb602353ada,
                    "macro_element_4199a467068a221070064e9954b438ef" : fast_marker_cluster_4199a467068a221070064e9954b438ef,
                    "macro_element_b821cc84922067d65daa81dea6d47888" : fast_marker_cluster_b821cc84922067d65daa81dea6d47888,
                    "macro_element_bc83df0578551d54f752dc4bdc24b123" : fast_marker_cluster_bc83df0578551d54f752dc4bdc24b123,
                    "macro_element_0fdddb75f7a40df08f0812ae57e9dc01" : fast_marker_cluster_0fdddb75f7a40df08f0812ae57e9dc01,
                    "macro_element_4deee37f77e215e231af03ba314b39cb" : fast_marker_cluster_4deee37f77e215e231af03ba314b39cb,
                    "macro_element_66ec0516821a11dd565cb683dfa69f9e" : fast_marker_cluster_66ec0516821a11dd565cb683dfa69f9e,
                    "macro_element_cd9f0e380685782c23d1a0c0cc72442b" : fast_marker_cluster_cd9f0e380685782c23d1a0c0cc72442b,
                },
            };
            L.control.layers(
                layer_control_92815e17ec78aeba6e4b5368cc9447de.base_layers,
                layer_control_92815e17ec78aeba6e4b5368cc9447de.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_46113f17546a5138496e8bd42ad5facf);
        
</script>
</html>`;