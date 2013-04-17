define(['services/datacontext'],
    function (datacontext) {
        var products = ko.observableArray();
        var initialized = false;
            
        var vm = {
            activate: activate,
            products: products,
            title: 'Products',
            refresh: refresh
        };

        return vm;

        function activate() {
            if (initialized) return;
            initialized = true;

            return refresh();
        }

        function refresh() {
            return datacontext.getProducts(products);
        }
    });