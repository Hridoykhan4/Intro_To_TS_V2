// as const assertion

// enum UserRoles  {
//     Admin = 'ADMIN',
//     Editor = 'EDITOR',
//     Viewer = 'VIEWER'
// }

const UserRoles =  {
    Admin : 'admin',
    Editor:  'editor',
    Viewer:  'viewer'
} as const

/* 
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",


  1. typeof operator
2. keyof operator 

user['id'] >>> 222


typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'admin';
 Editor: "editor",
 Viewer: "viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'

'admin' |'editor |'viewer'

UserRoles['Admin']  >>> 'admin'
  typeof UserRoles[keyof typeof UserRoles]



*/

const types = typeof UserRoles;

// const role : keyof typeof UserRoles = 'Admin'

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor ) {
        return true
    }
    return false
}

const isEdit = canEdit(UserRoles.Admin)
const user = {
  id: 222,
  name: "Mezba",
  address: {
    city: "ctg",
  },
};


