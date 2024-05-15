import { Component } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';
import { CommonModule } from '@angular/common';
import { Obj } from '../obj';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  content: Obj[] = [];

  constructor(private handler : ApiHandlerService) {}

  ngOnInit() {
    this.handler.getData().subscribe((data) => {
      this.content = data;
    });
  }
}
