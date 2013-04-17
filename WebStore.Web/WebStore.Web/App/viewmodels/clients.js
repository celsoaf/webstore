define(['services/datacontext'],
    function (datacontext) {
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
            return datacontext.getClients(clients);
        }
    });