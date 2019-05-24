import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
//dialog
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule
    ]
})
export class MaterialModule {}