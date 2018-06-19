var app = new Vue({
    el: '#app',
    data: {
        value: "",
    },
    methods: {
        doOKD : function (event) {
            this.value = event.target.value;
        },
        alert: function () {
            alert("alert");
        }

    }
});
