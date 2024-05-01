const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" targe="_blank">Google</a>',
            age: 20
        }    
    },
    watch: {
        middleName(newval, oldVal) {
            // just watched to add additional function but still continue update the value.
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        fullNameGetSet: {
            // getter
            get() {
              return `${this.firstName} ${this.middleName} ${this.lastName}`
            },
            // setter
            set(newValue) {
              // Note: we are using destructuring assignment syntax here.
              [this.firstName, this.middleName, this.lastName] = newValue.split(' ')
            }
        },
        now() {
            return Date.now();
        }
    },
    methods: {
        updateLastName(event, msg) {
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event, msg) {
            console.log(msg);
            this.middleName = event.target.value;
        },
        onIncrement() {
            this.age++;
        },
        onDecrement() {
            this.age--;
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob'; // vm.$data.firstName w/o proxy
    console.log(vm);
}, 2000)

const vm2 = Vue.createApp({
    data() {
        return {
            mode: 1,
            birds: ['eagle', 'maya', 'parrots', 'doves', 'pigeons'],
            birdies: [
                {name: 'eagle', age: 22, fly: false},
                {name: 'maya', age: 2, fly: false},
                {name: 'parrots', age: 12, fly: true},
                {name: 'doves', age: 42, fly: true},
                {name: 'pigeons', age: 8, fly: false}
            ]
        }    
    },
    watch: {},
    computed: {},
    methods: {
        onMove() {
            const first = this.birdies.shift();
            this.birdies.push(first);
        }
    }
}).mount('#app2')