/**
 * Filtragem - GrayScale
 * @param img
 * @constructor
 */
function GrayScaleFilter(img) {
    this.scale = 100;
    this.execute = function() {
        img.className = "GrayScaleFilter" + " " + img.className + " ";
    };
}

/**
 * Filtragem - Shadow
 * @param img
 * @constructor
 */
function ShadowFilter(img) {
    this.execute = function() {
        img.className = "ShadowFilter" + " " + img.className + " ";
    };
}

/**
 * Filtragem - Blur
 * @param img
 * @constructor
 */
function BlurFilter(img) {
    this.execute = function() {
        img.className = "BlurFilter" + " " + img.className  + " ";
    };
}

/**
 * Filtragem - Invert
 * @param img
 * @constructor
 */
function InvertFilter(img) {
    this.execute = function() {
        img.className = "InvertFilter" + " " + img.className  + " ";
    };
}

/**
 * Filtragem Sepia
 * @param img
 * @constructor
 */
function SepiaFilter(img) {
    this.execute = function() {
        img.className = "SepiaFilter" + " " + img.className  + " ";
    };
}

/**
 * Class Factory
 * @param img
 * @param f
 * @constructor
 */
function FilterFactory(img,f) {

    /**
     * Method Execute
     */
    this.execute = function() {

        switch (f.localName)
        {
            case "fx-grayscale":
                new GrayScaleFilter(img).execute();
                break;

            case "fx-shadow":
                new ShadowFilter(img).execute();
                break;

            case "fx-blur":
                new BlurFilter(img).execute();
                break;

            case "fx-invert":
                new InvertFilter(img).execute();
                break;

            case "fx-sepia":
                new SepiaFilter(img).execute();
                break;
        }

    };
}