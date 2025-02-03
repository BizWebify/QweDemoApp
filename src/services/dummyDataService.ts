import { Injectable } from '@angular/core';
import { projectModel } from '../interface/projectModel';

@Injectable({
  providedIn: 'root',
})
export class dummyDataService {
  private apiUrl =
    'https://staging-api.tupper.co.in/tupper/v1/public/projects/web-dev';

  async getProjects(): Promise<projectModel[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      return data.content.map((project: any) => ({
        status: project.status,
        title: project.title,
        description: project.description,
        createdOn: project.createdOn,
        mode: project.mode,
        skillsRequired: project.skillsRequired || [],
        preferredExperience: project.preferredExperience,
      })) as projectModel[];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }
}
