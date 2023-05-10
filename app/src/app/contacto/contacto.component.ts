import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public nombre:string = ""
  public apellido:string = ""
  public correo:string = ""
  public telefono:string = ""
  public empresa:string = ""
  public contenido:string = ""
  constructor(private emailService: EmailService) {
  }

  send():any{
    Swal.fire(
      'Solicitud enviada!',
      'Nos pondremos en contacto contigo al a brevedad posible!',
      'success'
    )

    this.emailService.sendEmail(
      this.correo,
      this.nombre,
      this.apellido,
      this.telefono,
      this.empresa,
      this.contenido
    ).subscribe()

    this.nombre = ""
    this.apellido = ""
    this.correo = ""
    this.telefono = ""
    this.empresa = ""
    this.contenido = ""
  }

}
