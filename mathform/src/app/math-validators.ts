import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addtion(form: AbstractControl) {
    const { a, b, answer } = form.value;
    if (a + b === parseInt(answer)) {
      return null;
    } else {
      return { addition: true };
    }
  }
}
