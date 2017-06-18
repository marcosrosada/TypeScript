var employee = {
    id: 1,
    greet: function () {
        //setTimeout( function () { console.log(this.id), 1000 }); // undefined
        setTimeout( () => { console.log(this.id), 1000 }); // 1
    }
};

employee.greet();