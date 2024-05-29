import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectList: Project[] = [
    {
      id: 0,
      name: '3D Engine',
      description: 'description',
      url: 'https://github.com/kchoc/3DEngine',
      image: 'https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg'
    },
    {
      id: 1,
      name: 'Portfolio',
      description: 'description',
      url: 'https://github.com/kchoc/portfolio',
      image: 'https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg'
    },
    {
      id: 2,
      name: 'Sample 3',
      description: 'description',
      url: '',
      image: 'https://www.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg'
    }

  ];
}
