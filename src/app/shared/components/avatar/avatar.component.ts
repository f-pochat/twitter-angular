import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() imageUrl?: string;
  @Input() name?: string;

  getInitials(): string {
    return this.name?.toUpperCase().split(" ").slice(0, 2).map(word => word[0]).join("") ?? ""
  }
}
