import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-btn-reportar',
  imports: [MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './btn-reportar.component.html',
  styleUrl: './btn-reportar.component.css'
})
export class BtnReportarComponent {

}
