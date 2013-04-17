define(function () {

    var model = {
        configureMetadataStore: configureMetadataStore
    };

    return model;

    function configureMetadataStore(metadataStore) {
        metadataStore.registerEntityTypeCtor('product', null, productInitializer);
        metadataStore.registerEntityTypeCtor('client', null, clientInitializer);
    }

    function productInitializer(product) {

    }

    function clientInitializer(client) {

    }
});