import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  tracelog = '1';

  constructor() { }

  /**
   * This method checks if the input parameter is undefined or null
   * @param inputGiven
   */
  checkUndefinedNull(inputGiven: any) : boolean {
    return !(inputGiven === undefined || inputGiven === null);
  }

  /**
   * This method checks if the input given is null, undefined or empty
   * @param inputGiven
   */
  checkNecessaryCases(inputGiven: any) : boolean {
    return !(inputGiven === undefined || inputGiven === null || inputGiven === '');
  }

  /**
   * This method is a console log handler
   * @param data
   * @param data2
   */
  consoleHandler(data: any, data2?: any){
    if (this.tracelog !== '0'){
      console.log(data);
      if (this.checkUndefinedNull(data2)){
        console.log(data2);
      }
    }
  }

  /**
   * This method is used only in the APIs in order to console the following:
   * @param headers
   * @param url
   * @param postBody
   */
  apiGeneralConsole(headers: any, url: string, postBody?: any){

    // Check if the console is allowed
    if (this.tracelog !== '0'){
      console.log('Headers: ', headers);
      console.log(`URL: ${url}`);

      if (this.checkUndefinedNull(postBody)){
        console.log('POST API BOdy: ', postBody);
      }
    }
  }
}
