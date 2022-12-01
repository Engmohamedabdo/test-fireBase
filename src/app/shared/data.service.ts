import { Student } from './../modal/student';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }

  // add student
  addStudent(student: Student){
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all student
  getAllStudents(){
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student){
    return this.afs.doc('/Students/'+student.id).delete();
  }

  // udate student
  updateStudent(student : Student){
    this.deleteStudent(student);
    this.addStudent(student);
  }

}
