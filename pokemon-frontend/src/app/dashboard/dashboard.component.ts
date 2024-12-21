import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { MainContentComponent } from "../main-content/main-content.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CarouselComponent, MainContentComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
