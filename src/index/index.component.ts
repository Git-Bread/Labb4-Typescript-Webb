import { Component } from '@angular/core';
import { ApiHandlerService } from '../services/api-handler.service';
import { CommonModule } from '@angular/common';
import { Obj } from '../obj';
import { SorterService } from '../services/sorter.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  value: string = ""; 
  content: Obj[] = [];

  constructor(private handler : ApiHandlerService, private sorter : SorterService) {}

  ngOnInit() {
    this.handler.getData().subscribe((data) => {
      this.content = data;
      console.log(this.content)
      this.content = this.sorter.simpleSort(0, this.content);
      console.log(this.content)
    });
  }
  sort(num: number) {
    this.content = this.sorter.simpleSort(num, this.content);
  }
}
