import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appNavbar]',
  standalone: true
})
export class NavbarDirective {

  constructor(private _element:ElementRef) { 
    this._element.nativeElement.backgroundcolor="yellow"
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight("red")
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("")
  }

  highlight(color:string){
   this._element.nativeElement.backgroundcolor=color;
  }

}
