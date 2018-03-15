// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { ROUTES_CONFIG } from './ui-router/config/config';
import { DataCallResolverService } from './ui-router/guard/data-call-resolver/data-call-resolver.service';
import { Viewtest1Component } from './ui-router/view/viewtest1/viewtest1.component';
import { Viewtest2Component } from './ui-router/view/viewtest2/viewtest2.component';
import { Viewtest3Component } from './ui-router/view/viewtest3/viewtest3.component';

// Form
import { FormModelService } from './ui-form/model/form-model/form-model.service';
import { DemoInputValidatorDirective } from './ui-form/validator/demo-directive/demo-input-validator.directive';
import { TemplateFormComponent } from './ui-form/cmp/template-form/template-form.component';
import { FormGroupService } from './ui-form/model/form-group/form-group.service';
import { ReactiveFormComponent } from './ui-form/cmp/reactive-form/reactive-form.component';

// General Service
import { DataCallService } from './service/data-call/data-call.service';

// General Components
import { AppComponent } from './app.component';
import { DummyComponent } from './ui-component/cmp/dummy/dummy.component';
import { DummyContainerComponent } from './ui-component/cmp/dummy-container/dummy-container.component';
import { Demo2Component } from './ui-component/cmp/demo2/demo2.component';
import { Demo3Component } from './ui-component/cmp/demo3/demo3.component';
import { Demo4Component } from './ui-component/cmp/demo4/demo4.component';
import { Demo5Component } from './ui-component/cmp/demo5/demo5.component';

// General Pipe
import { DemoPipe } from './pipe/demo/demo.pipe';
import { AttributeDirective } from './directive/attribute/attribute.directive';
import { StructuralDirective } from './directive/structural/structural.directive';
import { ExportasDirective } from './directive/exportas/exportas.directive';


@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(ROUTES_CONFIG, { enableTracing: true }),
        RouterModule.forRoot(ROUTES_CONFIG),
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DataCallService,
        DataCallResolverService,
        FormModelService,
        FormGroupService
    ],
    declarations: [
        AppComponent,
        DummyComponent,
        DummyContainerComponent,
        Viewtest1Component,
        Viewtest2Component,
        Viewtest3Component,
        Demo2Component,
        Demo3Component,
        Demo4Component,
        Demo5Component,
        TemplateFormComponent,
        ReactiveFormComponent,
        DemoInputValidatorDirective,
        DemoPipe,
        AttributeDirective,
        StructuralDirective,
        ExportasDirective,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
