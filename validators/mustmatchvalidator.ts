import {FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

export function mustMatchValidator(nameOne: string, nameTwo: string, errorText?: string): ValidatorFn {
    return(group: FormGroup): {[key: string]: any} => {
        let controlOne = group.controls[nameOne];
        let controlTwo = group.controls[nameTwo];
        if(controlOne.value !== controlTwo.value) {
            return { patternsDoNotMatch: errorText || "Fields Must Match" };
        }
        else {
            return null;
        }
    }
}