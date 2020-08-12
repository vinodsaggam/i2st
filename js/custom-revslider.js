/*
 * Revolution custom js file
 * Author: Design_mylife
 * 
 */
//full width slider

jQuery(document).ready(function() {

    var tpj = jQuery;
    //tpj.noConflict();

    tpj(document).ready(function() {

        if (tpj.fn.cssOriginal != undefined)
            tpj.fn.css = tpj.fn.cssOriginal;

        tpj('.slider-1').revolution({
            delay: 9000,

            startwidth: 1100, // 1100 = default content width
            startheight: 451,

            onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off

            hideThumbs: 0,

            navigationType: "none",

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 25,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 25,
            soloArrowRightVOffset: 0,

            touchenabled: "on", // Enable Swipe Function : on/off



            stopAtSlide: -1, // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops: -1, // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

            hideCaptionAtLimit: 0, // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit: 0, // Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit: 0, // Hide the whole slider, and stop also functions if Width of Browser is less than this value


            fullWidth: "on",

            shadow: 0 //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

        });




    });

});