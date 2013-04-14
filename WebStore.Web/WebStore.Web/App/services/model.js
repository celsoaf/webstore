define(function () {

    var productPartial = function (dto) {
        return addProductPartialComputed(
            mapToObservable(dto));
    };

    var clientPartial = function(dto) {
        return addClientPartialComputed(
            mapToObservable(dto));
    };
    
    var model = {
        ProductPartial: productPartial,
        ClientPartial: clientPartial
    };

    return model;

    function addProductPartialComputed(entity) {


        return entity;
    }

    function addClientPartialComputed(entity) {


        return entity;
    }

    function mapToObservable(dto) {
        var mapper = {};
        for (var prop in dto) {
            if (dto.hasOwnProperty(prop)) {
                mapper[prop] = ko.observable(dto[prop]);
            }
        }

        return mapper;
    }
});