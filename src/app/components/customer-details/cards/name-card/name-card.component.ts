import {Component, Input} from '@angular/core';
import {Customer} from "../../../../models/customer.model";

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent {
  @Input() customer: Customer = {};
  isExpanded = false;
}
