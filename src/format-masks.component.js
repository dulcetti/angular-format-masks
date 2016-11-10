(function () {
    'use strict';

    angular
        .module('format.masks', [])
        .component('formatMasks', formatMasksComponent());

    function formatMasksComponent() {
        function formatMasksController() {
            var self = this;

            self.result = '';
            self.types = ['cpf', 'cnpj', 'cep', 'phone'];

            if(self.types.indexOf(self.maskType) == -1) {
                console.error('Invalid type');
            }

            function formatResult(type, value) {
                switch (type) {
                    case 'cpf':
                        var first = value.substr(0, 3);
                        var second = value.substr(3, 3);
                        var third = value.substr(6, 3);
                        var fourth = value.substr(9, 2);
                        self.result = first + '.' + second + '.' + third + '-' + fourth;
                        break;

                    case 'cnpj':
                        var first = value.substr(0, 2);
                        var second = value.substr(2, 3);
                        var third = value.substr(5, 3);
                        var fourth = value.substr(8, 4);
                        var fifth = value.substr(12, 2);
                        self.result = first + '.' + second + '.' + third + '/' + fourth + '-' + fifth;
                        break;

                    case 'cep':
                        break;

                    case 'phone':
                        break;
                }
            };

            formatResult(self.maskType, self.maskValue);
        };

        return {
            bindings: {
                maskType: '@',
                maskValue: '@'
            },
            controller: formatMasksController,
            controllerAs: '$ctrl',
            template: '{{ $ctrl.result }}'
        };
    };
} ());
