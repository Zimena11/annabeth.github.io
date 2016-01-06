/* $(document).ready(init);

 function init(){
     $('.list-nav a').click(function(){
         //$('.list-nav a').removeClass(' active');
         //$(this).addClass(' active');

         //TweenMax.to(selector,tiempo,propiedades o objetos {prop:valor})
         //TweenMax.to('.list-nav a',1,{scale:1, rotation:0, ease:Elastic.easeOut});
         //TweenMax.to(this,2,{scale:1.5, rotation:45, ease:Back.easeOut});
     });

     initSlider();
 }

var sliderPosX= 0;
var anchoSlider= 0;

function initSlider(){
    setInterval(changeImg, 2000);

    anchoSlider= $(".slider li").length*900;
}

function changeImg(){
    console.log('Cambia de Imagen');

    if(sliderPosX > -(anchoSlider-900)){
        sliderPosX-=900;
    }
    else{
        sliderPosX =0;
    }
    $(".slider ul").css('margin-left',sliderPosX+'px');
    //TweenMax.To($(".slider ul"),3,{marginLeft:sliderPosX+'px', ease: Quart});

}*/
