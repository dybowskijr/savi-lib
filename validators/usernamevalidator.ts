import {mobilePhoneValidator} from './mobilephonevalidator';
import {FormGroup, Validators, ValidatorFn, AbstractControl, FormControl} from '@angular/forms';
import { CONSTRAINTS } from '../provider/config';

export function usernameValidator(): ValidatorFn {
    return(control: FormControl): {[key: string]: any} => {
        let username = control.value;
        if(username.match(new RegExp('^[A-Za-z]'))) {
            return {error: "Your username must begin with a letter"};
        }
        else if(username.match(new RegExp('[^\+\-\.@A-Z_a-z0-9]'))) {
            return {error: "Your username can ONLY contain alpha-numeric and the characters  @+._-"}
        }
        
        else {
            control.clearValidators();
            control.setValidators([
                   Validators.required, 
                   Validators.minLength(CONSTRAINTS.USER_NAME_MIN),
                   Validators.maxLength(CONSTRAINTS.USER_NAME_MAX)]);
        }
    }
}


// checkUsername() {
//     this.usernameerror=false;
//     var beginsWithLetterConstraint = new RegExp('^[A-Za-z]');
//     var beginsWithLetter = this.username.match(beginsWithLetterConstraint);
//     var badUsernameCharacters = new RegExp('[^\+\-\.@A-Z_a-z0-9]');
//     var hasBadCharactersInUsername = this.username.match(badUsernameCharacters);
//     if(!this.username || this.username==='') {
//       this.usernameerror=true;
//       this.usernameerrorvalue='This field may not be empty.';
//     }else if(this.username.length<8) {
//       this.usernameerror=true;
//       this.usernameerrorvalue='Username must be at least 8 characters.';
//     }else if(this.username.length>30) {
//       this.usernameerror=true;
//       this.usernameerrorvalue='Username must be less than 30 characters';
//     }else if(!beginsWithLetter) {
//       this.usernameerror=true;
//       this.usernameerrorvalue='Username must begin with a letter';
//     }
//     else if(hasBadCharactersInUsername) {
//       this.usernameerror=true;
//       this.usernameerrorvalue='Username must only contain alphanumeric characters, @, +, ., _, and -';
//     }
//     return this.usernameerror;
//   }
