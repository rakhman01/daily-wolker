import { format } from 'date-fns';
import { launchImageLibrary, ImagePickerResponse, ImageLibraryOptions,launchCamera, MediaType } from 'react-native-image-picker';
import { Alert } from 'react-native/Libraries/Alert/Alert';
import { PermissionsAndroid } from 'react-native';
import { number } from 'yup';

export function formattedDate(date: any ){
    return format(date, 'dd-MM-yyyy')
}


export function formattedTime(time: any){
    return format(time, 'hh:mm:ss a')
}

export function formatIDR(value: number | string): string{
  if (typeof(value) === 'number') {
   return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
  } else {
   return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(parseInt(value))
  }
}

export async function getImages(params:{
    setImages:  (val: any | null) => void,
    permision: string
}){
    const options: ImageLibraryOptions ={
        mediaType: "photo",
        includeBase64: true,
    }
        if (params.permision === 'CAMERA') {
            try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: "App Camera Permission",
                    message:"App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  await launchCamera({
                    mediaType: "photo",
                    includeBase64: true,
                },val=>console.log(val))
                } else {
                  console.log("Camera permission denied");
                }
              } catch (err) {
                console.warn(err);
              }
        }else if (params.permision === 'STORAGE') {
            launchImageLibrary(options, (response: ImagePickerResponse) => {
               if (response.assets) {
                   params.setImages({
                       base64: response.assets[0].base64,
                       uri: response.assets[0].uri
                   })
                   
               }
           });
        }
}
