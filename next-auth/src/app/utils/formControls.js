export const userRegistrationFormControls = [
    {
        id: 1,
        name: 'userName',
        label: 'User Name',
        placeholder: 'Please enter your name',
        componentType: 'input',
        type: 'text'
    },
    {
        id: 2,
        name: 'email',
        label: 'Email',
        placeholder: 'Please enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        id: 3,
        name: 'password',
        label: 'Password',
        placeholder: 'Please enter your password',
        componentType: 'input',
        type: 'password'
    },
]

export const userLoginFormControls = [
    {
        id: 2,
        name: 'email',
        label: 'Email',
        placeholder: 'Please enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        id: 3,
        name: 'password',
        label: 'Password',
        placeholder: 'Please enter your password',
        componentType: 'input',
        type: 'password'
    },
]

export const initialSignUpFormData = {
    userName: '',
    email: '',
    password: ''
}

export const initialLoginFormData = {
    email: '',
    password: ''
} 