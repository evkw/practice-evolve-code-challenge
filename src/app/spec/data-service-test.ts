export class TestDataService {
    add = jasmine.createSpy('add');
    delete = jasmine.createSpy('delete');
    getAll = jasmine.createSpy('getAll');
    getById = jasmine.createSpy('getById');
    getWithQuery = jasmine.createSpy('getWithQuery');
    update = jasmine.createSpy('update');
  
    getService() {
      return this;
    }
  }

  