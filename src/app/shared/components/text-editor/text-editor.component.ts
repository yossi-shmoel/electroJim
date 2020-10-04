import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  public getOptions(): object {

    return {
      placeholder: 'I am an input!',
      charCounterCount: true
    };

  }

}
