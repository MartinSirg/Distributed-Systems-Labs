import {PLATFORM, LogManager} from "aurelia-framework";
import {RouterConfiguration, Router} from "aurelia-router";

export var log = LogManager.getLogger('MainRouter');

export class MainRouter {

  public router: Router;

  constructor(){
    log.debug('constructor');
  }

  configureRouter(config: RouterConfiguration, router: Router):void {
    log.debug('configureRouter');

    this.router = router;
    config.title = "Contact App - Aurelia";
    config.map(
      [
        {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home'), nav: true, title: 'Home'},
        //persons
        {route: ['persons', 'persons/index'], name: 'personsIndex', moduleId: PLATFORM.moduleName('persons/index'), nav: true, title: 'Persons'},
        {route: ['persons/create'], name: 'personsCreate', moduleId: PLATFORM.moduleName('persons/create'), nav: false, title: 'Persons - Create'}
        //contacts
        // {route: ['contacts', 'contacts/index'], name: 'contactsIndex', moduleId: PLATFORM.moduleName('contacts/index'), nav: true, title: 'Contacts'}
        //types
      ]
    );

  }

}
