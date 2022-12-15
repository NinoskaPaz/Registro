import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User} from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth,) {

     }

  async register( email:string, password:string){ 
    try {
      const user = await createUserWithEmailAndPassword(this.auth,email,password);
      return user;
    } catch (error) {
      return null;
    }
 }

  async login(email:string,password:string){ 
    try {
      const user = await signInWithEmailAndPassword(this.auth,email,password);
      return user;
    } catch (error) {
      return null;
    }
  }

 // async registarUser(datos: UserI) {
 //   try {
 //  const  user = await createUserWithEmailAndPassword(datos.email, datos.password);
 //  return user;
 // } catch (error) {
 //   return null;
 //}

  logout(){
    return signOut(this.auth);
  }
}
