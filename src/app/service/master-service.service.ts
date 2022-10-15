import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor() { }
  currentRole:string = 'Admin'
}
