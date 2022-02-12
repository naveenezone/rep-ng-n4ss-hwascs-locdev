import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Docker } from 'src/app/resources/hwa/model/docker.model';
import { Dummy } from 'src/app/resources/hwa/model/dummy.model';
import { HwaDataService } from '../../resources/hwa/service/data/hwa-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hello: string;
  docker: Docker;
  dummy: Dummy;
  public dummys: Dummy[];
  imageName: string;
  containerName: string;
  selectdb: string = '';
  selectdbList: string[] = ['Select', 'iamrws', 'hwarws', 'tdorws'];

  // constructor() { }

  constructor(private hwaDataService: HwaDataService) {}

  ngOnInit(): void {}

  getHello() {
    this.hwaDataService.getDataHello().subscribe((data) => {
      // console.log(data);
      this.hello = data;
    });
  }

  getDocker() {
    this.hwaDataService.getDataDocker().subscribe((data) => {
      // console.log(data);
      // console.log(typeof data);
      this.docker = data;
      // console.log(typeof this.docker);
      // console.log(this.docker.containerName);
      // console.log(this.docker.imageName);
    });
  }

  getDataDummy(selectdb) {
    this.hwaDataService.getDataDummy(selectdb).subscribe((data) => {
      // console.log(data);
      this.dummys = data;
      // console.log(this.dummys[1]);
    });
  }

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectdb = event.target.value;
  }
}
