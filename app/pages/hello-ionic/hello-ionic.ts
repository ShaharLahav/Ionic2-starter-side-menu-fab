import {Modal, NavController, NavParams, Page} from 'ionic-angular';
import {InputModalPage} from '../input-modal/input-modal.ts';


@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
    constructor(private nav:NavController) {
    }

    openModal() {
        let modal = Modal.create(InputModalPage);
        this.nav.present(modal);
    }
}
