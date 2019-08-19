import { Skill } from './../skills';
import { aspects } from './../aspects';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Build } from '../build';
import { skills } from '../skills';
import { Observable, from, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

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

  public availableSkills$ = of(skills);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form
      .get('skillToAdd')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe(s => this.skillSelected(s));
  }

  public getFormGroup(build: Build): FormGroup {
    return this.fb.group({
      id: !!build ? build.id : null,
      buildName: new FormControl(!!build ? build.buildName : '', [Validators.maxLength(30)]),
      str: new FormControl(!!build ? build.str : 0, [Validators.min(0), Validators.max(125)]),
      dex: new FormControl(!!build ? build.dex : 0, [Validators.min(0), Validators.max(125)]),
      int: new FormControl(!!build ? build.int : 0, [Validators.min(0), Validators.max(125)]),
      skills: this.fb.array(this.getFormGroupSkillArray(build.skills)),
      skillToAdd: null
    });
  }

  public getFormGroupSkillArray(arrSkills: { skillName: string; value: number }[]): FormGroup[] {
    if (!arrSkills) {
      return [];
    }
    return arrSkills.map(s => this.fb.group(s));
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

  public skillSelected(skillName: string) {
    const skillArr = this.form.get('skills') as FormArray;
    skillArr.push(this.fb.group({ skillName, value: 0 }));
  }
}
