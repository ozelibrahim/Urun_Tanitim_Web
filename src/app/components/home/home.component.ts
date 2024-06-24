import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private linkService:LinkService) {
    
  }
  ngOnInit(){
    this.getLinks();
    this.getRightLink();
    this.getLeftLink();
    console.log(this.rightLink);
    

  }
  links:any[]=[];
  rightLink:any[]=[];
  leftLink:any[]=[];


  getLinks(){
    this.linkService.getlink().subscribe((res)=>{
      this.links =res;
      console.log(res);
      
    })
  }
  getRightLink(){
    this.linkService.getRightlink().subscribe((res)=>{
      this.rightLink =res;
      
    })
  }
  getLeftLink(){
    this.linkService.getLeftlink().subscribe((res)=>{
      this.leftLink =res;
      
    })
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

  addProtocol(url: string): string {
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      return 'https://' + url;
    }
    return url;
  }

}
