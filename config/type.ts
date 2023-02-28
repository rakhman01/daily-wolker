export interface IRole{
  worker: string,
  provider: string,
  admin: string,
}

export type IRootStackParamsList = {
  Login: {name: string}
}

export interface Icolors{
    background: string,
    white: string,
    gray: string,
    drakGray: string,
    lightBlue: string,
    blue: string,
    green: string,
    drakGreen: string,
    drakYellow: string
};

 export interface images {
  base64: string,
  uri: string
 }

export interface Ifont {
    color: {
        black: string,
        white: string,
        blue: string,
        red: string,
        green: string,
        yellow: string,
        gray: string,
        lightgray: string
        placeholder: string
    },
    size: {
      mini: number,
        small: number,
        normal: number,
        medium: number,
        large: number,
        extraLarge: number,
        title: number,
      },
      weight: {
        light: string,
        normal: string,
        medium: string,
        bold: string,
      },
    }

export interface ILoginTypes{
  email: string;
  password: string;
    }

export interface IRegisterTypes{
    nib?: string,
    business_category?: string,
    nik?: string,
    name: string,
    age?: string,
    date_of_birth?: string,
    email: string,
    phone_number: string,
    password: string,
    gender?: string,
    last_education?: string,
    information?: string,
    address:string,
    residence_address?: string,
    status?: string,
    last_experience?: string,
    photo_ofice?: string,
    logo?: string,
    photo_nib?:string,
    photo_ktp?: string,
    photo_kk?: string,
    photo_last_diploma?: string,
    photo_certificate?: string 
}

export class TaskWorkerTypes{
  id: string = '';
  title: string = '';
  descriptions: string = '';
  typeWork: string = '';
  region: string = '';
  gender: string = '';
  age: string = '';
  date: string = '';
  price: string = ''
}

