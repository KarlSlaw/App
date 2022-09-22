import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : String;
  password : String;
  mensaje : String;

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
}
async notificar(em: HTMLInputElement, con: HTMLInputElement)
{
  if(em.value == "")
  {
    this.mensaje = "falta el correo";
    const toast = await this.toastController.create({
      message : "Ingrese un correo",
      duration: 2000
    })
    toast.present();
  }
  else if(con.value == "")
  {
    this.mensaje = "falta la contraseña";
    const toast = await this.toastController.create({
      message : "Ingrese una contraseña",
      duration: 2000
    })
    toast.present();
  }
  else if(con.value == "")
  {
    this.mensaje = "Falta password";
  }
  else
  {
    this.mensaje = "";
    const alert = await this.alertController.create({
      header : 'Felicidades',
      subHeader : 'Ingresaste con exito',
      message: '',
      buttons: ['ok'],
      
    });
    await alert.present();
    this.router.navigate(["/inicio"]);
  }
}
  limpiar(em: HTMLInputElement, con: HTMLInputElement)
  {
    em.value = "";
    con.value = "";
  }
}
