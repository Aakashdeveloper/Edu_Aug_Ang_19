import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'mypipe'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindof){
        if(kindof === 'upper'){
            value = value.toUpperCase();
        }else {
            value = value.toLowerCase();
        }
        
        return value
    }
}