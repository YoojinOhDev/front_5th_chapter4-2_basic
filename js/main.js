function showTopBar(){
    let country = "France";
    let vat = 20;
    setTimeout(() => {
        document.querySelector("section.country-bar")
        .innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`
        document.querySelector("section.country-bar")
        .classList.remove('hidden')
    }, 1000);
}

// 페이지 로드가 완료된 후 고화질 이미지 로딩
window.onload = function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazySources = document.querySelectorAll('source[data-srcset]');

    // 이미지 스타일 초기화
    lazyImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
    });

    function loadImage(img) {
        if (img.dataset.src) {
            const tempImage = new Image();
            tempImage.onload = function() {
                img.src = img.dataset.src;
                // 이미지 로드 완료 후 부드럽게 표시
                requestAnimationFrame(() => {
                    img.style.opacity = '1';
                    img.classList.add('loaded');
                });
            };
            tempImage.src = img.dataset.src;
        }
    }

    function loadSource(source) {
        if (source.dataset.srcset) {
            source.srcset = source.dataset.srcset;
        }
    }

    // 모든 이미지 로드
    lazyImages.forEach(img => {
        const picture = img.parentElement;
        const sources = picture.querySelectorAll('source[data-srcset]');
        sources.forEach(loadSource);
        loadImage(img);
    });
};

showTopBar();




