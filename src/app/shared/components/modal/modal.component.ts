import {Component, inject, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() hasHeader: boolean = true;
  private modalService = inject(ModalService);

  closeModal() {
    this.modalService.closeModal();
  }
}
