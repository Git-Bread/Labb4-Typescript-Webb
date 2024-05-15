import { Component } from '@angular/core';
import { ApiHandlerService } from '../services/api-handler.service';
import { CommonModule } from '@angular/common';
import { Obj } from '../obj';
import { SorterService } from '../services/sorter.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  content: Obj[] = [];
  contentArchive: Obj[] = [];

  formHandle = new FormGroup({
    input: new FormControl("", Validators.required)
  })

  constructor(private handler : ApiHandlerService, private sorter : SorterService) {}

  ngOnInit() {
    this.handler.getData().subscribe((data) => {
      this.content = data;
      this.contentArchive = this.content;
      this.content = this.sorter.simpleSort(2, this.content);
    });
  }
  sort(num: number) {
    this.content = this.sorter.simpleSort(num, this.content);
  }
  search() {
    this.content = this.sorter.searchSort(this.formHandle.value.input!,  this.contentArchive);
  }
}
