define(['durandal/system', 'logger'],
    function (system, logger) {
        var shell = {
            activate: activate
        };

        return shell;

        function activate() {
            logger.log('Web Store started!',
                null,
                system.getModuleId(shell),
                true);
        }
    });