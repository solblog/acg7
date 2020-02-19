import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /* It is a method */
  @Input() set appUnless(condition: boolean){
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  /* TemplateRef get access to the template inside of out directive , What do we have to render*/
  /* ViewContainerRef where have to be render , Where to render*/

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
