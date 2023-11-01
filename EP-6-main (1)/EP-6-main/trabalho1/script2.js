const imageContainer = document.querySelector('.image-container');
        const overlay = document.querySelector('.overlay');

        imageContainer.addEventListener('mouseenter', () => {
            overlay.style.opacity = 1;
            imageContainer.querySelector('.image').src = 'imagem2.jpg';
        });

        imageContainer.addEventListener('mouseleave', () => {
            overlay.style.opacity = 0;
            imageContainer.querySelector('.image').src = 'imagem1.jpg';
        });