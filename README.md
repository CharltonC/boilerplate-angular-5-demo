# Angular 5 Boilerplate

### Frontend Stack used in this Boilerplate
- SCSS (CSS)
- JADE (HTML)
- CLI 1.6.6 (Initial Project is generated by CLI)
- Angular 5.2.0 (from CLI)

### Boilerplate covered Usage/Test
* Component
    - binding
    - event handler
    - @HostBinding, @HostListener
    - Input (passing data to component), Output (custom event emitter)
    - ngOnInit with data-call service
    - Access Component's own Dom via `ElementRef.nativeElement`
    - Access child component or directive in own template via `@ViewChild/@ViewChildren`
    - Access passed component or directive via `@ContentChild/@ContentChildren` (testing <ng-content>)

* Directive
    - custom validator (for template-driven form)
    - attr. directive - fixed behavior (events, attr: style/attr/css class)
    - structural directive
    - directive which is exported via `exportas`

* Service
    - async data fetching (promsie based)

* Pipe
    - simple transform uppercase to lowercase

* Router
    - 4 route types (normal, wildcard, specific, specific guard with data-call service)
    - navigating path (both via HTML or JS)
    - route guard which resolves depending on data fetching
    - accessing resolve data (both query param and path param)
    - lazy route loading (not covered)

* Form
    - 2 approaches (both template-driven & reactive form)
    - validation (both built-in & cusstom)
    - model (both template-driven & reactive form)

### Setup (Mac based)
1. Install Node 6.9.0 or higher
2. Install Homebrew
3. Install Watchman in Terminal (for monitoring file changes):  
    ```
    brew install watchman
    ```
4. Install Typescript & CLI in Terminal:
    ```
    npm install -g @angular/cli typescript
    ```
5. Under Project Root, install Jade/Pug in Terminal:
    ```
    npm install --save-dev pug pug-html-loader
    ```
6. Under Project Root, Install the dependencies in Terminal:
    ```
    npm install
    ```
7. Run the patch for the CLI so that:
    - the Scss has sourcemap
    - the generated project files are formatted in 4 spaces instead of 2 spaces
    - Write Jade/Pug instead of Html
    - More comprehensive code/comments for the Component Test/Spec file
    ```
    npm run cli-patch
    ```

### CLI Command
* Development server (`http://localhost:4200/`)
    ```
    ng serve
    ```
* Build
    ```
    ng build --prod
    ```
* Unit test (Karma)
    ```
    ng test
    ```
* End-2-End Test (Protractor)
    ```
    ng e2e
    ```
* Generating NG Entity, e.g.
    ```
    ng generate <entity-type> <path-name>/<entity-name>
    ```
    - path name is relative to "src/app" folder
    - entity type can be one of the following: `directive|pipe|service|class|guard|interface|enum|module`

### Folder Structure
    cli-patch/
    src/
        test-util/              // dummy components, directives that can be overidden/used in testing
        scss/                   // scss files
        app/
            directive/
            pipe/
            service/
            ui-component/       // generic component only, not to be conflict with form/router
            ui-form/            // form related
                cmp/
                model/          // model created using `FormGroup` or Service
                validator/
            ui-router/          // router related
                config/
                guard/          // guard (if any)
                lazy-module/    // module containing view component to be lazy load (if any)
                view/           // view component
