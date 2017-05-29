import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'my-component',
    template: '<h1>{{myHeading}}</h1>'
})

export class AppComponent {
    myHeading = Config.MAIN_HEADING
}
