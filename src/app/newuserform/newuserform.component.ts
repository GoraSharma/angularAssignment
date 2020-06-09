import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'newuserform',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.css']
})
export class NewuserformComponent implements OnInit {
  countriesList: any[] = [];
  countrySelected: any;

  LocationsList: any[] = [];

  // for search box, default value
  searchQuery = 'aprya';

  // employee data, iniial empty value
  empEmail = '';
  empADID = '';
  empName = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLocations().subscribe((data: any) => {
      this.countriesList = data.Country;
      this.LocationsList = data.Locations;
    });

  }

  countryChange(contryvalue) {
    this.countrySelected = contryvalue;
  }

  searchEmployee() {
    this.userService.getEmployee(this.searchQuery).subscribe((response: any) => {
      console.log(response.data)
      // Assigning data
      this.empADID = response.data.EmployeeID;
      this.empName = response.data.DisplayName;
      this.empEmail = response.data.EmailID;
    });
  }

  submitEmployeeDetails(myForm) {
    console.log(myForm.value);

    // TODO: API call to submit data
  }
}
