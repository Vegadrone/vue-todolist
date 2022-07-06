const app = new Vue(
    {
        el: root,

        data: {

            toDosElIndex: 0,

            toDos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Prendere appuntamento dal dottore',
                    done: false
                },
                {
                    text: 'Chiamare il commercialista',
                    done: true
                },
                {
                    text: 'Revisone all\'automobile',
                    done: false
                },
                {
                    text: 'Fare esercizio fisico',
                    done: true
                },
                {
                    text: 'Rispondere alle email di lavoro',
                    done: true
                },
            ]
        },

        methods: {

        }
    },
)