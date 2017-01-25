describe('Format Masks Component mm/dd/yyyy', function() {
    beforeEach(module('format.masks'));

    var component;
    var controller;
    var scope;
    var type;
    var value;
    var maskTypes = ['cpf', 'cnpj', 'cep', 'brazilian-phone', 'date-ddmmyyyy', 'date-ddmmyy', 'date-mmddyyyy'];

    describe('Init component', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="1" mask-type="cpf"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));
    });
    
    describe('Date format mm/dd/yyyy', function() {
        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="12011987" mask-type="date-mmddyyyy"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with a correct type', function() {
            expect(controller.maskType).toEqual('date-mmddyyyy');
        });

        it('Date must to be have only numbers', function() {
            let date = controller.maskValue;
            expect(date).toMatch('[0-9]{8}');
        });
        
        it('Date must to be have 8 numbers', function() {
            expect(controller.maskValue.length).toEqual(8);
        });
        
        it('Result of Date mask must to be correct', function() {
            expect(controller.result).toEqual('12/01/1987');
            expect(controller.result.length).toEqual(10);
        });
    });
});
