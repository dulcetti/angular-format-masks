describe('Format Masks Component', function() {
    beforeEach(module('format.masks'));

    var component;
    var controller;
    var scope;
    var type;
    var value;
    var maskTypes = ['cpf', 'cnpj', 'cep', 'brazilian-phone', 'date-ddmmyyyy', 'date-ddmmyy'];

    describe('Init component', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="1" mask-type="cpf"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Controller of component should to be init', function() {
            expect(controller).toBeDefined();
        });
    });

    describe('Component implementation', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111111" mask-type="cpf"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
            type = controller.maskType;
            value = controller.maskValue;
        }));

        describe('Mask value', function() {
            it('Mask value should to be defined', function() {
                expect(value).toBeDefined();
            });
            
            it('Mask value should not to be null', function() {
                expect(value).not.toBeNull();
                expect(value).not.toEqual('');
            });
        });
        
        describe('Mask type', function() {
            it('Mask type and value should to be defined', function() {
                expect(type).toBeDefined();
                expect(value).toBeDefined();
            });
            
            it('Mask type and value should not to be null', function() {
                expect(type).not.toBeNull();
                expect(type).not.toEqual('');

                expect(value).not.toBeNull();
                expect(value).not.toEqual('');
            });

            it('Mask type as valid', function() {
                expect(controller.types).toContain(type);
            });
            
            it('Array of mask types is update', function() {
                expect(controller.types).toEqual(maskTypes);
            }); 
        });
    });

    describe('CPF type', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111111" mask-type="cpf"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));
        
        it('Component with correct type', function() {
            expect(controller.maskType).toEqual('cpf');
        });

        it('CPF must to be have 11 chars', function() {
            expect(controller.maskValue.length).toEqual(11);
        });
        
        it('Result of CPF mask must to be correct', function() {
            expect(controller.result).toEqual('111.111.111-11');
            expect(controller.result.length).toEqual(14);
        });
    });
    
    describe('CNPJ type', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111000111" mask-type="cnpj"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with correct type', function() {
            expect(controller.maskType).toEqual('cnpj');
        });

        it('CNPJ must to be have 14 chars', function() {
            expect(controller.maskValue.length).toEqual(14);
        });

        it('Result of CNPJ mask must to be correct', function() {
            expect(controller.result).toEqual('11.111.111/0001-11');
            expect(controller.result.length).toEqual(18);
        });
    });
    
    describe('CEP type', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111" mask-type="cep"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with correct type', function() {
            expect(controller.maskType).toEqual('cep');
        });

        it('CEP must to be have 8 chars', function() {
            expect(controller.maskValue.length).toEqual(8);
        });

        it('Result of CEP mask must to be correct', function() {
            expect(controller.result).toEqual('11111-111');
            expect(controller.result.length).toEqual(9);
        });
    });
    
    describe('Phone type', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111" mask-type="brazilian-phone"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with correct type', function() {
            expect(controller.maskType).toEqual('brazilian-phone');
        });
        
        it('Phone must to be have only numbers', function() {
            var phone = parseInt(controller.maskValue);
            expect(phone).toEqual(jasmine.any(Number));
            expect(phone).not.toEqual(NaN);
        });
    });

    describe('Phone type with 8 digits', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="11111111" mask-type="brazilian-phone"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Phone must to be have 8 numbers', function() {
            expect(controller.maskValue.length).toEqual(8);
        });

        it('Result of Phone mask must to be correct', function() {
            expect(controller.result).toEqual('1111-1111');
        });
    });

    describe('Phone type with 9 digits', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="111111111" mask-type="brazilian-phone"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Phone must to be have 9 numbers', function() {
            expect(controller.maskValue.length).toEqual(9);
        });

        it('Result of Phone mask must to be correct', function() {
            expect(controller.result).toEqual('11111-1111');
            expect(controller.result.length).toEqual(10);
        });
    });

    describe('Date format dd/mm/yyyy', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="01011900" mask-type="date-ddmmyyyy"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with correct type', function() {
            expect(controller.maskType).toEqual('date-ddmmyyyy');
        });
        
        it('Date must to be have only numbers', function() {
            var date = controller.maskValue;
            expect(date).toMatch('[0-9]{8}');
        });
        
        it('Date must to be have 8 numbers', function() {
            expect(controller.maskValue.length).toEqual(8);
        });

        it('Result of Date mask must to be correct', function() {
            expect(controller.result).toEqual('01/01/1900');
            expect(controller.result.length).toEqual(10);
        });
    });
    
    describe('Date format dd/mm/yy', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            component = angular.element('<format-masks mask-value="010183" mask-type="date-ddmmyy"></format-masks>');
            component = $compile(component)(scope);
            controller = component.controller('formatMasks');
        }));

        it('Component with a correct type', function() {
            expect(controller.maskType).toEqual('date-ddmmyy');
        });

        it('Date must to be have only numbers', function() {
            var date = controller.maskValue;
            expect(date).toMatch('[0-9]{6}');
        });
        
        it('Date must to be have 6 numbers', function() {
            expect(controller.maskValue.length).toEqual(6);
        });
    });
});
