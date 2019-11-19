import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import axios from 'axios';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private username = '';
    private password = '';
    public token = '';
    private user: object;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    login() {
        if (this.username.toString().length > 0 && this.password.toString().length > 0) {
            axios.post('http://studentapi.myknitu.ru/auth/', {
                'login': this.username,
                'password': this.password
            }).then( res => {

                if (res.data.status) {
                    console.log('get token', res.data)
                    this.authService.login(res.data.token);
                }
            });
        }
    }



}
