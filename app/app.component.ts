import { Component } from '@angular/core';

@Component ({
    selector: 'pm-app',
    template: `<div><h1>{{pageTile}}</h1>
       <pm-products></pm-products>
     </div>
    `
    
})
export class AppComponent {
    pageTile: string = 'Acme Product Management';
}

