import { Directive, ElementRef, Renderer2,Input, } from '@angular/core';

@Directive({
  selector: '[appBlogDirective]',
  standalone: true
})
export class BlogDirectiveDirective {
  @Input('appBlogDirective') color: string='';
  fontsize:string='';

  constructor(private _element:ElementRef,private renderer:Renderer2) { }
 

  ngOnInit() {
    this.renderer.setStyle(this._element.nativeElement, 'color', this.color);
 
  }
}
