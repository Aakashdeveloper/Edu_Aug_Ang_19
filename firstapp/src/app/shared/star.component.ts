import { Component, OnInit,
        OnChanges, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    constructor(){
        console.log(">>>>this is construtor")
    }

    ngOnInit(){
        console.log(">>>>this is oninit")
    }

    ngOnChanges(){
        this.starWidth = this.rating * 86 /6;
        console.log(">>>>this is onchanges")
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }


    
}