import { Component } from '@angular/core';
import { BlogDirectiveDirective } from '../directive/blog-directive.directive';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarDirective } from '../directive/navbar.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogDirectiveDirective,CommonModule,RouterOutlet, NavbarDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public showDetails=false;

  show(){
    this.showDetails=true;
  }

}
