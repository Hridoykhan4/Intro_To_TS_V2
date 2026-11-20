//  enum
//set of fixed string literal ek jaygay rakhe

enum UserRoles  {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    }
    else return false
}

const isEditPermissible = canEdit(UserRoles.Viewer)

console.log(isEditPermissible);