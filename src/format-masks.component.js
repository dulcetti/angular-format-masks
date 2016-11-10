(function () {
    'use strict';

    angular
        .module('format.masks', [])
        .component('formatMasks', formatMasksComponent());

    function formatMasksComponent() {
        function formatMasksController() {
            this.types = ['cpf', 'cnpj', 'cep', 'phone'];
        };

        return {
            bindings: {
                maskType: '@',
                maskValue: '@'
            },
            controller: formatMasksController,
            controllerAs: '$ctrl',
            template: '<strong>{{ $ctrl.value }}</strong>'
        };
    };
} ());
