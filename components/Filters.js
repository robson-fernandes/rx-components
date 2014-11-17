/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function GrayScaleFilter(img) {
    this.scale = 100;
    this.execute = function() {
        var c = img.className;
        img.className = "GrayScaleFilter" + " " + img.className + " ";
    };
}

function ShadowFilter(img) {
    this.execute = function() {
        var c = img.className;
        img.className = "ShadowFilter" + " " + img.className + " ";
    };
}

function BlurFilter(img) {
    this.execute = function() {
        var c = img.className;
        img.className = "BlurFilter" + " " + img.className  + " ";
    };
}

function InvertFilter(img) {
    this.execute = function() {
        var c = img.className;
        img.className = "InvertFilter" + " " + img.className  + " ";
    };
}

function SepiaFilter(img) {
    this.execute = function() {
        var c = img.className;
        img.className = "SepiaFilter" + " " + img.className  + " ";
    };
}

function FilterFactory(img,f) {
    this.execute = function() {
        if (f.localName === "fx-grayscale")
        {
           new GrayScaleFilter(img).execute();
        }
        else if (f.localName === "fx-shadow")
        {
           new ShadowFilter(img).execute();
        }
        else if (f.localName === "fx-blur")
        {
           new BlurFilter(img).execute();
        }
        else if (f.localName === "fx-invert")
        {
           new InvertFilter(img).execute();
        }
        else if (f.localName === "fx-sepia")
        {
           new SepiaFilter(img).execute();
        }
    };
}

