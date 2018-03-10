import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';

@Component({
    selector: '<%= selector %>',<% if(inlineTemplate) { %>
    template: `
        <p>
            <%= dasherize(name) %> works!
        </p>
  ` ,<% } else { %>
    templateUrl: './<%= dasherize(name) %>.component.pug',<% } if(inlineStyle) { %>
    styles: []<% } else { %>
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
    encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
    changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
