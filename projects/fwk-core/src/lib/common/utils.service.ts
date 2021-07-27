
import { Injectable } from '@angular/core';
import { CurrentUser } from '../model/account/current-user';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  isEmptyString(value?: string): boolean {
    try {
      if (value === undefined || value === null) {
        return true
      }
      if (value === '' || String(value).trim() === '') {
        return true;
      }
      return false;
    } catch (error) {
      return true;
    }
  }

  isGreaterThanZero(value: any): boolean {
    try {
      return Number(value) > 0;
    } catch (error) {
      return false;
    }
  }

  isValidDate(date: any): boolean {
    try {
      if (typeof date === 'object' && date.getDate() > 0) 
        return true;
      // First check for the pattern
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
      return false;

      // Parse the date parts to integers
      var parts = date.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;

      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
    } catch (error) {
      return false;
    }
  }

  getUserAuthDetails() {
    let user: any = localStorage.getItem('currentUser');
    const currentUser: CurrentUser = JSON.parse(user);
    return currentUser;
  }
}
