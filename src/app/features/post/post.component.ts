import {Component, inject} from "@angular/core";
import {ModalService} from "../../shared/components/modal/modal.service";
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AvatarComponent} from "../../shared/components/avatar/avatar.component";

@Component({
  standalone: true,
  selector: 'app-post-modal',
  imports: [
    ModalComponent,
    ReactiveFormsModule,
    AvatarComponent
  ],
  styleUrl: './post.component.css',
  templateUrl: './post.component.html'
})
export class PostComponent {
  private modalService = inject(ModalService)
  postForm = new FormGroup({
    postInput: new FormControl('')
  })

  isOpened() {
    return this.modalService.isModalOpened("POST")
  }
}
