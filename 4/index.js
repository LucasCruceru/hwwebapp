var app = new Vue({
    el: '#app',
    data: {
        search:'',
        colors:[]
    },
    methods: {
        generateColor : function () {
            this.colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }
    },
    computed: {
        filteredList() {
            return this.colors.filter(color => {
                return color.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
});
