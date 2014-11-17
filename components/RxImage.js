/*
 * Definição das regras do componente Rx-Image
 */
Polymer('rx-image', {
    created: function() {},
    
    ready: function() {
       this.applyFilter();
    },
    
    /*
     * Método applyFilter
     * Gerenciamento e aplicação de filtros a imagem
     */
    applyFilter : function()
    {  
        var filtros = this.$.content.getDistributedNodes();
        var img = this.$.webComponentImg;

           for (i = 0; i < filtros.length; i++) {
                var item = filtros[i];

                for (j = 0; j < item.children.length; j++) {

                        var f = item.children[j];
                        var factory = new FilterFactory(img, f);
                        factory.execute();
                 }
           }

        var rotation = this.rotation;
        if (rotation > 0)
            img.className = "Rotation" + " " + img.className  + " ";
    }

});


