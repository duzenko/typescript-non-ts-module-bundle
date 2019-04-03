System.register("main", ["text.dat"], function (exports_1, context_1) {
    "use strict";
    var text_dat_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (text_dat_1_1) {
                text_dat_1 = text_dat_1_1;
            }
        ],
        execute: function () {
            console.log('zxcc');
            console.log(text_dat_1.default);
        }
    };
});
//# sourceMappingURL=bundle.js.map