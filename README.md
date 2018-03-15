# Ng5 Boilerplate

### About
- SCSS (CSS)
- JADE (HTML)
- CLI 1.6.6 (Initial Project is generated by CLI)

### Boilerplate covered Usage/Test
* Component
    - binding
    - event handler
    - @HostBinding, @HostListener
    - Input (passing data to component), Output (custom event emitter)
    - ngOnInit with data-call service
    - Access child component or directive in own template
    - Access passed component or directive (testing <ng-content>)

* Directive
    - custom validator (for template-driven form)
    - attr. directive - fixed behavior (events, attr: style/attr/css class)
    - structural directive
    - export as

* Service
    - async data fetching

* Pipe
    - simple transform uppercase to lowercase

* Router
    - 4 route types (normal, wildcard, specific, specific guard with data-call service)
    - navigating path
    - accessing resolve data (query param/path param)
    - lazy route loading (not covered)

* Form
    - 2 approaches (template/reactive)
    - built-in validation & custom validation
    - model

### Setup
1. Install Node 6.9.0 or higher
2. Install Homebrew
3. Install Watchman in Terminal (for monitoring file changes): `brew install watchman`
4. Install Typescript & CLI in Terminal: `npm install -g @angular/cli typescript`
5. Under Project Root, install Jade/Pug in Terminal: `npm install --save-dev pug pug-html-loader`
6. Under Project Root, Install the dependencies in Terminal: `npm install`
7. Run the patch for the CLI: `npm run cli-patch`

### CLI Command
- Development server (`http://localhost:4200/`)       `ng serve`
- Build                                               `ng build --prod`
- Unit test (Karma)                                   `ng test`
- End-2-End Test (Protractor)                         `ng e2e`
- Generating NG Entity, e.g.                          `ng generate <entity-type> <entity-name>`
  where entity type can be one of the following: `directive|pipe|service|class|guard|interface|enum|module`

### Folder Structure
    cli-patch/
    src/
        test-util/              // dummy components, directives that can be overidden/used in testing
        css/                    // scss files
        app/
            directive/
            pipe/
            service/
            ui-component/       // generic component only, not to be conflict with form/router
                cmp/
                module/
            ui-form/            // form related
                cmp/
                model/          // model created using `FormGroup` or Service
                validator/
            ui-router/          // router related
                config/
                guard/          // guard (if any)
                lazy-module/    // module containing view component to be lazy load (if any)
                view/           // view component


### Adding additional scripts
