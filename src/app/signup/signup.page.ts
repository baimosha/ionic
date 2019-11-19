import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    private login = '';
    private password = '';
    private register: object;

    constructor() {
    }

    ngOnInit() {
    }

    registration() {

    }

}
