import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  @Input() title: string = 'Confirmación';
  @Input() message: string = '¿Estás seguro de continuar?';
  @Input() confirmText: string = 'Aceptar';
  @Input() cancelText: string = 'Cancelar';

  @Output() onConfirm = new EventEmitter<void>();

  private modal: any;

  open() {
    const modalElement = document.getElementById('genericConfirmModal');
    if (modalElement) {
      this.modal = new (window as any).bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  close() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  confirm() {
    this.onConfirm.emit();
    this.close();
  }
}
