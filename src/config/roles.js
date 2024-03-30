const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers', 'manageForms'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
