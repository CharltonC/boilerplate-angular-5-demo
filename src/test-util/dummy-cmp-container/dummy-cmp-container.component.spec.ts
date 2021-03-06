import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, Injector } from '@angular/core';

import { DummyContainerComponent } from './dummy-cmp-container.component';

describe('DummyContainerComponent', () => {
    let cmpFixture: ComponentFixture<DummyContainerComponent >,
        cmpHost: DebugElement,
        cmpInst: DummyContainerComponent,
        // cmpInjector: Injector,
        cmpTplElem: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // schemas: [ NO_ERRORS_SCHEMA ],
            // imports: [],
            // providers: [],
            declarations: [
                DummyContainerComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(DummyContainerComponent);
        cmpHost = cmpFixture.debugElement;
        cmpInst = cmpFixture.componentInstance;

        // Get any Directive Instance which is applied to any children element
        // - e.g. <directiveInstance> = cmpHost.childNodes[<elementIndexInTemplate>].injector.get(<DirectiveName>);

        // Spy any if required (prior to any directive is applied and View is populated with Changes)
        // - e.g. spy = SpyOn(<obj>, '<method-name>');
        // - e.g. spy = SpyOnProperty(<obj>, '<property-name>', '<getOrSetType>');

        // Populate Changes to the View (applying any directive)
        cmpFixture.detectChanges();

        // Get the DOM after Changes are populated to the View & any directive has been applied to the Element
        cmpTplElem = cmpHost.nativeElement;
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
    });
});
