import { Directive, ElementRef, OnInit, Renderer2,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlogDirective]',
  standalone: true
})
export class BlogDirectiveDirective {
  @Input('appBlogDirective') color: string='';
  fontsize:string='';

  constructor(private _element:ElementRef,private renderer:Renderer2) { }
 
    @HostListener('mouseenter') onMouseEnter() {
    this.highlight("red")
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("")
  }

  private highlight(color:string){
   this._element.nativeElement.color=color;
  }

  ngOnInit() {
    this.renderer.setStyle(this._element.nativeElement, 'color', this.color);
 
  }
}
