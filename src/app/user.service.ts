import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  EmployeeID: string = "";
  LocationURL = "https://obadminportal.azurewebsites.net/qa/api/onboardingadmin/getITAMCountryLocation";
  EmployeeDetailURL = "https://obadminportal.azurewebsites.net/qa/api/scope/EmployeeSearchByADIDEmailEmpId?EmployeeID=";


  constructor(private httpClient: HttpClient) { }

  getLocations() {
    return this.httpClient.get(this.LocationURL);
  }

  getEmployee(employeeID: any) {
    return this.httpClient.get(this.EmployeeDetailURL + employeeID);
  }
}
