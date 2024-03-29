// ANIMACAO MENU
/////////////////////////////////////////////////////////////////////////////////////
$(function () {
  $("ul#menu span").css("opacity", "0"); // Definir a opacidade no carregamento da pÃ¡gina
  $("ul#menu span").hover(function () { // on mouse over
      $(this).stop().animate({ // animar a opacidade a plena
        opacity: 1
      }, 'slow');
    },

    function () { // on mouse out
      $(this).stop().animate({ // animar a opacidade
        opacity: 0
      }, 'slow');
    });
});
///////////////////////////////////////////////////////////////////////////////////////////
// FUNÃ‡OES JQUERY
///////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // ANIMAÃ‡ÃƒO MENU
  /////////////////////////////////////////////////////////////////////////////////////
  $("#sub-estrutura").hide();
  $("#sub-translima").hide();

  $(".m-home").hover(function () {
    $("#sub-estrutura").slideUp();
    $("#sub-translima").slideUp();
  });
  $(".m-trans").click(function () {
    $("#sub-estrutura").slideUp();
    $("#sub-translima").slideDown('slow');
  });
  $(".m-estrutura").click(function () {
    $("#sub-estrutura").slideDown('slow');
    $("#sub-translima").slideUp();
  });
  $(".m-frota").hover(function () {
    $("#sub-estrutura").slideUp();
    $("#sub-translima").slideUp();
  });
  $(".m-contato").hover(function () {
    $("#sub-estrutura").slideUp();
    $("#sub-translima").slideUp();
  });
  $(".align").hover(function () {
    $("#sub-estrutura").slideUp();
    $("#sub-translima").slideUp();
  });
  // CYCLE INDEX - BANNER ROTATIVO
  /////////////////////////////////////////////////////////////////////////////////////
  $('#slider').cycle({
    timeout: 10000, //Tempo da transiÃ§Ã£o
    speed: 700, //Velocidade da transiÃ§Ã£o
    fx: 'turnUp', //Tipo
    pager: '#banner_nav', //A div que vai aprensetar os nÃºmeros do slides
    prev: '#banner-prev', //Link para voltar ao slide anterior
    next: '#banner-next' //Link para prÃ³ximo slide
  });
  // label forms
  /////////////////////////////////////////////////////////////////////////////////////
  $("#f-nome").inputLabel();
  $("#f-empresa").inputLabel();
  $("#f-email").inputLabel();
  $("#f-telefone").inputLabel();
  $("#f-assunto").inputLabel();
  $("#f-mensagem").inputLabel();


});
///////////////////////////////////////////////////////////////////////////////////////////
// LABEL FORMULARIO
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * jQuery Initial input value replacer
 * 
 * Sets input value attribute to a starting value  
 * @author Marco "DWJ" Solazzi - hello@dwightjack.com
 * @license  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @copyright Copyright (c) 2008 Marco Solazzi
 * @version 0.1
 * @requires jQuery 1.2.x
 */
(function (jQuery) {
  /**
   * Setting input initialization
   *  
   * @param {String|Object|Bool} text Initial value of the field. Can be either a string, a jQuery reference (example: $("#element")), or boolean false (default) to search for related label
   * @param {Object} [opts] An object containing options: 
   * 							color (initial text color, default : "#666"), 
   * 							e (event which triggers initial text clearing, default: "focus"), 
   * 							force (execute this script even if input value is not empty, default: false)
   * 							keep (if value of field is empty on blur, re-apply initial text, default: true)  
   */
  jQuery.fn.inputLabel = function (text, opts) {
    o = jQuery.extend({
      color: "#858585",
      e: "focus",
      force: false,
      keep: true
    }, opts || {});
    var clearInput = function (e) {
      var target = jQuery(e.target);
      var value = jQuery.trim(target.val());
      if (e.type == e.data.obj.e && value == e.data.obj.innerText) {
        jQuery(target).css("color", "").val("");
        if (!e.data.obj.keep) {
          jQuery(target).unbind(e.data.obj.e + " blur", clearInput);
        }
      } else if (e.type == "blur" && value == "" && e.data.obj.keep) {
        jQuery(this).css("color", e.data.obj.color).val(e.data.obj.innerText);
      }
    };
    return this.each(function () {
      o.innerText = (text || false);
      if (!o.innerText) {
        var id = jQuery(this).attr("id");
        o.innerText = jQuery(this).parents("form").find("label[for=" + id + "]").hide().text();
      } else
      if (typeof o.innerText != "string") {
        o.innerText = jQuery(o.innerText).text();
      }
      o.innerText = jQuery.trim(o.innerText);
      if (o.force || jQuery(this).val() == "") {
        jQuery(this).css("color", o.color).val(o.innerText);
      }
      jQuery(this).bind(o.e + " blur", {
        obj: o
      }, clearInput);

    });
  };
})(jQuery);