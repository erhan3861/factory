(function($) {

    jQuery(document).ready(function() {

        Panel.init();

        $(document).on('click', '.tab-controller', function() {
             Panel.togglePanel();
        });

    });

    var Panel = {

        isVisible : true,
        showMessage : null,
        hideMessage : null,
        animationDuration : 650,
        animationEasing : 'linear',

        init : function() {

        },

        hidePanel : function() {
            $('.panel-wrapper').animate({
                bottom : -(Panel.getAnimationOffset())
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = false;
                Panel.updateTabMessage();
            });

            $('.tab-controller').text("?");
        },

        showPanel : function() {
            $('.panel-wrapper').animate({
                bottom : 0
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = true;
                Panel.updateTabMessage();
            });

            $('.tab-controller').text("x");
        },

        togglePanel : function() {
            ((this.isVisible) ? this.hidePanel : this.showPanel)();
        },

        updateTabMessage : function() {
            if (this.isVisible) {
                $('.tab-controller .close').show();
                $('.tab-controller .show').hide();
            } else {
                $('.tab-controller .close').hide();
                $('.tab-controller .show').show();
            }
        },

        getAnimationOffset : function() {
            return $('.panel-content').height();
        }

    }

})(jQuery);