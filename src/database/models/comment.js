const def = (db, DataTypes, options) => {
  const model = db.define(
    'Comment',
    {
      comment: DataTypes.STRING
    },
  );

  model.associate = (models) => {
    model.hasMany(models.Comment, {as: 'idSubcomment'}, {
      foreignKey: 'idSubcomment',
      as: 'comment',
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    });
  };

  return model;
};

module.exports = def;