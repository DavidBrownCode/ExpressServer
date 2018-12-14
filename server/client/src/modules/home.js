/*export class home {
    constructor(){
        this.message = "Home Page";
    }
}*/

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(Router)
export class Home {
    constructor(router) {
        this.router = router;
            this.message = 'Home';
    }
    login(){
        this.router.navigate('users');
    }
}

//The navigate method of the Router object to navigate to a view. list
//is the second route:
{ route: 'users'; moduleId: './modules/users'; name: 'Users' }

/*<template>
<h1>${message}</h1>

</template>*/