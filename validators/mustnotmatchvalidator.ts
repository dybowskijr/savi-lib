import {FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

export function mustNotMatchValidator(nameOne: string, nameTwo: string, errorText?: string): ValidatorFn {
    return(group: FormGroup): {[key: string]: any} => {
        let controlOne = group.controls[nameOne];
        let controlTwo = group.controls[nameTwo];
        if(controlOne.value == controlTwo.value) {
            return { patternsMatch: errorText || "Fields Must Not Match" };
        }
        else {
            return null;
        }
    }
}