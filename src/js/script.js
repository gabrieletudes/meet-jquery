/* gabrieletudes/meet-jquery
 *
 * /src/js/script.js - Main script ( jQuery)
 *
 * coded by gabriel!
 * started at 13/02/2017
 */

const fHandleTab = function( oEvent ){
    // the link where we have clicked on
    let $this = $( this );

    oEvent.preventDefault();
    if ($this.parent().hasClass( "active" ) ) {
        return;
    }
    $( "ul.nav.nav-tabs .active" ).removeClass( "active" );
    $this.parent().addClass( "active" );
    $( ".tab-pane.active" ).removeClass( "active" );
    //
    $( `#${ $this.data( "tab-target" ) }` ).addClass( "active" );
};

 $( function(){
    // 1. a with rel="external"
    $( 'a[ rel*="external"]' ).attr( "target", "_new" );
    // 2. tabs
    $( "ul.nav.nav-tabs a" ).on( "click", fHandleTab );
 })
