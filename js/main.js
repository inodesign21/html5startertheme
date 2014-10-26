
 window.onload = function () {

   // Ajustes do Multiseleção classe multiselect
    $('.multiselect').multiselect({
        numberDisplayed: 2,
        buttonWidth: '172px',
        maxHeight: 150,
        nonSelectedText: 'Selecione',
        enableFiltering: true,
        filterBehavior: 'both',
        enableCaseInsensitiveFiltering: false,
        filterPlaceholder: 'Procure',
        includeSelectAllOption: true,
        selectAllText: 'Todos'
    });

  // Ajustes seleção bootstrap classe selectpicker
    $('.selectpicker').selectpicker({
      size: 4,
      width: '172px'
     });

// Instance the tour
    var tour = new Tour({
      steps: [
      {
        element: ".one",
        title: "Welcome",
        content: "Welcome to our app, take this tour to be familirized with it."
      },
          {
        element: ".two",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".three",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".four",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      },
      {
        element: ".five",
        title: "This Image",
        content: "In this application we generate random placeholder images for any case."
      }  
    ],
      backdrop: true,
      storage: false
    });

    tour.init();


    // Botão inicia tour (todo: somente para mobile)
    $('#tour').click(function(e){
    tour.start();
    e.preventDefault(); 
    });

    
    // Inicia slider range With JQuery
    $("#ex2").slider({
        tooltip: 'always'
    });

    // Gallery
    document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

};



// JQuery rest api test flickr
(function() {
          var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
          $.getJSON( flickerAPI, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
          })
            .done(function( data ) {
              $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 3 ) {
                  return false;
                }
              });
            });
        })();


        // JQuery rest api test name

        function myFunctionName() {
            var person = prompt("Nomeeeeeee", "Harry Potter");
            if (person != null) {
                document.getElementById("nameUser").innerHTML =
                "Olááááá " + person + "! Tainha, vinho e muita @#%$";
            }
        }


// JQuery rest api test last.fm
        $("#botaoresetar").hide();


        function myFunctionRodar() {
            var artistName = prompt("Artistaaaaaaaa", "Air");
            var artistAlbum = prompt("Albummmmmmm", "Air");
            $.ajax({
                url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=08963bdec6bde5d6189e3d7dc86fa6ac&artist="+artistName+"&album="+artistAlbum+"&format=json"
            }).then(function(data) {
               $('.lasf-fm-album-name').append(data.album.name);
               $('.lasf-fm-album-artist').append(data.album.artist);
               $('.lasf-fm-album-playcount').append(data.album.playcount);
               $('.lasf-fm-album-listeners').append(data.album.listeners);
               $('.lasf-fm-album-img').append("<img src="+data.album.image[4]["#text"]+" />");
               $("img[src='"+data.album.image[4]["#text"]+"']").addClass("img-responsive");
               $("#botaorodar").hide();
               $("#botaoresetar").show();
            });
        }

        $('#botaoresetar').click(function() {
            location.reload();
        });



        
        
        
        