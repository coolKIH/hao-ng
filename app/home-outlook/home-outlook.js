/**
 * Created by hao on 17-2-14.
 */
angular.module('homeOutlook',[])
  .component('homeOutlook',{
    templateUrl: 'home-outlook/home-outlook.html',
    controller: function() {

      this.setTheme = function(theme) {
        this.pickedTheme = theme;
      };
      this.setTheme('home');
    }
  });