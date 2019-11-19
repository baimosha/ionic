import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../profile/profile.module').then(m => m.ProfilePageModule),
                        data: { preload: true }
                    }
                ],
            },
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule),
                        data: { preload: true }
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {}
