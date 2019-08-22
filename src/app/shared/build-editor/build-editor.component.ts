import { Skill } from './../skills';
import { aspects } from './../aspects';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Build } from '../build';
import { skills } from '../skills';
import { Observable, from, of, BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, tap, filter, map, skip, debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { saveBuild, cancelBuildEdit, activeBuildChanged } from 'src/app/store/actions/build.actions';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.scss']
})
export class BuildEditorComponent implements OnInit {
  public activeUnsavedBuild$ = this.store.select(s => s.build.activeUnsavedBuild);

  public form: FormGroup;
  public skillsToAddSubscription: Subscription;
  public buildChangedSubscription: Subscription;

  public get skillsControl() {
    return (this.form.get('skills') as FormArray).controls;
  }

  public availableSkills$: BehaviorSubject<Skill[]>;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit() {
    this.activeUnsavedBuild$
      // .pipe(distinctUntilChanged((bOld, bNew) => bOld.id === bNew.id))
      .subscribe(s => this.unsavedBuildChanged(s));

    this.availableSkills$ = new BehaviorSubject(this.getAvailableSkills());
  }

  private resubscribeToForm() {
    this.skillsToAddSubscription = this.form
      .get('skillToAdd')
      .valueChanges.pipe(filter(v => v != null))
      .subscribe(s => this.skillSelected(s));

    this.buildChangedSubscription = this.form.valueChanges
      .pipe(
        debounceTime(2000)
      )
      .subscribe(b => this.store.dispatch(activeBuildChanged(b)));
  }

  public getFormGroup(build: Build): FormGroup {
    return this.fb.group({
      id: build.id,
      buildName: new FormControl(build.buildName, [Validators.maxLength(30)]),
      str: new FormControl(build.str, [Validators.min(0), Validators.max(125)]),
      dex: new FormControl(build.dex, [Validators.min(0), Validators.max(125)]),
      int: new FormControl(build.int, [Validators.min(0), Validators.max(125)]),
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
    this.store.dispatch(saveBuild());
  }

  public cancelClicked() {
    this.store.dispatch(cancelBuildEdit());
  }

  public skillSelected(skillName: string) {
    const skillArr = this.form.get('skills') as FormArray;
    skillArr.push(this.fb.group({ skillName, value: 0 }, [Validators.min(0), Validators.max(120)]));
    this.form.get('skillToAdd').setValue(null);
    this.updateAvailableSkills();
  }

  public removeSkill(skillName: string) {
    const skillArr = this.form.get('skills') as FormArray;
    const index = skillArr.controls.indexOf(skillArr.controls.find(c => c.get('skillName').value === skillName));
    if (index !== -1) {
      skillArr.removeAt(index);
      this.updateAvailableSkills();
      this.form.get('skillToAdd').setValue(null);
    }
  }

  public getDisplayName(skillName: string) {
    return skills.find(s => s.skillName === skillName).displayName;
  }

  private updateAvailableSkills() {
    this.availableSkills$.next(this.getAvailableSkills());
  }

  private getAvailableSkills(): Skill[] {
    const skillArr = this.form.get('skills');
    return skills.filter(skill => skillArr.value.find((s: Skill) => s.skillName === skill.skillName) == null);
  }

  private unsavedBuildChanged(newBuild: Build) {
    this.form = this.getFormGroup(newBuild);

    if (!!this.skillsToAddSubscription) {
      this.skillsToAddSubscription.unsubscribe();
    }
    if (!!this.buildChangedSubscription) {
      this.buildChangedSubscription.unsubscribe();
    }
    this.resubscribeToForm();
  }
}
