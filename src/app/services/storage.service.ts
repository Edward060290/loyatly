import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class StorageService {

 
  /**
   * Llave secreta para encriptar y desencriptar la informacion almacenada
   */
  private secretKey = 'RG5vt457u%$5bj78c452YBBc24432c%#T7&$tv657bu6B&BvH76hvv64';

  constructor() { }

  /**
   * Almacena encriptado los datos necesarios en el localstorage
   * @param key Llave a almacenar
   * @param data Dato a almacenar
   */
  setToLocalStorage(key: string, data: any) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
    const encryptedKey = CryptoJS.SHA256(key);
    localStorage.setItem(encryptedKey, encryptedData);
  }

  /**
   * Recupera valores del localstorage por medio de la llave
   * @param key Llave a obtener
   */
  getFromLocalStorage(key: string): any {
    const encryptedKey = CryptoJS.SHA256(key);
    const item = localStorage.getItem(encryptedKey);
    if (item === undefined || item === null) {
      return null;
    }
    const dencryptedData = CryptoJS.AES.decrypt(item, this.secretKey).toString(CryptoJS.enc.Utf8);
    if (this.isJson(dencryptedData)) {
      return JSON.parse(dencryptedData);
    } else {
      return dencryptedData;
    }
  }

  /**
   * Limpia todo el localstorage
   */
  clear() {
    localStorage.clear();
  }

  /**
   * Remueve una propiedad especifica del local storage
   * @param propety Propiedad a eliminar
   */
  clearProperty(propety: string) {
    const encryptedKey = CryptoJS.SHA256(propety);
    localStorage.removeItem(encryptedKey);
  }

  /**
   * Valida si una cadena cumple el formato JSON
   * @param str Cadena a validar
   * @returns True si cumple el formato False no cumple el formato
   */
  private isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
