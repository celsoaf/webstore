define(['services/logger', 'durandal/system', 'services/model', 'config'],
    function (logger, system, model, config) {
        var entityQuery = breeze.EntityQuery,
            menager = configureBreezeManger();

        function getProducts(productsObservable) {
            var query = entityQuery.from('Products')
                .orderBy('name');

            menager.executeQuery(query)
                .then(querySucceded)
                .fail(queryFail);

            function querySucceded(data) {
                if (productsObservable) {
                    productsObservable(data.results);
                }
                log("Received products from server", data, true);
            }
        }

        function getClients(clientsObservable) {
            var query = entityQuery.from('Clients')
                .orderBy('name');

            menager.executeQuery(query)
                .then(querySucceded)
                .fail(queryFail);

            function querySucceded(data) {
                if (clientsObservable) {
                    clientsObservable(data.results);
                }
                log("Received clients from server", data, true);
            }
        }

        var datacontext = {
            getProducts: getProducts,
            getClients: getClients
        };

        return datacontext;

        function queryFail(error) {
            var msg = "Error getting data " + error.message;
            logger.log(msg, error, system.getModuleId(datacontext), true);
        }

        function configureBreezeManger() {
            breeze.NamingConvention.camelCase.setAsDefault();
            var mgr = new breeze.EntityManager(config.remoteServiceName);
            model.configureMetadataStore(mgr.metadataStore);
            return mgr;
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(datacontext), showToast);
        }
    });