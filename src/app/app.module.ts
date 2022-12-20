import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { UsersComponent } from './components/users/users.component';
import { CustomHttpInterceptor } from './interceptors/http-interceptor';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { DetailsPageComponent } from './components/details/details-page.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    SpinnerComponent,
    RouteNotFoundComponent,
    AddEditUserComponent,
    DetailsPageComponent,
   FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      maxOpened: 1,
      autoDismiss: true,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
