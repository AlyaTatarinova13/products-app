import {Injectable} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Injectable({
  providedIn: 'root'
})
export class PhotoCropperService {

  constructor() {
  }

  sendPhotoToServer(photoEvent: ImageCroppedEvent) {
    console.log('photo was sent to the server from service:', photoEvent);
  }
}
