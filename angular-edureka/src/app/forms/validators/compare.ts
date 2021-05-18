import { FormGroup } from "@angular/forms";

export function CompareValidator(control1 : string, control2: string)
    {
        // inner function is validator 
        // 1st argument is FormGroup or FormControl
        return function (form : FormGroup) {
            const control1Instance = form.get(control1)
            const control2Instance = form.get(control2);

            if(control1Instance.value === control2Instance.value)
                {
                    return null;
                }
            else 
                {
                    return { compare : { control1 : control1Instance.value, control2 : control2Instance.value } }
                }
        }
    }