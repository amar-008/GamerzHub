import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  msg:string='';
	constructor(private util:NodeUtilityService){}

  onSubmit(form: any) {
    this.util
      .update(form.value.username, form.value.password)
      .subscribe((data) => {
        if (data.status) this.msg = data.message;
      });
  }

}
