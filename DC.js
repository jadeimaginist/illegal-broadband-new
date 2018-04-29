'use strict';

var uno = Vue.component('uno', {
    template: '<p class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>'
});

var duo = Vue.component('duo', {
    template: '<p class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>'
});

var tre = Vue.component('tre', {
    template: '<p class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>'
});

var quattro = Vue.component('quattro', {
    template: '<p class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</p>'
});

var cinque = Vue.component('cinque', {
    template: '<p class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>'
});

var app = new Vue({
    data: {
        title: 'dynamic component',
        currentView: 'uno',
        values: [{ name: 'block uno', value: 'uno' }, { name: 'block duo', value: 'duo' }, { name: 'block tre', value: 'tre' }, { name: 'block quattro', value: 'quattro' }, { name: 'block cinque', value: 'cinque' }]
    },
    components: {
        uno: uno,
        duo: duo,
        tre: tre,
        quattro: quattro,
        cinque: cinque
    },
    methods: {
        onShow: function onShow() {
            this.show = !this.show;
        },
        enter: function enter(el, done) {
            TweenMax.from(el, 1, { x: 500, autoAlpha: 0, scale: 0.6, ease: Power2.easeOut, onComplete: done });
        },
        leave: function leave(el, done) {
            TweenMax.to(el, 1, { x: -500, autoAlpha: 0, scale: 0.6, ease: Power2.easeOut, onComplete: done });
        }
    },
    filters: {
        capitalize: function capitalize(value) {
            var arr = value.split(' ');
            for (var i = 0; i < arr.length; i += 1) {
                if (window.CP.shouldStopExecution(1)) { break; }
                arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
            }
            window.CP.exitedLoop(1);;
            return arr.join(' ');
        },
        uppercase: function uppercase(value) {
            return value.toUpperCase();
        }
    }
});

app.$mount('#app');