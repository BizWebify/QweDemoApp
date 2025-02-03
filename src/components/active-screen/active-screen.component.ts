import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dummyDataService } from '../../services/dummyDataService';
import { projectModel } from '../../interface/projectModel';

@Component({
  selector: 'app-active-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-screen.component.html',
  styleUrl: './active-screen.component.css',
})
export class ActiveScreenComponent {
  constructor(private projectService: dummyDataService) {}
  projects: projectModel[] = [];

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
    this.projects = this.projects.filter((it) => it.status == 'ACTIVE');
  }
}
