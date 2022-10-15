import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PreLoadService } from './service/preload.service';
// import { PostViewComponent } from './post/post-view/post-view.component';
// import { ProfileViewComponent } from './profile/profile-view/profile-view.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"profile",
    //component:ProfileViewComponent
    loadChildren:()=>import('./profile/profile.module').then(t=>t.ProfileModule),
    data:{preload:false}
  },
  {
    path:"post",
    //component:PostViewComponent
    loadChildren:()=>import('./post/post.module').then(t=>t.PostModule),
    data:{preload:true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreLoadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
