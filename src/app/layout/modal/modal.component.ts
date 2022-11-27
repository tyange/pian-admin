import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  imports: [NgIf],
})
export class ModalComponent implements OnInit, OnDestroy {
  isModalOpen = false;
  @Input() modalCloseNext?: () => void;

  private modalSub!: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.isModalOpen = this.modalService.getModalStatus();
    this.modalSub = this.modalService.getModalUpdateListener().subscribe({
      next: (data: boolean) => {
        this.isModalOpen = data;
      },
    });
  }

  modalCloseHandler() {
    this.modalService.closeModal();
  }

  modalCloseWithNextHandler() {
    this.modalCloseNext!();
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    this.modalSub.unsubscribe();
  }
}
