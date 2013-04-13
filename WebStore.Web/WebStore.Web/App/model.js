define(function () {

    var productPartial = function (dto) {
        return addProductPartialComputed(
            mapToObservable(dto));
    };
    
    var model = {
        productPartial: productPartial
    };

    return model;

    function addProductPartialComputed(entity) {


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