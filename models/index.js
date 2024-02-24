const User = require('./User');
const Project = require('./Project');
const Donation = require('./Donation');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});
Donation.belongsTo(User, {
  foreignKey: 'user_id'
});
module.exports = { User, Project, Donation };