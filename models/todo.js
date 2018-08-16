module.exports = (sequelize, DataTypes) => {
    var Todo = sequelize.define('Todo', {
        todo_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
  
    Todo.associate = function (models) {
      models.Todo.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Todo;
};
