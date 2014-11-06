/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous/src',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        jquery: '../lib/jquery/dist/jquery',
        'snap.svg': '../lib/snap.svg/dist/snap.svg-min'
    },
    packages: [

    ]
});
require(['main']);
