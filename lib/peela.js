/*
 * Peela, a tiny (LIFO) stack.
 *
 * Copyright(c) 2014 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Peela = ( function () {
    var log = console.log
        , util = require( 'util' )
        , isArray = Array.isArray
        // Peela
        , Peela = function ( arr ) {
            var me = this;
            if ( ! ( me instanceof Peela ) ) {
                return new Peela( arr );
            }
            me.stack = isArray( arr ) ? arr : []; 
        }
        , pproto = Peela.prototype
        ;

    pproto.push = function () {
        var me = this
            , stack = me.stack
            ;
        return stack.push.apply( stack, arguments );
    };

    pproto.pop = function ( k ) {
        var me = this
            , stack = me.stack
            , slen = stack.length
            , l = k ? Math.min( k, slen ) : 0
            ;

        if ( ! l ) {
            return stack.pop();
        }
        return stack.splice( slen - l, slen ).reverse();
    };

    pproto.head = function ( k ) {
        var me = this
            , l = k ? Math.abs( k ) : 0
            , stack = me.stack
            , hpos = stack.length - l - 1
            ;
        return stack[ hpos ];
    };

    pproto.size = function () {
        var me = this;
        return me.stack.length;
    };

    pproto.indexOf = function ( el, from ) {
        var me = this
            , stack = me.stack
            , r = stack.indexOf( el )
            , len = stack.length - 1
            , f = len - ( +from || 0 )
            ;
        return ~r ? ( r <= f ? len - r : -1 ) : -1;
    };

    pproto.flush = function ( evict ) {
        var me = this
            stack = me.stack
            slen = stack.length
            ;
        if ( evict === false ) {
            return 0;
        }
        stack.length = 0;
        return slen;
    };

    return Peela;
} )();