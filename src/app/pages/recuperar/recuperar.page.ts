import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  email : String;
  mensaje : String;

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
}
async notificar(em: HTMLInputElement)
{
  if(em.value == "")
  {
    this.mensaje = "falta el correo";
    const toast = await this.toastController.create({
      message : "Falta escribir el correo",
      duration: 2000
    })
    toast.present();
  }
  else
  {
    this.mensaje = "";
    const alert = await this.alertController.create({
      header : 'Felicidades',
      subHeader : 'Contraseña recuperada',
      message: '',
      buttons: ['ok'],
    });
    await alert.present();
    this.router.navigate(["/login"]);
  }
}

limpiar(em: HTMLInputElement, con: HTMLInputElement)
{
  em.value = "";
}
}  