import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { SharedModule } from '../shared/shared.module';

// frameworks


@NgModule({
  imports: [
    CommonModule,
    SharedModule,

  ],
  declarations: [ArticleComponent, WelcomeComponent]
})
export class ArticleModule { }
