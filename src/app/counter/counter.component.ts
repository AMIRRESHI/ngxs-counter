import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IncrementCounter } from '../actions/counter.actions';
import { Observable } from 'rxjs';
import { Counter } from '../models/counter.model';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // counter$: Observable<Counter>

  @Select(CounterState.getCounter)
  counter$; //2 ways to select data: either use @select select the data or use the store.select both works

  constructor(private store: Store) {
    // this.counter$ = this.store.select(state => state.count.count)

    // this.counter$.subscribe(state => {
    //   console.log('inside CounterComponent: ', state );
    // });
  }

  ngOnInit() {
  }

  onClick() {
    this.store.dispatch(new IncrementCounter());
  }

}
