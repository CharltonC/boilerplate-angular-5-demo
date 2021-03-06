import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAttributeDirective } from './demo-attribute.directive';
import { DummyComponent } from '../../../test-util/dummy-cmp/dummy-cmp.component';

describe('Demo for Attribute Directive (@HostBinding, @HostListener)', () => {
    describe('Test by Itself', () => {
        const directive = new DemoAttributeDirective();

        it('should create an instance', () => {
            expect(directive).toBeTruthy();
        });

        it('@HostBinding should have initial value', () => {
            expect(directive.title).toBe('demo attribute directive');
            expect(directive.bgColor).toBe('red');
            expect(directive.clsName).toBe(true);
        });
    });

    describe('Test with Component', () => {
        let cmpInst: DummyComponent,
            cmpFixture: ComponentFixture<DummyComponent>,
            cmpHost: DebugElement,
            cmpInjector,
            attrDirective: DemoAttributeDirective,
            cmpTplElem: any,
            paragraphElem: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    DummyComponent,
                    DemoAttributeDirective,
                ]
            });
        }));

        beforeEach(() => {
            const option = {set: { template: `<p appDemoAttrDir>lorem</p>` }};

            cmpFixture = TestBed.overrideComponent(DummyComponent, option).createComponent(DummyComponent);
            cmpHost = cmpFixture.debugElement;
            cmpInjector = cmpHost.injector;
            cmpTplElem = cmpHost.nativeElement;
            cmpInst = cmpFixture.componentInstance;
            attrDirective = cmpHost.children[0].injector.get(DemoAttributeDirective);

            cmpFixture.detectChanges();

            paragraphElem = cmpTplElem.querySelector('p');
        });

        it('should work have default background color style, title attribute and class name', () => {
            expect(paragraphElem.style['background-color']).toBe('red');
            expect(paragraphElem.title).toBe('demo attribute directive');
            expect(/demo\-attr\-dir/.test(paragraphElem.className)).toBe(true);
        });

        it('should call the `onClick` handler when the 1st <p> is clicked', () => {
            spyOn(attrDirective, 'onClick').and.callThrough();
            paragraphElem.click();
            cmpFixture.detectChanges();
            expect(attrDirective.onClick).toHaveBeenCalled();
        });

        it('should update in Component View when Directive property values change', () => {
            attrDirective.bgColor = 'blue';
            attrDirective.title = 'new title';
            attrDirective.clsName = false;
            cmpFixture.detectChanges();

            expect(paragraphElem.style['background-color']).toBe(attrDirective.bgColor);
            expect(paragraphElem.title).toBe(attrDirective.title);
            expect(/demo\-attr\-dir/.test(paragraphElem.className)).toBe(false);
        });
    });
});
