import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      
      email: 'camilooliveiradev@gmail.com',
      name: 'Matheus Camilo',
      wathsAppUrl: 'https://api.whatsapp.com/send?phone=5521992593803&text=Oi,%20estou%20vindo%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
      linkediInUrl: 'https://www.linkedin.com/in/matheus-camilo-034426151/'
    }

    return profile;
  }

}
