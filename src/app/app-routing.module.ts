import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './service/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomePageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupPageModule)
    },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'message-room', loadChildren: './message-room/message-room.module#MessageRoomPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
