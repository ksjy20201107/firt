jQuery(document).ready(function() {
        jQuery(function () {
            jQuery('#defaultCountdown').countdown({until: new Date(2020, 10, 7, 15)}); 
            // year, month, date, hour 월에서 1빼야함
        });
});		

