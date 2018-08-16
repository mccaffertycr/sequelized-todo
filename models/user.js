module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
      }
    });
  
    User.associate = function(models) {
      models.User.hasMany(models.Todo);
    };
  
    return User;
};

