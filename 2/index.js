var app = new Vue({
    el: '#app',
    data: {
        expression: "",
    },
    methods: {
        clickOperation : function (operation) {
            switch (operation) {
                case '=' :
                    this.expression = eval(this.expression);
                    break;
                default:
                    this.expression += operation;
                    break;
            }
        },
        clickNumber: function (number) {
            this.expression += number;
        }
    }
});
