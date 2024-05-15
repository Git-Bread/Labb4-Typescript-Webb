import { Injectable } from '@angular/core';
import { Obj } from '../obj';

@Injectable({
  providedIn: 'root'
})
export class SorterService {
  constructor() { }
  simpleSort(val : number, obj: Obj[]) {
    let simpleSort = obj;
    switch (val) {
        case 0:
            simpleSort.sort((a,b) => (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0));
            break;
        case 1:
            simpleSort.sort((a,b) => (a.coursename > b.coursename) ? 1 : ((b.coursename > a.coursename) ? -1 : 0));
            break;
        case 2:
            simpleSort.sort((a,b) => (a.progression > b.progression) ? 1 : ((b.progression > a.progression) ? -1 : 0));
            break;
    }
    return simpleSort;
}
}
