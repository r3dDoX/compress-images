import imagemin from 'imagemin';
import imageminSvgo from 'imagemin-svgo';
import imageminMozjpeg from 'imagemin-mozjpeg';

await imagemin(['images/*.{jpg,svg}'], {
    destination: 'compressed',
    plugins: [
        imageminSvgo(),
        imageminMozjpeg({quality: 80})
    ]
});