/*  bgImageTween, a Jquery plugin for smooth background image transition loops.
    Copyright (C) 2010-2012  Toni Anzlovar

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function( $ ){
  $.fn.btw = function(images, staytime, fadetime) {
    var t = $(this);
    t.wrapInner('<div class="btwfc"></div>');
    var content = $('.btwfc', this);
    t.prepend('<div class="btwf"></div>');
    var fader = $('.btwf', this);
    
    content.css({position: 'absolute'});
    fader.css({
      position: 'absolute',
      width: t.width(),
      height: t.height(),
      opacity: 0
    });
    
    n = images.shift(); images.push(n);
    t.css('backgroundImage', 'url('+n+')');
    n= images.shift(); images.push(n);
    fader.css('backgroundImage', 'url('+n+')');
    
    function switcher() {
      fader.delay(staytime);
      fader.animate({opacity: 1},fadetime);
      fader.queue(function(){
        n = images.shift(); images.push(n);
        fader.parent().css('backgroundImage', 'url('+n+")");
        $(this).dequeue();
      });
      fader.delay(staytime);
      fader.animate({opacity: 0},fadetime);
      fader.queue(function(){
        n = images.shift(); images.push(n);
        fader.css('backgroundImage', 'url('+n+")", switcher() );
        $(this).dequeue();
      });
    };
    switcher();
  };
})( jQuery );
