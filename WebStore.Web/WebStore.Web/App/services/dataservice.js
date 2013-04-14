define(['services/logger', 'durandal/system', 'services/model'],
    function (logger, system, model) {
        var dataservice = {
            getProductPartials: getProductPartials,
            getClientPartials: getClientPartials
        };

        return dataservice;

        function getProductPartials(productsObservable) {
            var options = {
                url: 'api/products',
                type: 'GET',
                dataType: 'json'
            };

            return $.ajax(options)
                .then(querySucceded)
                .fail(queryFail);

            function querySucceded(data) {
                var products = [];

                data.sort(sortProducts);
                data.forEach(function (item) {
                    products.push(new model.ProductPartial(item));
                });

                productsObservable(products);

                log("Received products from server", products, true);
            }

            function queryFail(jqXhr, textStatus) {
                var msg = "Error getting data " + textStatus;
                logger.log(msg, jqXhr, system.getModuleId(dataservice), true);
            }
        }

        function sortClients(c1, c2) {
            return c1.name > c2.name ? 1 : -1;
        }

        function getClientPartials(clientsObservable) {
            var options = {
                url: 'api/clients',
                type: 'GET',
                dataType: 'json'
            };

            return $.ajax(options)
                .then(querySucceded)
                .fail(queryFail);

            function querySucceded(data) {
                var clients = [];

                data.sort(sortClients);
                data.forEach(function(item) {
                    clients.push(new model.ClientPartial(item));
                });

                clientsObservable(clients);

                log("Received clients from server", clients, true);
            }

            function queryFail(jqXhr, textStatus) {
                var msg = "Error getting data " + textStatus;
                logger.log(msg, jqXhr, system.getModuleId(dataservice), true);
            }
        }
        
        function sortProducts(p1, p2) {
            return p1.name > p2.name ? 1 : -1;
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(dataservice), showToast);
        }
    });