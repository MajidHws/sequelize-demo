'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    views: DataTypes.INTEGER
  }, {
    timestamps: true
  });
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User)
    // Post.belongsTo(models.User, {
    //   foreignKey: 'userId',
    //   sourceKey: 'id'
    // })
    
  };
  return Post;
};