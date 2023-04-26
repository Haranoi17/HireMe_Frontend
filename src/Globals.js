const noImageUrl = "https://heuft.com/upload/image/400x267/no_image_placeholder.png"

export default function getImageIfNoSet(imageUrl){
    return imageUrl ? imageUrl : noImageUrl;
}