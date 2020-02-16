import { Directive, 
        Renderer2, 
        OnInit, 
        ElementRef, 
        HostListener, 
        HostBinding, 
        Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('title') title: string;

  @HostListener('mouseenter') onMouseOver(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
    this.title='Pepito';
  }

  
  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
