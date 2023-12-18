import {Component} from '@angular/core';
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {PostComponent} from "../post/post.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AvatarComponent} from "../../shared/components/avatar/avatar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    PostComponent,
    ReactiveFormsModule,
    AvatarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  postForm = new FormGroup({
    postInput: new FormControl('')
  })

  adjustTextareaHeight(event: any){
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }
}
