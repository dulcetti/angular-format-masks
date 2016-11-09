describe('Format Masks Component', function() {
    beforeEach(module('format.masks'));

    var component;
    var controller;
    var type;
    var value;
    var scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        component = angular.element('<format-masks mask-value="02545191728" mask-type="CPF"></format-masks>');
        component = $compile(component)(scope);
        controller = component.controller('formatMasks');
        type = controller.maskType;
        value = controller.maskValue;
    }));
    
    it('Controller of component should to be init', function() {
        expect(controller).toBeDefined();
    });
});
