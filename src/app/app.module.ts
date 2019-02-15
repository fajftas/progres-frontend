import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes} from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainingComponent } from './training/training.component';
import { HabitsComponent } from './habits/habits.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'habits',
    component: HabitsComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BooksComponent,
    ProfileComponent,
    NotFoundComponent,
    TrainingComponent,
    HabitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
