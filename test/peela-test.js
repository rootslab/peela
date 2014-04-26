#!/usr/bin/env node

/* 
 * Peela Test
 *
 */

var log = console.log
    , assert = require( 'assert' )
    , util = require( 'util' )
    , Peela = require( '../' )
    , p1 = Peela()
    , p2 = Peela()
    , a = []
    , l = 16
    , i = l
    ;

// fill array with l + 1 values 
for ( ; ~i; a[ i ] = i-- );

log( '- push(%d) items into stack p1.', l + 1 );
p1.push.apply( p1, a );

log( '- concat array with %d items with stack p2.', l + 1 );
p2.concat( a );

log( '- check if result of #push and #concat is the same.' );
assert.deepEqual( p1, p2 );

log( '- check the result of #head(i) and pop() between p1 and p2 (%d tests).', l + 1 );

i = 0;

for ( ; i <= l; ++i ) {
    assert.equal( p1.head(i), p2.pop() );
};

log( '- check stacks sizes. p2 should be empty, p1 should be full.' );
assert.equal( p1.size(), l + 1 );
assert.equal( p2.size(), 0 );

log( '- #pop(%d) elements from p1 and concat to p2.', p1.size() >> 1 );
p2.concat( p1.pop( p1.size() >> 1 ) );

log( '- check if p1 and p2 sizes are correct.' );
assert.equal( p2.size(), ( l + 1 ) >> 1 );

log( '- test p1 #indexOf results (%d tests).', p1.size() );
log( '- p1.stack: %j', p1.stack );

i = 0;

for ( ; i <= p1.size(); ++i ) {
    log( '  > p1.indexOf(%d): %d', i, p1.size() - i - 1 );
    assert.equal( p1.indexOf( i ), p1.size() - i - 1 );
};

log( '- test p1 #indexOf results with offset (%d tests).', p1.size() );
log( '- p1.stack: %j', p1.stack );

i = 0;

for ( ; i <= p1.size(); ++i ) {
    log( '  > p1.indexOf(%d, %d): %d', i, i, p1.indexOf( i, i ) );
    if ( i < p1.size() / 2 ) {
        assert.equal( p1.indexOf( i, i ), p1.size() - i - 1 );
    } else {
        assert.equal( p1.indexOf( i, i ), -1 );
    }
};

log( '- check #indexOf() results with some arguments.' );

assert.equal( p1.indexOf( 'blah' ), - 1 );
assert.equal( p1.indexOf(), - 1 );
assert.equal( p1.indexOf( 0, -4 ), p1.indexOf( 0, 4 ) )