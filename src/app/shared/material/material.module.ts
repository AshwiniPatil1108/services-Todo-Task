import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule} from '@angular/material/snack-bar';

const modulesArr=[
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule
]
@NgModule({
    declarations : [],
    imports :[
       ...modulesArr
    ],
    exports :[
       ...modulesArr
    ]
})
export class MaterialModule{

}