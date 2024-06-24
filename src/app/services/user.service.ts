import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:Firestore) { }

  async login(userName:string,password:string):Promise<boolean>{


    try {
      // Firestore koleksiyonunu al
      const linkCollection = collection(this.fs, 'user');

      // Kullanıcı adına göre sorgu oluştur
      const q = query(linkCollection, where('userName', '==', userName));

      // Sorguyu çalıştır ve verileri al
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as { password: string } }));

      // Kullanıcı bulunamazsa false döndür
      if (users.length === 0) {
        return false;
      }

      // Kullanıcı parolasını kontrol et
      const foundUser = users[0];
      if (foundUser.password === password) {
        // Kullanıcı adı ve parola eşleşiyorsa true döndür
        return true;
      } else {
        // Kullanıcı adı doğru, ancak parola eşleşmiyorsa false döndür
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
    
   }

}
