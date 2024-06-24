import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore,collection,addDoc } from "@angular/fire/firestore";
import { LinkService } from 'src/app/services/link.service';
import { AddLink } from 'src/app/contracts/add-link';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  selectedImage: File | null = null;
  base64Image: string | null = null;
  frm:FormGroup;
constructor(private formbuilder:FormBuilder,private linkService:LinkService){
  
}
  ngOnInit(){
    this.getLinks();
  }
links:any[]=[];
  getLinks(){
    this.linkService.getlink().subscribe((res)=>{
      this.links =res;
      console.log(res);
      
    })
  }

  addData(link:string){
    const addLink:AddLink = new AddLink();
    addLink.link = link;
    addLink.filebyte = this.base64Image;
      // console.log(f);
      this.linkService.addLink(addLink).then((res)=>{
        this.getLinks();
      })
      
  }
  deleteLink(id:string){
    debugger;
    this.linkService.deleteLink(id).then((res)=>{
      this.getLinks();
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
