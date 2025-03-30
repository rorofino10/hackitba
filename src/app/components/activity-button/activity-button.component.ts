import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';

@Component({
  selector: 'app-activity-button',
  imports: [],
  templateUrl: './activity-button.component.html',
  styleUrl: './activity-button.component.css',
})
export class ActivityButtonComponent {
  @Input({ required: true }) imgPath!: string;
  @Output() click = new EventEmitter<'clicked'>();

  onClick() {
    this.click.emit('clicked');
  }
}
