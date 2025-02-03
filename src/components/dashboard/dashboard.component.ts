import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { ActiveScreenComponent } from '../active-screen/active-screen.component';
import { PastScreenComponent } from '../past-screen/past-screen.component';
import { HowDoesItWorksComponent } from '../how-does-it-works/how-does-it-works.component';
import { InfoSectionComponent } from '../info-section/info-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    PastScreenComponent,
    HeaderBannerComponent,
    ActiveScreenComponent,
    HowDoesItWorksComponent,
    InfoSectionComponent,
    FooterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
