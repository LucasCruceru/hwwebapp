var app = new Vue({
    el: '#app',
    data: {
        search:'',
        colors:[]
    },
    methods: {
        generateColor : function () {
            this.colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        },

    },
    computed: {
        searchColor: function () {
            this.colors.filter((color) => {
                return color.match(this.search);
            })
        }
    }

});
