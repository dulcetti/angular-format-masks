describe('Format Masks', function() {
    beforeEach(module('format.masks'));

    var component;
    var controller;
    var scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        component = angular.element('<format-masks></format-masks>');
        component = $compile(component)(scope);
        controller = component.controller('formatMasksController');
    }));
    
    it('Component init', function() {
        expect(component).toBeDefined();
    });
    
});
    