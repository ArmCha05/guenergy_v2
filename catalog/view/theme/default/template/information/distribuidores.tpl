
<?php echo $header; ?>

<style>
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	#map {
		height: 100%;
	}


</style>

<div class="pagehero">
	<div class="hero-bg fondoDistribuidor" >
		
	</div>

	<div class="copy">
		<h1 itemprop="headline" class="entry-title">
			DISTRIBUIDORES
		</h1>
		
		<p itemprop="sub-title" class="sub-title">

			<span class="ditribuidorTittle" > 
				CONOCE EL DISTRIBUIDOR MÁS CERCANO A TI
			</span>
		</p>

	</div>

</div>
	<br>
	<br>
	<div class="col-sm-5"></div>
	<div class="col-sm-6">
        <div class="input-group">
            <input id="address" type="textbox" placeholder="Selecciona un lugar" value="" class="form-control" autocomplete="on" >
            <span class="input-group-btn">
                <button class="btn btn-success " id="submit"><i class="fa fa-search" value="Geocode"></i></button>
            </span>
        </div>
    </div>

	<br>
	<br>
    <br>

    
    <div class="col-sm-3 scrollTable" >
    	<table class="table table-bordered" border="1">
    		<tbody id="distribuidores_table">
    			
    		</tbody>
    	</table>
    </div>

    <div id="map" class="col-sm-9">
    	
    </div>
    

   


<?php echo $footer; ?>


<script>


	var sucursales =
	[
		{"Nombre":"Gu Energy Guadalajara", "Direccion": "Patria", "Telefono": "324234", "Website": "patria@asjdfkl", "Latitud":20.653995,"Longitud":-103.366288,"Linea":"Si"},
		{"Nombre":"Vertimania Sucursal Guadalajara", "Direccion": "Av. de la Paz 2350, Lafayette, 44160", "Telefono": "33 36165371", "Website": "http://www.vertimania.com/shop/?target=contacto", "Latitud":20.672427, "Longitud":-103.375085,"Linea":"Toda"},
		{"Nombre":"Vertimania Sucursal Mixcoac", "Direccion": "Patriotismo # 724. Entre Holbein y Rubens Col. San Juan, México D.F. C.P 03730", "Telefono": "( 55 ) 56 15 52 29 / ( 55 ) 56 15 52 30" , "Website": "", 
		"Latitud":19.379127,"Longitud":-99.185722,"Linea":""},
		{"Nombre":"Vertimania Sucursal Monterrey", "Direccion": "Av. Real de San Agustin # 222Plaza Fiesta San Agustin Loc. K01 Y k02, San Pedro Garza, Nuevo Leon.", "Telefono": "( 81) 83 63 43 01 / Tel/ fax ( 81 ) 83 63 44 29", "Website": "", "Latitud":25.649344,"Longitud":-100.334841,"Linea":""},
		{"Nombre":"TRAIL &RUN CUMBRES MTY", "Direccion": "Paseo de los Leones 118-A Esq. Cumbres Elite, Frac Cumbres Elite 6to sector, Monterrey, NL cp 64349", "Telefono": "", "Website": "", "Latitud":25.697093,"Longitud":-100.349623,"Linea":""},
		{"Nombre":"Garnier Sports", "Direccion": "CARRETERA TORREON SAN PEDRO K.M 3.3 S/N LOCAL 3, Col. LA UNION C.P. 27367, TORREON, COAHUILA, MEXICO", "Telefono": "(871) 2 04 41 90", "Website": "garnier sports (facebook)", "Latitud":25.546374,"Longitud":-103.450306,"Linea":"Toda"},
		{"Nombre":"Garnier Sports", "Direccion": "Blvrd Independencia 94-A, Los Ángeles, 27000 Torreón, ", "Telefono": "(871) 7 12 60 03", "Website": " garnier sports (facebook)", "Latitud":25.549171,"Longitud":-103.446835,"Linea":""},
		{"Nombre":"Fitness Market ", "Direccion": " Av. Convención sur #1301-C Jardines de La Luz CP 20296 Aguascalientes, Ags.", "Telefono": " 449 187 87 74", "Website": "www.fitnessmarket.mx  Fb- Fitness Market", "Latitud":21.866073,"Longitud":-102.284267,"Linea":""},
		{"Nombre":"CICLOPARTES2000", "Direccion": "Av. Rio San Pedro Sur No.1 Col Centro. ", "Telefono": "639 4742617", "Website": "CicloPartes2000/Facebook", "Latitud":28.184708,"Longitud":-105.473678,"Linea":"Si"},
		{"Nombre":"Paya Bike", "Direccion": "Rigoberto Garcia Bejar 1a de palapas no. 67", "Telefono": "  312-3966112", "Website": "https://www.facebook.com/PayaBikeshop/?hc_ref=PAGES_TIMELINE&fref=nf", "Latitud":"","Longitud":"", "Linea":"Si"},
		{"Nombre":"ENERLIFE", "Direccion": "Av. Lopez Portillo S/N, entre tercera privada y calle 18, Col. Samula C.P. 24090 Campeche Campeche.", "Telefono": "(981) 1446360 y (981) 1446361", "Website": "FB: ENERLIFE CAMPECHE", "Latitud":19.825344,"Longitud":-90.544910,"Linea":""},
		{"Nombre":"SWIM BIKE & RUN (SBR)", "Direccion": "PLAZA DIAMANTE, AV. VASCO DE QUIROGA 3900, LOMAS DE SANTA FE, CUAJIMALPA", "Telefono": " 5292*3594 Y 1664*6309", "Website": " www.sbr-mexico.com FB: Swim Bike & Run Store + Lab", "Latitud":19.360937,"Longitud":-99.278783,"Linea":""},
		{"Nombre":"Puk Travel Sports ", "Direccion": "Luis González Obregon 10, Zona centro. Entre Presidencia y Jardín Unión Frente à Banorte ", "Telefono": "01 4737321999", "Website": "fb : Puk Travel Sports & Adventures", "Latitud":19.436821,"Longitud":-99.133119,"Linea":""},
		{"Nombre":"CORRE LIBRE", "Direccion": "Av.L. Van Beethoven 5747", "Telefono": "31256750", "Website": "www.correlibre.mx", "Latitud":20.670537,"Longitud":-103.436628,"Linea":""},
		{"Nombre":"WOWBIKE", "Direccion": "CALZADA AL SUMIDERO N°72-A, COL. LAS DELICIAS TUXTLA GUTIERREZ, CHIAPAS", "Telefono": "WHATSAPP: 9612367737", "Website": "FACE: WOW BIKES", "Latitud":16.762536,"Longitud":-93.104830,"Linea":""},
		{"Nombre":" 3MART, SUC. BEETHOVEN", "Direccion": "DOCTORES #390 INT. 1, 2 Y 3 COL. LOMAS DEL SEMINARIO ZAPOPAN, JALISCO C. P. 45038", "Telefono": "(33) 3110 6648", "Website": "WWW.3MARTMX.COM", "Latitud":20.669028,"Longitud":-103.423769,"Linea":""},
		{"Nombre":" 3MART, SUC. VALLE REAL", "Direccion": " AV. CALZADA DEL SERVIDOR PÚBLICO #1262 INT. 5 Y 6 COL. JARDINES DEL VALLE ZAPOPAN, JALISCO C. P. 45138", "Telefono": "(33) 1733 4732", "Website": "WWW.3MARTMX.COM", "Latitud":20.741791,"Longitud":-103.430650,"Linea":""},
		{"Nombre":"VIANSI NITRO", "Direccion": "AV SAN JERONIMO 630 HO-03 ALVARO OBREGON CDMX 01090", "Telefono": "55957141", "Website": " www.viansi.com", "Latitud":19.328916,"Longitud":-99.210114,"Linea":""},
		{"Nombre":"EL SALON DE LA BICICLETA ", "Direccion": "JUAREZ 872, COL. CENTRO", "Telefono": "33 38 26 15 07", "Website": "FACEBOOK EXPRESSBIKE", "Latitud":20.674968,"Longitud":-103.357798,"Linea":""},
		{"Nombre":"SPORELLI", "Direccion": "Avenida Vallarta No. 3090 Local L-03 , Colonia Vallarta Norte, CP: 44690, Guadalajara Jalisco", "Telefono": "55-91975938", "Website": "", "Latitud":20.674636,"Longitud":-103.393050,"Linea":""},
		{"Nombre":"TRANSVISION BIKE INTERLOMAS", "Direccion": " BLVD. INTERLOMAS NO. 5 SUBANCLA 4 HUIXQUILUCAN EDO. DE MEXICO", "Telefono": "5536050717", "Website": "www.transvisionbike.com TRANSVISION BIKE", "Latitud":19.398904,"Longitud":-99.288528,"Linea":""},
		{"Nombre":"WERBIKES SUC. SAN ANGEL", "Direccion": "Desierto de los Leones #45, San Ángel, México, CDMC, CP 01000", "Telefono": "(55) 6394 9927 Y(55) 6819 7111 / (55) 6819 7111", "Website": "WWW.WERBIKES.COM.MX", "Latitud":19.349571,"Longitud":-99.189250,"Linea":""},
		{"Nombre":"WERBIKES SUC. SANTA FE", "Direccion": "Guillermo González Camaréna 1100 -B, Santa Fe, México, CDMX, CP 01210", "Telefono": "(55) 5292 0126 Y (55) 7045 9866", "Website": "WWW.WERBIKES.COM.MX", "Latitud":19.365246,"Longitud":-99.264183,"Linea":""},
		{"Nombre":"WERBIKES SUC. SATELITE", "Direccion": "Blvd. Manuel Ávila Camacho 1920, Cd. Satélite, Edomex, CP 53100", "Telefono": "(55) 7598 8648", "Website": "WWW.WERBIKES.COM.MX", "Latitud":19.501819,"Longitud":-99.237019,"Linea":""},
		{"Nombre":"WERBIKES SUC. CHILUCA", "Direccion": "Plaza Esmeralda, Chiluca  1, Chiluca, Cd López Mateos, Edomex", "Telefono": "(55) 9131 5547", "Website": "WWW.WERBIKES.COM.MX", "Latitud":19.554991,"Longitud":-99.296680,"Linea":""},

		
	];

	var map = null;

	function initMap() {
	  var myLatLng = {lat: 20.653995, lng:  -103.366288};

	  map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 15,
	    center: myLatLng
	  });

	  for(var i = 0; i<sucursales.length;i++)
	  {
		  cambiarMapa(i);

		  var $tr = $('<tr><td><h6></h6><hr><h7></h7><br><h7></h7><br><h7></h7><br><h7></h7><br></td></tr>');
		  $tr.attr('id',i);
		  $tr.find('h6').text(sucursales[i]['Nombre']);
		  $tr.find('h7').eq(0).text(sucursales[i]['Direccion']);
		  $tr.find('h7').eq(1).text(sucursales[i]['Telefono']);
		  $tr.find('h7').eq(2).text(sucursales[i]['Website']);
		  $tr.find('h7').eq(3).text(sucursales[i]['Linea']);
		
		  var lat = sucursales[i]['Latitud'];
		  var long = sucursales[i]['Longitud'];
		  var nombre = sucursales[i]['Nombre'];
		  var dir = sucursales[i]['Direccion'];
		  var tel = sucursales[i]['Telefono'];
		  var web = sucursales[i]['Website'];
		  var linea = sucursales[i]['Linea'];
		  

		  $('#distribuidores_table').append($tr);
		   
	  }
	  $('#distribuidores_table tr').on('click',function(){
	  	var indice = $(this).attr('id');
	  	cambiarMapa(indice);
	  });

	  navigator.geolocation.getCurrentPosition(getUserPosition, gestionarErrores); 


	  var geocoder = new google.maps.Geocoder();

	  document.getElementById('submit').addEventListener('click', function() {
	    geocodeAddress(geocoder, map);
	  });

	}
 	
 	function getUserPosition(posicion){
		myLatLng = {lat: posicion.coords.latitude, lng:  posicion.coords.longitude};
		map.setCenter(myLatLng);
		map.setZoom(15);

		var contentString = '<div id="content">'+
     	'<div id="siteNotice"><h7>Aquí te encuentras</h7>'+
      	'</div>'+
      	
      	'</div>';

 		var infowindow = new google.maps.InfoWindow({
    		content: contentString
  		});

	 	var marker = new google.maps.Marker({
	    	position: myLatLng,
	    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
	    	map: map,
	    	title:'Gu Energy sucursal ' ,

	  	});

	  	marker.addListener('click', function() {
    		infowindow.open(map, marker);
 		});

	 	
	}
		 
	function gestionarErrores(error){
		alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
		'a internet y habilite la opción permitir compartir ubicación física');
	}

	function geocodeAddress(geocoder, resultsMap) {
	  	var address = document.getElementById('address').value;
	 	geocoder.geocode({'address': address}, function(results, status) {
		    if (status === google.maps.GeocoderStatus.OK) {

		       map.setCenter(results[0].geometry.location);
		       map.setZoom(15);
		        /*var marker = new google.maps.Marker({
		        map: resultsMap,
		        position: results[0].geometry.location
		      });*/
		    } else {
		      alert('Geocode was not successful for the following reason: ' + status);
		    }
  		});
	}

	

	function cambiarMapa(indice)
	{
		var myLatLng = {lat: sucursales[indice]['Latitud'], lng: sucursales[indice]['Longitud']};

		map.setCenter(myLatLng);
		map.setZoom(15);

	 	var contentString = '<div id="content">'+
     	'<div id="siteNotice">'+
      	'</div>'+
      	'<h6 id="firstHeading" class="firstHeading">'+sucursales[indice]['Nombre']+'</h6><hr>'+
      	'<div id="bodyContent">'+
      	'<h7>'+sucursales[indice]['Direccion']+'</h7><br>'+
      	'<h7>'+sucursales[indice]['Telefono']+'</h7><br>'+
      	'<h7>'+sucursales[indice]['Website']+'</h7><br>'+
      	'<h7>'+sucursales[indice]['Linea']+'</h7><br>'+
      	'</div>'+
      	'</div>';

 		var infowindow = new google.maps.InfoWindow({
    		content: contentString
  		});


	 	var marker = new google.maps.Marker({
	    	position: myLatLng,
	    	map: map,
	    	title:'Gu Energy sucursal ' ,

	  	});

	 	marker.addListener('click', function() {
    		infowindow.open(map, marker);
 		});

	}
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyY-eBOYa2m2Uu_9Lcu-Wcd3uWVifCR74&callback=initMap">
</script>





