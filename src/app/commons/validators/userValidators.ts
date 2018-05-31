import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class UserValidators {
    static confirmPasswordNotMatched(password: string) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            if((control.value as string) !== password) {
                return { confirmPasswordNotMatched: true };
            }
            return null;
        }
    }
}