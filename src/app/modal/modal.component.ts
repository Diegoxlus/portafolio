import { Component } from '@angular/core';
import { MDBModalRef} from 'angular-bootstrap-md';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  content: any;


  constructor(public modalRef: MDBModalRef) {}

}
