import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }

}
