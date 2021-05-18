import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatCard, MatCardModule } from '@angular/material/card';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AddNewProfileComponent } from './components/add-new-profile/add-new-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatagridComponent,
    PhotoGridComponent,
    ProfileDetailsComponent,
    AddNewProfileComponent,
  
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  exports :[
    PhotoGridComponent,
    DatagridComponent,
    ProfileDetailsComponent,
    AddNewProfileComponent
  ]
})
export class UiComponentsModule { }
