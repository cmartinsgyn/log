import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dataAtual'
})
export class DataAtual implements PipeTransform {
    transform(date: any, ...args: any[]) {
        const d = new Date(date);
        return moment(d).format('DD.MM.YYYY');
    }
}
