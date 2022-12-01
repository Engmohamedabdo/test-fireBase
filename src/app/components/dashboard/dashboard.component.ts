import { DataService } from './../../shared/data.service';
import { Student } from './../../modal/student';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentList: Student[] = [];
  studentObj : Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };

  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private data: DataService
  ) {}

  register() {
    this.authService.logOut();
  }

  getAllStudents() {
    this.data.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.studentList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  resetForm(){
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
  }

  addStudent(){
    if(this.first_name == '' || this.last_name == '' || this.email == '' || this.mobile == ''){
      alert('Fill all input fields');
    }

    this.studentObj.id = '';
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.email = this.email;
    this.studentObj.mobile = this.mobile;

    this.data.addStudent(this.studentObj);
    this.resetForm();
  }

    updateStudent(){

    }

    deleteStudent(student: Student){
      if(confirm('Are you sure you want to delete '+student.first_name+ ' '+student.last_name+'?')){
        this.data.deleteStudent(student);
      }
    }

  checkToken() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.checkToken();
    this.getAllStudents();
  }
}
