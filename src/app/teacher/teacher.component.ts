import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from 'angular-file-uploader/public-api';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  
 
}
