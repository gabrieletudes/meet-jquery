;(function(){"use strict";var fHandleTab=function fHandleTab(oEvent){var $this=$(this);oEvent.preventDefault();if($this.parent().hasClass("active")){return;}$("ul.nav.nav-tabs .active").removeClass("active");$this.parent().addClass("active");$(".tab-pane.active").removeClass("active");$("#"+$this.data("tab-target")).addClass("active");};$(function(){$('a[ rel*="external"]').attr("target","_new");$("ul.nav.nav-tabs a").on("click",fHandleTab);});})();