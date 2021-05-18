import { AbstractControl } from "@angular/forms";

export function ProdaptEmail(control : AbstractControl)
    {
        const value : string = control.value;

        if(value.match(/[a-z]@prodapt.com/))
            {
                return null;
            }
        else
            {
                return { prodaptEmail : true }
            }
    }
