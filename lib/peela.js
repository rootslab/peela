/*
 * Peela, a tiny (LIFO) stack.
 *
 * Copyright(c) 2015 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Peela = ( function () {
    var isArray = Array.isArray
        // Peela
        , Peela = function ( arr ) {
            var me = this
                , is = me instanceof Peela
                ;
            if ( ! is ) return new Peela( arr );
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
        return l ? stack.splice( slen - l, slen ).reverse() : stack.pop();
    };

    pproto.head = function ( k ) {
        var me = this
            , l = k ? ( + k ? Math.abs( k ) : 0 ) : 0
            , stack = me.stack
            , hpos = stack.length - l - 1
            ;
        return stack[ hpos ];
    };

    pproto.tail = function ( k ) {
        var me = this
            , l = k ? ( + k ? Math.abs( k ) : 0 ) : 0
            , stack = me.stack
            ;
        return stack[ l ];
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

    pproto.concat = function ( o, reverse ) {
        var me = this
            , stack = me.stack
            , alen = arguments.length
            , arr = isArray( o ) ? o : ( alen ? [ o ] : [] )
            ;
        stack.push.apply( stack, reverse ? arr.reverse() : arr );
        return me;
    };

    pproto.flush = function ( evict ) {
        var me = this
            , stack = me.stack
            , slen = stack.length
            , empty = evict === undefined || evict === true
            ;
            return empty ? ( stack.length = 0 ) || slen : 0;
    };

    return Peela;
} )();