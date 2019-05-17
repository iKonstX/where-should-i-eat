import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setStep } from 'src/app/states/setup/setup.actions';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  public state: any;
  constructor(public store: Store<{ setupState: any }>) {
    this.store.subscribe((val) => {
      this.state = val.setupState
    });
  }

  public setStep(step) {
    this.store.dispatch(new setStep({ step }));
  }

  public nextStep() {
    this.store.dispatch(new setStep({ step: this.state.currentStep++ }));
  }

  public prevStep() {
    this.store.dispatch(new setStep({ step: this.state.currentStep-- }));
  }
}
