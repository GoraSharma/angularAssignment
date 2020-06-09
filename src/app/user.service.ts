import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  EmployeeID = '';
  LocationURL = 'https://obadminportal.azurewebsites.net/qa/api/onboardingadmin/getITAMCountryLocation';
  EmployeeDetailURL = 'https://obadminportal.azurewebsites.net/qa/api/scope/EmployeeSearchByADIDEmailEmpId?EmployeeID=';

  constructor(private httpClient: HttpClient) { }

  getLocations() {
    return this.httpClient.get(this.LocationURL);
  }

  getEmployee(employeeID: any) {
    return this.httpClient.get(this.EmployeeDetailURL + employeeID);
  }
}
