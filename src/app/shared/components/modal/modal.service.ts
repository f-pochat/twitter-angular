import {Injectable} from '@angular/core';

export type ModalEnum = "POST"

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  openedModal: ModalEnum | null = null;

  constructor() {
  }

  openModal(modalName: ModalEnum) {
    this.openedModal = modalName
  }

  isModalOpened(modalName: ModalEnum) {
    return this.openedModal === modalName
  }

  closeModal() {
    this.openedModal = null;
  }
}
