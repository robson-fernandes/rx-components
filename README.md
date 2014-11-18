Rx-components
=============

Rx-components. Componentes avançados para processamento de imagens baseados em HTML5


#Componente

##Fx-Sepia

Aplicação do filtro sépia através da tag ```<fx-sepia>```. O Filtro sépia aplica tonalidades entre o acinzentado e amarronzado, deixando a imagem com aspecto envelhecido.


```html
<rx-image src="lena.jpg">
   <fx-filter>
        <fx-sepia></fx-sepia>
    </fx-filter>
</rx-image>
```

###Resultado Filtro Fx-Sepia
![Resultado Fx-Sepia][fxsepia]

Antes e depois da aplicação do filtro sépia
[fxsepia]: https://raw.githubusercontent.com/robson-fernandes/Rx-components/master/fx-sepia.jpg


##Fx-GrayScale

Aplicação do filtro de inversão através da tag ```<fx-grayscale>```. O Filtro Gray Scale possui a característica converter uma imagem colorida em uma escala de tons de cinza.


```html
<rx-image src="lena.jpg">
    <fx-filter>
         <fx-grayscale></fx-grayscale>
     </fx-filter>
</rx-image>
```

###Resultado Filtro Fx-GrayScale
![Resultado Fx-GrayScale][fxgrayscale]

Antes e depois da aplicação do escala de cinza
[fxgrayscale]: https://raw.githubusercontent.com/robson-fernandes/Rx-components/master/fx-grayscale.jpg


##Fx-Blur

Aplicação do filtro de blur através da tag ```<fx-blur>```. O Filtro Blur possui a característica aplicar um efeito “embaçado” em uma imagem.


```html
<rx-image src="lena.jpg">
    <fx-filter>
         <fx-blur></fx-blur>
     </fx-filter>
</rx-image>
```

###Resultado Filtro Fx-Blur
![Resultado Fx-Blur][fxblur]

Antes e depois da aplicação do filtro blur
[fxblur]: https://raw.githubusercontent.com/robson-fernandes/Rx-components/master/fx-blur.jpg
