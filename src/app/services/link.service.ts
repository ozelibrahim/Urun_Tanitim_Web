import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, writeBatch } from '@angular/fire/firestore';
import { AddLink } from '../contracts/add-link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private fs:Firestore) { }

  getlink(){
   let linkCollection = collection(this.fs,'links');
   return collectionData(linkCollection,{idField:'id'});
  }
  async addLink(addLink: AddLink) {
    let linkCollection = collection(this.fs, 'links');
    try {
      // Convert AddLink object to a plain JavaScript object
      const linkData = Object.assign({}, addLink);

      await addDoc(linkCollection, linkData);
      console.log("kaydedildi");
    } catch (error) {
      console.log("hata", error);
    }
  }
  deleteLink(id: string) {
  let docRef = doc(this.fs, 'links/' + id);
  return deleteDoc(docRef)
    .then(() => {
      console.log("silindi");
    })
    .catch((err) => {
      console.error("deleteLink error:", err);
    });
}

async addRightAdvert(addLink: AddLink) {
  let linkCollection = collection(this.fs, 'rightAdvert');
  try {
    debugger;
    await this.deleteAllAdverts("rightAdvert");

    // Convert AddLink object to a plain JavaScript object
    const linkData = Object.assign({}, addLink);

    await addDoc(linkCollection, linkData);
    console.log("kaydedildi");
  } catch (error) {
    console.log("hata", error);
  }
}

async deleteAllAdverts(storeName:string) {
  const itemsRef = collection(this.fs, `${storeName}`);

  try {
    const snapshot = await getDocs(itemsRef);
    const batch = writeBatch(this.fs);

    snapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log("silindi");
  } catch (err) {
    console.error("delete error:", err);
  }
}

async addLeftAdvert(addLink: AddLink) {
  let linkCollection = collection(this.fs, 'leftAdvert');
  try {
    debugger;
    await this.deleteAllAdverts("leftAdvert");

    // Convert AddLink object to a plain JavaScript object
    const linkData = Object.assign({}, addLink);

    await addDoc(linkCollection, linkData);
    console.log("kaydedildi");
  } catch (error) {
    console.log("hata", error);
  }
}

getRightlink(){
  let linkCollection = collection(this.fs,'rightAdvert');
  return collectionData(linkCollection,{idField:'id'});
 }
getLeftlink(){
  let linkCollection = collection(this.fs,'leftAdvert');
  return collectionData(linkCollection,{idField:'id'});
 }
}


