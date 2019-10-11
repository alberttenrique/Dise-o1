$('#myCarousel').on('slide.bs.carousel', function () {
  // do something...
})
$(document).ready(function(){
   $ventana = $(window);
   // funcion como se llama jquery hace que la 1er pantalla
   // sea del alto del navegador

   $('#intro').height($ventana.height());
   $ventana.scroll(function(){
   $('div.background').each(function(index, item){
     var $scroll = $(item);
     var yPos = -($ventana.scrollTop() / $scroll.data('speed'));
     var coords = '50% ' + yPos + 'px';
     $scroll.css({backgroundPosition: coords});

   });//cierra la linea 6
 });// cierra la linea 5
});//cierra la linea 1

  // en la linea 6> la funcion se ejecuta con cada elemento (item de arra each> cada item)
