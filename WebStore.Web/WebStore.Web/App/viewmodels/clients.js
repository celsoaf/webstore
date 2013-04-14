define(['services/dataservice'],
    function (dataservice) {
        var clients = ko.observableArray();
        var initialized = false;
            
        var vm = {
            activate: activate,
            clients: clients,
            title: 'Clients',
            refresh: refresh
        };

        return vm;

        function activate() {
            if (initialized) return;
            initialized = true;

            return refresh();
        }

        function refresh() {
            return dataservice.getClientPartials(clients);
        }
    });