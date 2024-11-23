import { Component } from '@angular/core';
import { BtnReportarComponent } from '../../Components/btn-reportar/btn-reportar.component';
import { FormsComponent } from "../../Components/forms/forms.component";

@Component({
  selector: 'app-home',
  imports: [BtnReportarComponent, FormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
