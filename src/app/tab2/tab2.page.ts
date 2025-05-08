import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public photoService:PhotoService) {}
    addPhotoToGallery(){
      this.photoService.addNewToGallery();

    
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async addPhotoWithHalfQuality() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 50
    });

    const savedImageFile = await this.photoService['savePicture'](capturedPhoto); // Acceso directo (si es privado)
    this.photoService.photos.unshift(savedImageFile);

    // Guardar en Preferences
    await Preferences.set({
      key: 'photos',
      value: JSON.stringify(this.photoService.photos),
    });
  }
}
