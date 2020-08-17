import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent  {
  @Input() header;
  @Input() body;

  @Output() open = new EventEmitter();

  public onOpenClick() {
    console.log('Hola!');
    this.open.emit();
  }
}
