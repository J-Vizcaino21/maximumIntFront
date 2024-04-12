import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaximumIntegerModuloService } from '../../services/maximum-integer-modulo.service';
import { Parameters } from '../../interfaces/maximumModuloI';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent {

  form: FormGroup;
  maximumPossibleInt: unknown;
  values: Parameters | null = null;

  constructor(
    private MaximumIntegerModuloService: MaximumIntegerModuloService,
  ) {
    this.form = new FormGroup({
      modulo: new FormControl(null, [Validators.required]),
      residuo: new FormControl(null, [Validators.required]),
      maxNumber: new FormControl(null, [Validators.required]),
    })
  }

  OnFormSubmitted() {
    const parameters: Parameters = {
      maximumNumber: this.form.value.maxNumber,
      remainder: this.form.value.residuo,
      modulo: this.form.value.modulo
    }
    this.values = null;
    this.saveParameters(parameters);
    this.form.reset();
  }

  saveParameters(parameters: Parameters) {
    this.MaximumIntegerModuloService.saveParameters(parameters).subscribe({
      next: (res) => {
        this.values = parameters;
        console.log(res);
        this.getParameters();
      },
      error: (err) => {
        console.error(err.error);
      }
    })
  }

  getParameters() {
    this.MaximumIntegerModuloService.getMaximumInteger().subscribe({
      next: (res) => {
        console.log(res);
        this.maximumPossibleInt = res.maximumModulo;
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

}
