var app = new Vue({
    el: '#app',
    data: {
        expression: "",
        logs:[],
        youH: 100,
        monsterH: 100,
    },
    methods: {
        attack : function () {
            let yourDamage = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
            let monstersDamage = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
            this.registerLog("attack",yourDamage,monstersDamage);
            this.youH = this.youH - monstersDamage;
            this.monsterH = this.monsterH - yourDamage
            this.winCheck();

        },
        specialAttack : function () {
            let yourDamage = Math.floor(Math.random() * (20 - 10- + 1)) + 10;
            let monstersDamage = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
            this.registerLog("specialAttack",yourDamage,monstersDamage);
            this.youH = this.youH - monstersDamage;
            this.monsterH = this.monsterH - yourDamage
            this.winCheck();

        },
        heal : function(){
            let youHeal = 10;
            let monsterHeal = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
            this.registerLog("heal",youHeal,monsterHeal);
            this.youH = this.youH + youHeal;
            this.monsterH = this.monsterH + monsterHeal
            this.winCheck();
        },
        giveUp: function(){
            this.youH = 0;
            this.winCheck();
        },
        registerLog:function(action, you, monster){
                if(action === "heal"){
                    this.logs.push("You healed for " + you
                        + " health and The Monster healed for " + monster + " health");
                }else{
                    this.logs.push("You did " + you
                        + " damage and The Monster did " + monster + " damage");
                }
        },
        winCheck: function(){
            if (this.youH <= 0){
                alert("YOU LOST")
            } else if(this.monsterH <= 0){
                alert("YOU WIN")
            }
        }
    }

});
