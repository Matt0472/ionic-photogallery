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

    return {
        photos,
        addPhoto,
        setPhotos
    };
})