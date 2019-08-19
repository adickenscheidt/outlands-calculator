import { aspects } from './../aspects';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Build } from '../build';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.scss']
})
export class BuildEditorComponent implements OnInit {
  private _build: Build;
  public get build(): Build {
    return this._build;
  }
  @Input()
  public set build(value: Build) {
    this._build = value;
    this.form = this.getFormGroup(value);
  }

  @Input()
  public builds: Build[];

  @Output()
  public buildSaved: EventEmitter<Build> = new EventEmitter<Build>();

  @Output()
  public newBuild: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public deleteBuild: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public getFormGroup(build: Build): FormGroup {
    return this.fb.group({
      id: !!build ? build.id : null,
      buildName: new FormControl(!!build ? build.buildName : '', [Validators.maxLength(30)]),
      str: new FormControl(!!build ? build.str : 0, [Validators.min(0), Validators.max(125)]),
      dex: new FormControl(!!build ? build.dex : 0, [Validators.min(0), Validators.max(125)]),
      int: new FormControl(!!build ? build.int : 0, [Validators.min(0), Validators.max(125)]),
      skills: !!build ? build.skills : []
    });
  }

  public saveClicked() {
    this.buildSaved.emit({ ...this.form.value });
  }

  public newBuildClicked() {
    this.newBuild.emit();
  }

  public cancelClicked() {
    this.form = this.getFormGroup(this._build);
  }

  public deleteBuildClicked() {
    this.deleteBuild.emit(this.build.id);
  }
}
