import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-no-comp-found',
  templateUrl: './no-comp-found.component.html',
  styleUrls: ['./no-comp-found.component.scss']
})
export class NoCompFoundComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;

  // constructor() { }
  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
    };
  }

  ngOnInit(): void {}
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
