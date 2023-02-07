const def = (db, DataTypes, options) => {
  const model = db.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      homePage: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
  );

  model.associate = (models) => {
    model.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'user',
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    });
  };

  return model;
};

module.exports = def;