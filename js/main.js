
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
        
        
        