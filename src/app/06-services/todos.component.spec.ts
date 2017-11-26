import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  }); // we are passing null because passing http would complicate the test environment. we will not be using http service anyway.

  it('should set todos property with the items returned from the array', () => {
    let todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ]);
    }); 

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });
// with spyOn, we can check if the method is called, we can change the implementation of the method in a class.(we can get the control of the method)
// firt argument is the object that we need to put the spy on.
// second argument is the name of the method in that object. 
// getTodos is the method with no parameters
    
    it('should call the server to save the changes when a new todo item is added', () => {
      let spy = spyOn(service, 'add').and.callFake(t => {
        return Observable.empty(); 
      });
      component.add();
      expect(spy).toHaveBeenCalled();
    });
    // to simulate data that is returned from the server
    it('should add the new todo returned from the server', () => {
      let todo = { id: 1 };
      let spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]))
      component.add();
      expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });
    // to simulate the error that is returned from the server.
    it('should set the message property if server returns an error when adding a new todo', () => {
      let error = 'error from the server';
      let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));
      component.add();
      expect(component.message).toBe(error);
    });
    it('should call the server to delete a todo item, if the user confirms', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      let spy = spyOn(service, 'delete').and.returnValue(Observable.empty())
      component.delete(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('should NOT call the server to delete a todo item, if the user confirms', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      let spy = spyOn(service, 'delete').and.returnValue(Observable.empty())
      component.delete(1);
      expect(spy).not.toHaveBeenCalledWith(1);
    });
});

//run ng test --code-coverage to see the test coverage of the code.