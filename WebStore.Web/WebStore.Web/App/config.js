define(function () {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var routes = [
        {
            url: 'products',
            moduleId: 'viewmodels/products',
            name: 'Products',
            visible: true
        },
        {
            url: 'clients',
            moduleId: 'viewmodels/clients',
            name: 'Clients',
            visible: true
        }
    ];

    var startModule = 'products';

    return {
        routes: routes,
        startModule: startModule
    };
});