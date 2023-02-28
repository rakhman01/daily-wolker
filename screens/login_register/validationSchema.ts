import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
})


export const registerSellerSchema = Yup.object().shape({
    nib: Yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    business_category: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
    phone_number: Yup.string().min(8, 'Too Short!').required('Required'),
    address: Yup.string().required('Required'),
    residence_address: Yup.string().required('Required'),
    information: Yup.string().required('Required'),
    photo_ofice: Yup.string().required('Required'),
    logo: Yup.string().required('Required'),
    photo_nib: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    last_experience: Yup.string().required('Required')
})


export const registerUserSchema = Yup.object().shape({
    nik: Yup.string().min(8, 'Too Short!').required('Required'),
    name: Yup.string().required('Required'),
    age: Yup.string().required('Required'),
    date_of_birth: Yup.string().required('Required'),
    email:  Yup.string().email('Invalid email').required('Required'),
    phone_number: Yup.string().min(8, 'Too Short!').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
    gender: Yup.string().required('Required'),
    last_education: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    residence_address: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    last_experience: Yup.string().required('Required'),
    photo_ktp: Yup.string().required('Required'),
    photo_kk: Yup.string().required('Required'),
    photo_last_diploma: Yup.string().required('Required'),
    photo_certificate: Yup.string().required('Required')
})