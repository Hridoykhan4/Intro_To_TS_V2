const add = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
const getUserInfo = (user) => {
    if ('role' in user) {
        if (user.role === 'Admin') {
            console.log(`${user.name} & his role is ${user.role}`);
        }
    }
    else {
        console.log(user.name);
    }
};
getUserInfo({ name: "normal", role: 'Admin' });
export {};
