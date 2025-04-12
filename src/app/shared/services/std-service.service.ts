import { inject, Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { SnackBarService } from './snack-bar.service';
@Injectable({
  providedIn: 'root'
})
export class StdServiceService {
  private _snackBarService =inject(SnackBarService)
  stdArr: Array<Istd> =[//1
    {
      fname : "James",
      lname : "Doe",
      email : "james@gmail.com",
      contact : 6758903456,
      id : '123'
    },
    {
      fname : "Jen",
      lname : "Doe",
      email : "jen@gmail.com",
      contact : 9058903456,
      id : '124'
    },
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jhon@gmail.com",
      contact : 9958903456,
      id : '124'
    }
  ]
  constructor() { }
  fetchAllStdData(){//2
    //api call to fetch all students data
    return this.stdArr
  }

  // removeLast(){//3
  //   this.stdArr.pop()
  // }
  addNewStd(std:Istd){//after tble ts do this
    //api call to creat new student in db
    this.stdArr.push(std)
    this._snackBarService.openSnackBar(`The new student ${std.fname} is added successfully!!!`)
  }

  removeStd(id:string){
    //api calll to remove student 
    let getIndex = this.stdArr.findIndex(std=> std.id === id);
    let removedStd= this.stdArr[getIndex];
    this.stdArr.splice(getIndex, 1);
    this._snackBarService.openSnackBar(`student ${removedStd.fname}${removedStd.lname} removed successfully!!!`)
  }
 
}
