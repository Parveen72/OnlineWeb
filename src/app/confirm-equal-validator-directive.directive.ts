
import { Validator,NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
 

@Directive({
  selector: '[appConfirmEqualValidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirectiveDirective,
    multi: true
    }]
})
export class ConfirmEqualValidatorDirectiveDirective implements Validator {
  @Input()
  appConfirmEqualValidatorDirective!: string;
   
  validate(control: AbstractControl):{[key:string]: any} |null {
  const controlToCompare = control.get(this.appConfirmEqualValidatorDirective);

  if(controlToCompare && controlToCompare.value !==control.value){
  return { 'notEqual': true}
  }
  return null;
  }

}
