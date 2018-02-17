import { Directive, Input, Attribute, SimpleChange, ViewContainerRef, TemplateRef } from "@angular/core";



@Directive({
    selector: "[counterOf]"
})
export class CounterDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

    @Input('counterOf')
    counter: number;

    ngOnChanges(changes: SimpleChange) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContex(i + 1));
        }
    }
}

class CounterDirectiveContex {
    constructor(public $implicit: any) { }
}