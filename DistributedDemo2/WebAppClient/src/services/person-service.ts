import {LogManager, autoinject} from "aurelia-framework";
import {RouteConfig, NavigationInstruction} from "aurelia-router";
import {HttpClient} from "aurelia-fetch-client";
import {IPerson} from "interfaces/IPerson";

export var log = LogManager.getLogger('app.personService');

@autoinject
export class PersonService {

  constructor(private httpClient: HttpClient){
    log.debug('constructor');
  }
  
  fetchAll() : Promise<IPerson[]>{
    let url = "https://localhost:5001/api/persons";
    
    
    return this.httpClient.get(url, {cache: 'no-store'}
    ).then(response => {
        log.debug('response', response);
        return response.json();
      }
    ).then(jsonData => {
        log.debug('jsonData', jsonData);
        return jsonData;
      }
    ).catch( reason => {
      log.debug('catch reason', reason)
    })
  }
}
