import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function PasswordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let retval: ValidationErrors = {
            pattern: 'Invalid - Please click ! icon for format'
        };
        let counter = 0;
        console.log('PasswordPatternValidator(): ' + control.value);
        
        if (control.value) { // must match 3 of 4
            let valuestring: string = control.value;
            let regexp = new RegExp('[A-Z]');
            if(regexp.test(valuestring)) {
                counter++;
            }
            regexp = new RegExp('[a-z]');
            if(regexp.test(valuestring)) {
                counter++;
            }
            regexp = new RegExp('[0-9]');
            if(regexp.test(valuestring)) {
                counter++;
            }
            regexp =  new RegExp('[" # $ % & \' ( ) * + , \- . : ; < = > ? @ [ \\ \] ^ { }]');
            if(regexp.test(valuestring)) {
                counter++;
            }
        }
        return counter >= 3 ? null : retval;
    }
}