import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectModel } from '../../interface/projectModel';
import { dummyDataService } from '../../services/dummyDataService';

@Component({
  selector: 'app-past-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-screen.component.html',
  styleUrl: './past-screen.component.css',
})
export class PastScreenComponent {
  constructor(private projectService: dummyDataService) {}
  projects: projectModel[] = [];

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
    this.projects = this.projects.filter((it) => it.status != 'ACTIVE');
  }
}
