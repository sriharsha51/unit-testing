import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder())
  });
  
// test to check whether the component is getting initialized with name and email form controls.
  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy(); // toBe(true) or toBeTruthy() is same.
    expect(component.form.contains('email')).toBeTruthy();
  });
// in this case we are not going to have arrange, act and assert as we are verifying the initial state of the component.
  it('should make the name control required', () => {
    let control = component.form.get('name')
    control.setValue(''); // setting the value of the inpupt to empty string
    expect(control.valid).toBeFalsy(); // as the input is required we should get falsy.
  });
});