define(['dataservice'],
    function (dataservice) {
        var products = ko.observableArray();
        var initialized = false;
            
        var vm = {
            activate: activate,
            products: products,
            title: 'Produtos',
            refresh: refresh
        };

        return vm;

        function activate() {
            if (initialized) return;
            initialized = true;

            return refresh();
        }

        function refresh() {
            return dataservice.getProductPartials(products);
        }
    });