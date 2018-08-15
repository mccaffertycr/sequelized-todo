var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

var Todo = sequelize.define('todo', {
    todo_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

Todo.sync();


module.exports = Todo;

// var todo = {
//     selectAll: (callback) => {
//       orm.selectAll((res) => {
//           callback(res);
//       });
//     },
//     insertOne: (todo, callback) => {
//         orm.insertOne(todo, (res) => {
//             callback(res);
//         });
//     },
//     updateOne: (todo, callback) => {
//         orm.updateOne(todo, (res) => {
//             callback(res);
//         });
//     },
//     deleteOne: (todo, callback) => {
//         orm.deleteOne(todo, (res) => {
//             callback(res);
//         });
//     }
// };


// module.exports = todo;