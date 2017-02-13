/* gabrieletudes/meet-jquery
 *
 * /src/js/script.js - Main script ( DOM )
 *
 * coded by gabriel!
 * started at 09/02/2017
 */


window.addEventListener("load", function(){
    // 1. a with rel=external opens in new window
    Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ){
        $elt.setAttribute( "target", "_new" );
    });
});
