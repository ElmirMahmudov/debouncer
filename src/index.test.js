var expect = require('chai').expect;
var Debouncer = require('./index');

describe('debounce-factory', function() {
    describe('Debouncer', function() {
        it('should be function', function(){
            expect(Debouncer).to.satisfy(isFactoryFunction);
            function isFactoryFunction(factoryFunction){
                if (typeof factoryFunction === "function") {
                    return true;
                }else {
                    return false;
                }
            }
        });
        it('should return function', function(){
            expect(Debouncer).to.satisfy(isFactoryFunction);
            function isFactoryFunction(factoryFunction){
                if (typeof factoryFunction(function(){},100) === "function") {
                    return true;
                } else {
                    return false;
                }
            }
        });
    });
});