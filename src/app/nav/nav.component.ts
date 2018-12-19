import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged in Sucessfully");
      },
      error => {
        console.log("Failed to login!");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if the token exists, otherwise returns false;
  }

  logout() {
    localStorage.removeItem("token");
    console.log("logged out");
  }

  register() {
    console.log("Register Method");
  }
}
