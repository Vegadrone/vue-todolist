const app = new Vue(
    {
        el: root,

        data: {

            newToDo: "",

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
            deleteToDo: function (toDo) {
                this.toDos.splice(this.toDos.indexOf(toDo), 1);
            },

            addNewToDo: function () {
                if (this.newToDo === "") {
                    alert('Inserisci del testo');
                } else {
                    this.toDos.push({ text: this.newToDo, done: false });
                    this.newToDo = "";
                };

            },

            doneAndUndone: function (index) {
                if (this.toDos[index].done === false) {
                    this.toDos[index].done = true;
                } else {
                    this.toDos[index].done = false;
                }
            }
        }
    },
)