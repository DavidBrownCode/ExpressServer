//Old Code
/*export class user {
    constructor(){
        this.message = "User";
    }
}*/

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(Router)
export class Home {
    constructor(router) {
        this.router = router;
            this.message = 'Users';
    }
    logout(){
        this.router.navigate('home');
    }
}
{ route: 'home'; moduleId: './modules/home'; name: 'Home' }
