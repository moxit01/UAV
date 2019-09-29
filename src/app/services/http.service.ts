import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data: any ;
  private req: any ;
  humanurl = 'http://192.168.43.223:8000/api/features/?format=json' ;
  dronestatusurl = 'http://192.168.43.223:8000/api/dronestatus/?format=json';
  pointsURL = 'http://192.168.1.17:8000/api/flightinfo/?format=json';
  VideoURL = 'http://192.168.1.17:8000/api/upload';


  constructor(private http: HttpClient) { }

   humandetection() {
  return  this.http.get(this.humanurl);

  }

  dronestatus() {
    return this.http.get(this.dronestatusurl);
  }

  getPlotPoints() {
    return this.http.get(this.pointsURL);
  }
  }