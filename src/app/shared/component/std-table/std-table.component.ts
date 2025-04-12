import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';
import { StdServiceService } from '../../services/std-service.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr ! : Array<Istd>//1
  constructor(
    private _stdService : StdServiceService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStdData()//2
  }
  // onLastRemove(){
  //   this._stdService.removeLast()
  // }
  onStdRemove(id:string){//3 go to html
    let getConfirm :boolean = confirm(`Are you sure , you want to remove this student?`)
    if(getConfirm){
      this._stdService.removeStd(id)
    }
    
  }

}
