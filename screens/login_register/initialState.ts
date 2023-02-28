import { ILoginTypes, IRegisterTypes } from "../../config/type";


export const loginValues: ILoginTypes = {
    email: '',
        password: ''
}

export const userRegisterValues: IRegisterTypes = {
    nik: '',
    name: "",
    age: '',
    date_of_birth: "",
    email: "",
    phone_number: '',
    password: "",
    gender: "",
    last_education: "",
    address: "",
    residence_address: "",
    status: "",
    last_experience: "",
    photo_ktp: "",
    photo_kk: "",
    photo_last_diploma: "",
    photo_certificate: ""
}

export const providerRegisterValues: IRegisterTypes ={
    nib: "",
    business_category: "",
    name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    // residence_address: "",
    information: "",
    photo_ofice: "",
    logo: "",
    photo_nib: "",
    // status: "",
    // last_experience: ""
}