import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { authServiceService } from "../services/authService.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register(model: any) {
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      () => {
        console.log("Registration Success");
      },
      error => {
        console.log(error);
      }
    );
  }

  cancel() {
    console.log("Canceled");
    this.cancelRegister.emit(false);
  }
}
