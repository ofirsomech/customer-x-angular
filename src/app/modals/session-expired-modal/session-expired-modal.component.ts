import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-session-expired-modal',
  templateUrl: './session-expired-modal.component.html',
  styleUrls: ['./session-expired-modal.component.css'],
})
export class SessionExpiredModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
