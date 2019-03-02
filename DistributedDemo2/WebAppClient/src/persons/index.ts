import {LogManager, View, autoinject} from "aurelia-framework";
import {RouteConfig, NavigationInstruction} from "aurelia-router";
import {PersonService} from "../services/person-service";
import {IPerson} from "../interfaces/IPerson";

export var log = LogManager.getLogger('app.persons.index');

@autoinject()
export class Home {
  
  private persons: IPerson[];

  constructor(private personService: PersonService){
    log.debug('constructor');
  }
  


  // ============ View LifeCycle events ==============
  created(owningView: View, myView: View){
    log.debug('created');
  }

  bind(bindingContext: Object, overrideContext: Object){
    log.debug('bind');

  }

  attached(){
    log.debug('attached');
    
    this.personService.fetchAll().then(jsonData => this.persons = jsonData)
  }


  detached(){
    log.debug('detached');

  }

  unbind(){
    log.debug('unbind');

  }


  // ============= Router Events =============
  canActivate(params: any, routerConfig: RouteConfig, navigationInstruction: NavigationInstruction){
    log.debug('canActivate');

  }

  activate(params: any, routerConfig: RouteConfig, navigationInstruction: NavigationInstruction){
    log.debug('activate');

  }

  canDeactivate(){
    log.debug('canDeactivate');

  }
  deactivate(){
    log.debug('deactivate');

  }
}
