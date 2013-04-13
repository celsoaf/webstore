define(['logger', 'durandal/system', 'model'],
    function (logger, system, model) {
        var dataservice = {
            getProductPartials: getProductPartials
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
                    var p = new model.productPartial(item);
                    products.push(p);
                });

                productsObservable(products);

                log("Received products from server", products, true);
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