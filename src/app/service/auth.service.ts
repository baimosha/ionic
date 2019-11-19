import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ToastController, Platform} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authState = new BehaviorSubject(false);

    constructor(
        private storage: Storage,
        private toastController: ToastController,
        private router: Router,
    ) {
    }

    token = ""

    login(token) {
        console.log(token)
        this.storage.set('tok', token).then((res) => {
            this.router.navigate(['home']);
            this.authState.next(true);
        });
    }

    ifLoggedIn() {
        this.storage.get('tok').then((res) => {
            if (res) {
                this.authState.next(true);
            }
        });
    }

    logout() {
        this.storage.remove('tok').then((res) => {
            if (res) {
                this.authState.next(false);
            }
            this.router.navigate(['login']);
        });
    }




    isAuthecticated() {
        return this.authState.value;
    }
}
