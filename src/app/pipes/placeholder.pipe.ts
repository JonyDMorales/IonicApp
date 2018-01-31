import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'placeholder'
})

export class PlaceholderPipe implements PipeTransform {

	constructor(){ }

  	transform(value: string, defecto: string = 'Nueva Lista'): string {
		return (value)? value: defecto;
  	}

}