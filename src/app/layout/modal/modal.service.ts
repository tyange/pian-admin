import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isModalOpen = false;
  private modalSub = new Subject<boolean>();

  getModalStatus() {
    return this.isModalOpen;
  }

  getModalUpdateListener() {
    return this.modalSub;
  }

  openModal() {
    this.isModalOpen = true;
    this.modalSub.next(true);
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalSub.next(false);
  }
}
