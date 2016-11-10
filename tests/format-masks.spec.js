describe('Format Masks Component', function() {
    beforeEach(module('format.masks'));

    var component;
    var controller;
    var type;
    var value;
    var scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        component = angular.element('<format-masks mask-value="11111111111" mask-type="cpf"></format-masks>');
        component = $compile(component)(scope);
        controller = component.controller('formatMasks');
        type = controller.maskType;
        value = controller.maskValue;
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
    });

    
});
