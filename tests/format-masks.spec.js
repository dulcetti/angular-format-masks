describe('Format Masks Component', function() {
    beforeEach(module('format.masks'));

    var component;
    var componentCpf;
    var componentCnpj;
    var componentCep;
    var componentPhone;
    
    var controller;
    var controllerCpf;
    var controllerCnpj;
    var controllerCep;
    var controllerPhone;
    
    var type;
    var value;
    var scope;
    var maskTypes = ['cpf', 'cnpj', 'cep', 'phone'];

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        component = angular.element('<format-masks mask-value="11111111111" mask-type="cpf"></format-masks>');
        component = $compile(component)(scope);
        controller = component.controller('formatMasks');
        type = controller.maskType;
        value = controller.maskValue;

        componentCpf = angular.element('<format-masks mask-value="11111111111" mask-type="cpf"></format-masks>');
        componentCpf = $compile(componentCpf)(scope);
        controllerCpf = componentCpf.controller('formatMasks');

        componentCnpj = angular.element('<format-masks mask-value="11111111111" mask-type="cnpj"></format-masks>');
        componentCnpj = $compile(componentCnpj)(scope);
        controllerCnpj = componentCnpj.controller('formatMasks');

        componentCep = angular.element('<format-masks mask-value="11111111111" mask-type="cep"></format-masks>');
        componentCep = $compile(componentCep)(scope);
        controllerCep = componentCep.controller('formatMasks');

        componentPhone = angular.element('<format-masks mask-value="11111111111" mask-type="phone"></format-masks>');
        componentPhone = $compile(componentPhone)(scope);
        controllerPhone = componentPhone.controller('formatMasks');
    }));

    it('Controller of component should to be init', function() {
        expect(controller).toBeDefined();
    });
    
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

    describe('CPF type', function() {
        it('Component with correct type', function() {
            expect(controllerCpf.maskType).toEqual('cpf');
        });

        it('CPF must have 11 chars', function() {
            expect(controllerCpf.maskValue.length).toEqual(11);
        });
    });
});
