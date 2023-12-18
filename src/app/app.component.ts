import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./features/post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HttpClientModule, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Twitter';
}
