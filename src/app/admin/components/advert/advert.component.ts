import { Component, OnInit } from '@angular/core';
import { AddLink } from 'src/app/contracts/add-link';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  selectedImage: File | null = null;
  base64Image: string | null = null;
  constructor(private linkService:LinkService){
  
  }
  ngOnInit() {

  }

  async addRightAdvert(link:string,description:string,indirim:string){

    const addLink:AddLink = new AddLink();
    addLink.link = link;
    addLink.filebyte = this.base64Image;
    addLink.description =description;
    addLink.indirim = indirim;
      // console.log(f);
      await this.linkService.addRightAdvert(addLink).then((res)=>{
        alert("Sağ Menüye Reklam Eklendi.");

      })
      
  }

  async addLeftAdvert(link:string,description:string,indirim:string){

    const addLink:AddLink = new AddLink();
    addLink.link = link;
    addLink.filebyte = this.base64Image;
    addLink.description =description;
    addLink.indirim = indirim;
      // console.log(f);
      await this.linkService.addLeftAdvert(addLink).then((res)=>{
        alert("Sol Menüye Reklam Eklendi.");
      })
      
  }

  onFileSelected(event: any): void {
    const inputElement = event.target;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];

      this.convertToBase64(this.selectedImage);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.base64Image = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }

  decodeBase64(base64String: string | undefined): string {
    if (base64String === undefined) {
      return '';
    }
  
    // Check if the data is an image (any format)
    const isImage = base64String.startsWith('data:image/');
  
    if (isImage) {
      return base64String;  // Return as is, assuming it's already in the correct format
    } else {
      // Handle other cases or throw an error if needed
      return ''; 
    }
  }

  isImage(base64String: string | undefined): boolean {
    return base64String !== undefined && base64String.includes('data:image/');
  }

}
