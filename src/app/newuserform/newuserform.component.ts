import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../user.service';

@Component({
  selector: 'newuserform',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.css']
})
export class NewuserformComponent implements OnInit {
  countriesList: any[] = [];
  LocationsList: any[] = [];
  EmployeeData: any;
  countrySelected;
  empID: string;
  email: string = "";
  adID: string = "";
  name: string = "";


  constructor(private httpClient: UserService) { }


  ngOnInit(): void {
    this.httpClient.getLocations().subscribe((data: any) => {
      console.log(data);
      this.countriesList = data.Country;
      this.LocationsList = data.Locations;

    });

  }

  submitEmployeeDetails(EMployeeData: any) {
    console.log(EMployeeData);
  }
  countryChange(contryvalue) {
    this.countrySelected = contryvalue;


  }
  searchEmployee(employeeID) {
    this.empID = employeeID;

    console.log(this.empID);
    this.httpClient.getEmployee(this.empID).subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(this.EmployeeData.Name);
    });



  }
}
