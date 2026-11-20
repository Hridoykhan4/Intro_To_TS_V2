//  enum
//set of fixed string literal ek jaygay rakhe
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissible = canEdit(UserRoles.Viewer);
console.log(isEditPermissible);
export {};
