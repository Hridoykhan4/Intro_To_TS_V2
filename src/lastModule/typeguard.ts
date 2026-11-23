type Alphanumeric = string | number

const add = (num1: Alphanumeric , num2: Alphanumeric) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    else {
        return num1.toString()  + num2.toString()
    }
}

// console.log(add('2', "2"));

type NormalUser = {
  name: string;
};

type AdminUser = {
    name: string;
    role: "Admin"
}

const getUserInfo = (user: AdminUser | NormalUser) => {
    if('role' in  user) {
        if(user.role === 'Admin') {
            console.log(`${user.name} & his role is ${user.role}`);
        }
    }
    else {
        console.log(user.name);
    }
}


getUserInfo({name: "normal", role: 'Admin'})
