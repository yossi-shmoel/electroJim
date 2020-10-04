import { FroalaEditor } from 'froala-editor';
import { Component } from '@angular/core';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'electro-jim';

  public getOptions(): object {

    return {
      placeholder: 'I am an input!',
      charCounterCount: true
    };

  }
}
