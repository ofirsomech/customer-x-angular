import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];

  constructor(private modalService: NgbModal) {}

  open(content: any, options: any = {}): NgbModalRef {
    const modalRef = this.modalService.open(content, options);
    this.modals.push(modalRef);
    modalRef.result.then(
      () => {
        this.removeModal(modalRef);
      },
      () => {
        this.removeModal(modalRef);
      }
    );
    return modalRef;
  }

  closeAll(): void {
    this.modals.forEach((modalRef) => {
      modalRef.dismiss();
    });
  }

  private removeModal(modalRef: NgbModalRef): void {
    const index = this.modals.indexOf(modalRef);
    if (index > -1) {
      this.modals.splice(index, 1);
    }
  }
}
