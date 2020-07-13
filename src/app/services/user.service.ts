import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  mainUrl='';
  constructor(private liveUrl:UrlService,private http:HttpClient) {
    this.mainUrl=liveUrl.url
   }

  async addData(formData){
    return this.http.post(`${this.mainUrl}/customer/add`,formData).toPromise();
  }   
  
}

