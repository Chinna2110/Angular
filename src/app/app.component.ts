import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemoService } from 'src/service/demo.service';


export class StudentModule {

  id: any;
  firstName: string = 'RioRio';
  lastName: string = '';
  city: string = '';
  email: any;
  password: any;
  course: string = '';
  phoneNumber: any;
  name: string = 'Vikram';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  // onType(event: any) {
  //   console.log(event.target.value);
  // }

  name1: string = '';

  title = 'StudentManagementSystem';
  isActive: boolean = false;
  changeText() {
    this.title = 'Text Updated';
  }

  @Input('name') name = '';

  ngOnChanges() {
    console.log("OnChanges Called", this.name);
  }
  ngOnInit() {
    console.log("OnInit Called");
  } 
  ngDoCheck() {
    console.log("DoCheck Called");
  }
  // ngAfterContentChecked() {
  //   console.log("AfterContentChecked Called");
  // }
  // ngAfterContentInit() {
  //   console.log("AfterContentInit Called");
  // }
  // ngAfterViewChecked() {
  //   console.log("AfterViewChecked Called");
  // }
  ngOnDestroy() {
    console.log("OnDestroy Called");
  }


  constructor(private demoService: DemoService) {
    console.log("App Component Constructor Called");
  }
  student: StudentModule = new StudentModule();

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log(this.student);
    // this.demoService.createStudent(this.student).subscribe(
    //   (response) => {
    //     console.log('Student created successfully:', response);
    //   },
    //   (error) => {
    //     console.error('Error creating student:', error);
    //   }
    // );
    form.resetForm();
  }
}

