import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';

@Component({
    selector: 'my-component',
    templateUrl: '/app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    myHeading = Config.MAIN_HEADING
    videos: Array<Video>

    constructor() {
        this.videos = [
            new Video(1, 'Angular 2 Tutorials', 'f8qBeaGe2S4', 'Angular 2 for Beginners - Tutorial 7 - Nested Components'),
            new Video(2, 'Angular 2 Tutorials', 'f8qBeaGe2S4', 'Angular 2 for Beginners - Tutorial 7 - Nested Components -- 2')
        ]
    }
}
