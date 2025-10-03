import { defineStore } from 'pinia'
import { ref } from "vue";
import { UserPhoto } from "@/interfaces";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const usePhotosStore = defineStore('photos', () => {
    const photos = ref<UserPhoto[]>([]);

    const addPhoto = (photo: UserPhoto) => {
        photos.value.push(photo);
    };

    const setPhotos = (photos: UserPhoto[]) => {
        photos.value = photos;
    }

    const deletePhoto = (photo: UserPhoto) => {
        photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);
    }

    return {
        photos,
        addPhoto,
        setPhotos,
        deletePhoto
    };
})