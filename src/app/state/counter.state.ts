import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Counter } from "../models/counter.model";
import { IncrementCounter } from "../actions/counter.actions";

export class CounterStateModel {
  count: number;
}

@State<CounterStateModel>({
  name: "count",
  defaults: {
    count: 0
  }
})
export class CounterState {
  @Selector()
  static getCounter(state: CounterStateModel) {
    return state.count;
  }

  @Action(IncrementCounter)
  incrementCounter({ getState, setState }) {
    const state = getState();
    setState({
      count: state.count + 1
    });
  }
  // incrementCounter({ getState, patchState }: StateContext<CounterStateModel>) {
  //   const state = getState();
  //   patchState({
  //     count: state.count + 1
  //   });
  // }
}
