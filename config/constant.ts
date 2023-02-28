import { Dimensions,PixelRatio } from "react-native";
import { Icolors, Ifont, IRole } from "./type";

export const pixelRatio = PixelRatio.get()
export const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };


  export const adjust = (size: number) => {
    if (pixelRatio >= 2 && pixelRatio < 3) {
      // iphone 5s and older Androids
      if (dimensions.width < 360) {
        return size * 0.95;
      }
      // iphone 5
      if (dimensions.height < 667) {
        return size;
        // iphone 6-6s
      }
      if (dimensions.height >= 667 && dimensions.height <= 735) {
        return size * 1.15;
      }
      // older phablets
      return size * 1.25;
    }
    if (pixelRatio >= 3 && pixelRatio < 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (dimensions.width <= 360) {
        return size;
      }
      // Catch other weird android width sizings
      if (dimensions.height < 667) {
        return size * 1.15;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (dimensions.height >= 667 && dimensions.height <= 735) {
        return size * 1.2;
      }
      // catch larger devices
      // ie iphone 6s plus / 7 plus / mi note 等等
      return size * 1.27;
    }
    if (pixelRatio >= 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (dimensions.width <= 360) {
        return size;
        // Catch other smaller android height sizings
      }
      if (dimensions.height < 667) {
        return size * 1.2;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (dimensions.height >= 667 && dimensions.height <= 735) {
        return size * 1.25;
      }
      // catch larger phablet devices
      return size * 1.4;
    }
    return size;
  };

  export const Role: IRole ={
    worker: 'USER',
    provider: 'PROVIDER',
    admin: 'ADMIN'
  }

export const colors: Icolors = {
    background: '#f0fff0',
    white: '#FFFFFF',
    gray: '#525F75',
    drakGray: '#a9a9a9',
    lightBlue: '#00BCD4',
    blue: '#2196F3',
    green: '#40e0d0',
    drakGreen: '#26A69A',
    drakYellow: '#FFA726'
}


export const font: Ifont = {
    color: {
        black: '#000000',
        white: '#FFFFFF',
        blue: '#2196F3',
        red: '#FA4251',
        green: '#19A800',
        yellow: "#f2ee07",
        gray: "#374253",
        lightgray: '#525F75',
        placeholder: '#D8DBE0'
    },
    size: {
      mini: adjust(10),
        small: adjust(12),
        normal: adjust(14),
        medium: adjust(16),
        large: adjust(18),
        extraLarge: adjust(20),
        title: adjust(24),
      },
      weight: {
        light: "200",
        normal: '400',
        medium: "500",
        bold: "bold",
      },
    }

