import {
    appTemplate
} from './app.template';
import { AppModel } from './app.model';

export const AppComponent = {

    init() {
        this.appElement = document.querySelector('#app');
        this.initEvents();
        this.render();
    },

    initEvents() {
        this.appElement.addEventListener('click', event => {
            if (event.target.className === 'btn-todo') {
                import( /* webpackChunkName: "todo" */ './todo/todo.module')
                    .then(lazyModule => {
                        lazyModule.TodoModule.init();
                    })
                    .catch(error => 'An error occurred while loading Module');
            }
            // window.location.href = window.location.origin + '/#/todo';
        });
    },

    render() {
        this.appElement.innerHTML = appTemplate(AppModel);
    }
};