import {Injectable} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoCropperService {
  public tempImage: ImageCroppedEvent = null;

  constructor() {
  }

  // getPhotoFromServer(): Observable<ImageCroppedEvent> { // Observable<string> |
  //   // if (this.tempImage === null) {
  //   //   console.log('return link');
  //   //   return of('https://via.placeholder.com/750x600');
  //   // } else {
  //   //   console.log('photo from get photo service:', this.tempImage);
  //   return of(this.tempImage);
  // }

// }
  sendPhotoToServer(photoEvent: ImageCroppedEvent) {
    console.log('photo was sent to server');
    this.tempImage = photoEvent;
  }
}
