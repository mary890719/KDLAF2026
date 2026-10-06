function toggleMenu() {
    const nav = document.getElementById("nav");
    const icon = document.querySelector(".hamburger i");
    const header = document.querySelector("header");
    if (!nav || !icon || !header) return;
    nav.classList.toggle("active");
    header.classList.toggle("menu-open");
    icon.classList.toggle("fa-bars", !nav.classList.contains("active"));
    icon.classList.toggle("fa-times", nav.classList.contains("active"));
}

window.onscroll = function () {
    const button = document.getElementById("backToTop");
    if (!button) return;
    button.classList.toggle("show", document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
};

const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// 2026 展場作品：編號與地圖 Marker 固定一一對應。
const modalDataList = {
    1: {
        artistZh: "王福瑞", artistEn: "Fujui Wang", artistImage: "images/artist/work-1.png",
        artistBioZh: `王福瑞為台灣重要聲音藝術與數位藝術家、策展人。1993年創立台灣首個實驗音樂廠牌及刊物《Noise》，長期推動聲音藝術發展，並參與「異響BIAS」聲音藝術展與台北數位藝術獎。現任國立臺北藝術大學新媒體藝術學系助理教授，曾策劃多場國內外展演。作品曾於威尼斯雙年展、柏林Transmediale、德國ZKM、林茲電子藝術中心及紐約皇后美術館等展出。2015年與盧藝成立「響相工作室」，持續推動聲音藝術展演與工作坊。`,
        artistBioEn: `Fujui Wang is a prominent Taiwanese sound and digital artist and curator. In 1993, he founded Noise, Taiwan’s first experimental music label and publication, and has since played an active role in the development of sound art in Taiwan, including his involvement in the BIAS Sound Art Exhibition and the Taipei Digital Art Awards. He is currently an Assistant Professor in the Department of New Media Art at Taipei National University of the Arts and has curated numerous exhibitions and performances in Taiwan and abroad. His work has been presented at the Venice Biennale, transmediale in Berlin, ZKM in Germany, Ars Electronica in Linz, and the Queens Museum in New York. In 2015, he co-founded Soundwatch Studio with Yi Lu, continuing to promote sound art through exhibitions, performances, and workshops.`,
        titleZh: "動聲泡", titleEn: "Vibrating Sound Bulb", year: "2024",
        mediumZh: "振動燈泡, 客製電子裝置", mediumEn: "Vibrating lamps, Custom-made electronics",
        descriptionZh: `細細的燈絲，因電流的變化，微微的振動。當電流變大燈絲拍打著透明的玻璃管壁，彈動的叮叮響聲此起彼落。透過電流的變化，燈絲不僅產生光，同時也震動製造出獨特的聲音。燈絲的物理特性與聲音結合的振動聲光燈泡，將光、聲、電等元素結合在一起，形成一種動態的獨特感官體驗。`,
        descriptionEn: `Whirling Sound uses a multi-channel installation of circular frames to create an immersive sound space filled with dynamic soundscapes. The sound spectrum is constantly transforming, with the length of sound fragments continuously changing. The sound reverberates, reflects, and interacts within the space, leading listeners into a deep meditative state.`,
        images: ["images/works/1-1.png", "images/works/1-2.png", "images/works/1-3.png"]
    },
    2: {
        artistZh: "郭展良", artistEn: "Chan-Liang  Kuo", artistImage: "images/artist/work-2.png",
        artistBioZh: `專注於聲光裝置創作，關注聲音、光線與空間在自然環境中的交互關係。透過科技與藝術的結合，探索人類感知與周遭環境之間的微妙連結。`,
        artistBioEn: `Focuses on sound and light installation art, exploring the interactions between sound, light, and space within natural environments. Through the integration of technology and art, the work investigates the subtle connections between human perception and the surrounding world.`,
        titleZh: "隙語", titleEn: "Whispers of the Gap", year: "2026", mediumZh: "鋁 / LED", mediumEn: "Aluminum / LED",
        descriptionZh: `《隙語》作品靈感來自城市間建築交錯所形成的縫隙光源。作品放大這些日常中容易被忽略的線條；觀者在行走、停留與轉換視角的過程中，感知光的出現與消退。縫隙不再只是空間的殘餘，而是一個連結身體、視線與環境的感知界面。`,
        descriptionEn: `Inspired by the streams of light filtered through the interstitial spaces of intersecting city buildings, Whispers of the Gap amplifies the subtle linear forms often overlooked in daily life. As viewers move, pause, and shift their perspective, they experience the emergence and fading of light. The gap is no longer merely a spatial residue, but a sensory interface connecting the body, line of sight, and environment.`,
        images: ["images/works/2-1.png"]
    },
    3: {
        artistZh: "Marc Vilanova", artistEn: "Marc Vilanova", artistImage: "images/artist/work-3.png",
        artistBioZh: `Marc Vilanova 是橫跨藝術、科學與科技的聲音／視覺藝術家，創作涵蓋聲音／光線雕塑、裝置與表演，常與舞蹈、劇場及動態影像合作。曾獲 Headlands Center for the Arts（2020）、Bemis Center（2019）、KARA Award（2018）等駐村與獎項，作品於亞洲、美洲及歐洲多國藝術節展出。他亦是教育者，曾任東京藝術大學等校客座教授，教授跨領域創作與現場電子音樂。`,
        artistBioEn: `Marc Vilanova is a sound and visual artist whose work spans art, science, and technology. His practice includes sound/light sculptures, installations, and performances, often in collaboration with dance, theatre, and moving images. He has received grants and residencies including the Headlands Center for the Arts (2020), Bemis Center (2019), and KARA Award (2018), and his work has been presented at festivals across Asia, the Americas, and Europe. He is also an educator, having served as a guest professor at Tokyo University of the Arts and other institutions, teaching transdisciplinary creation and live electronics.`,
        titleZh: "Cascade", titleEn: "Cascade", year: "",
        mediumZh: "多聲道音訊裝置：揚聲器單體、導光光纖、雷射、擴大機、音訊介面、3D列印模組、客製化PWM-DMX控制板、木結構、客製軟體",
        mediumEn: "Multi-channel sound, speaker cones, light-diffusing optic fiber, lasers, amplifiers, audio interfaces, 3D printed modules, custom PWM-DMX boards, wood, custom software",
        descriptionZh: `瀑布會發出對特定候鳥導航至關重要的次聲波，工業噪音污染正威脅著遷徙。《Cascade》以無法發出如此低頻的小型揚聲器，重現各地瀑布的次聲波錄音；揚聲器的震動啟動一條光纖，讓聲音以「墜落」的方式呈現，形成將聲波視覺化的光之簾幕，挑戰人類的感知能力，去中心化人類作為「萬物尺度」的位置。震動可被看見、感受與觸摸，帶來強調物種間連結的多重感官體驗。光纖照亮觀者所在之處，提醒我們保護自然中常被忽視的元素。`,
        descriptionEn: `Waterfalls emit infrasonic frequencies vital for the navigation of certain birds, which use them as a compass during their migrations. Recently, noise pollution from industrialization has threatened this journey. Cascade attempts to reproduce the infrasonic recordings of various waterfalls using small speakers incapable of emitting such low frequencies. However, their vibrations activate an optical fiber through which the sound "falls," creating a curtain of light that visualizes the sound waves, offering an alternative form of listening. This challenges human auditory and perceptual capabilities, decentering our position as "the measure of all things." Such vibration can be seen, felt, and touched with the skin, providing a multisensory experience that emphasizes interspecies connections through "feeling with" others and the body. The fibers of Cascade illuminate the viewer's position, reminding us of the critical importance of preserving the often unseen elements of nature.\nThis work was partially realized through the European Media Art Platform residency program at gnration, with support from the Creative Europe Culture Programme of the European Union, Avatar Center, and the Institut Ramon Llull.`,
        images: ["images/works/3-1.png", "images/works/3-2.png", "images/works/3-3.png", "images/works/3-4.png"]
    },
    4: {
        artistZh: "Jin Lee", artistEn: "Jin Lee", artistImage: "images/artist/work-4.png",
        artistBioZh: `Jin Lee 是一位以柏林為據點的媒體藝術家與藝術技術人員，運用運算系統與電子技術創造互動環境。其創作探索秩序與混沌之間的邊界，揭示動能與數位系統中浮現的行為模式。他從自然與科技中汲取靈感，將複雜的模式轉化為感官經驗，其作品曾於國際多地展出，模糊了數位與有機之間的界線。`,
        artistBioEn: `Jin Lee is a Berlin-based media artist and art technician who creates interactive environments using computational systems and electronics. His work explores the boundary between order and chaos, revealing emergent behaviors within kinetic and digital systems. Drawing from nature and technology, he translates complex patterns into sensory experiences. His internationally-exhibited installations blur the line between the\ndigital and organic.`,
        titleZh: "Liminal Ring", titleEn: "Liminal Ring", year: "2023",
        mediumZh: "動能空氣裝置（風扇陣列、霧化系統、程式控制）", mediumEn: "Kinetic air installation (fan array, fog system, custom control software)",
        descriptionZh: `Liminal Ring呈現人類試圖掌控自然的執念，同時揭露這種介入的侷限。作品透過將層流——一種受控、具方向性的氣流——引入原本混沌不定的自然環境中，探索確定與不確定之間的邊界。這種對比揭示了人工科技所強加的秩序，與自然系統內在混沌複雜性之間的張力。`,
        descriptionEn: `Liminal Ring visualizes humanity's obsession with controlling nature, while revealing the limitations of such interventions. The artwork explores the boundary between certainty and uncertainty by introducing laminar flow—a controlled, directional flow—into a naturally turbulent environment. This contrast exposes the tension between order imposed by human technology and the chaotic complexity inherent in natural systems.\nLiminal Ring was produced with the support of ZER01NE (2023) and Seoul Foundation for Arts and Culture (2024).`,
        images: ["images/works/4-1.png"]
    }
};

let currentImageIndex = 0;
let currentModalId = null;
let carouselInterval = null;

function formatTextBlocks(zh, en) {
    return `${zh ? `<p lang="zh-TW">${zh.replace(/\n/g, "<br>")}</p>` : ""}${en ? `<p lang="en">${en.replace(/\n/g, "<br>")}</p>` : ""}`;
}

function bilingualLabel(zh, en, separator = "｜") {
    if (!zh) return en || "";
    return !en || zh === en ? zh : `${zh}${separator}${en}`;
}

function showInfo(id) {
    const data = modalDataList[id];
    const infoDisplay = document.getElementById("infoDisplay");
    if (!data || !infoDisplay) return;
    clearInterval(carouselInterval);
    carouselInterval = null;
    currentModalId = id;
    currentImageIndex = 0;
    infoDisplay.style.display = "block";
    const carousel = infoDisplay.querySelector(".carousel");
    const infoImage = document.getElementById("infoImage");
    if (data.images.length) {
        carousel.style.display = "flex";
        infoImage.style.display = "block";
        createInfoDots(data.images);
        showInfoImage(id, 0);
        if (data.images.length > 1) resetInfoCarouselInterval();
    } else {
        carousel.style.display = "none";
        infoImage.removeAttribute("src");
        infoImage.style.display = "none";
        document.getElementById("infoDots").innerHTML = "";
    }
    document.getElementById("infoTitle").textContent = `《${bilingualLabel(data.titleZh, data.titleEn)}》`;
    document.getElementById("infoArtist").textContent = bilingualLabel(data.artistZh, data.artistEn);
    document.getElementById("infoMeta").textContent = [data.year, data.mediumZh, data.mediumEn].filter(Boolean).join("｜");
    document.getElementById("infoText").innerHTML = formatTextBlocks(data.descriptionZh, data.descriptionEn);
    const artistImage = document.getElementById("artistImage");
    if (data.artistImage) {
        artistImage.src = data.artistImage;
        artistImage.alt = bilingualLabel(data.artistZh, data.artistEn, " ");
        artistImage.style.display = "block";
    } else {
        artistImage.removeAttribute("src");
        artistImage.style.display = "none";
    }
    document.getElementById("artistName").innerHTML = [data.artistZh, data.artistEn].filter(Boolean).join("<br>");
    document.getElementById("artistBioText").innerHTML = formatTextBlocks(data.artistBioZh, data.artistBioEn);
}

function showInfoImage(id, index) {
    const data = modalDataList[id];
    if (!data || !data.images[index]) return;
    const image = document.getElementById("infoImage");
    image.src = data.images[index];
    image.alt = bilingualLabel(data.titleZh, data.titleEn, " ");
    document.querySelectorAll("#infoDots .dot").forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function createInfoDots(images) {
    const container = document.getElementById("infoDots");
    container.innerHTML = "";
    container.style.display = images.length > 1 ? "flex" : "none";
    if (images.length <= 1) return;
    images.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "dot";
        dot.setAttribute("aria-label", `切換至第 ${index + 1} 張作品圖片`);
        dot.addEventListener("click", () => {
            currentImageIndex = index;
            showInfoImage(currentModalId, index);
            resetInfoCarouselInterval();
        });
        container.appendChild(dot);
    });
}

function resetInfoCarouselInterval() {
    clearInterval(carouselInterval);
    const data = modalDataList[currentModalId];
    if (data && data.images.length > 1) carouselInterval = setInterval(nextInfoImage, 3000);
}

function nextInfoImage() {
    const data = modalDataList[currentModalId];
    if (!data || data.images.length <= 1) return;
    currentImageIndex = (currentImageIndex + 1) % data.images.length;
    showInfoImage(currentModalId, currentImageIndex);
}

Object.keys(modalDataList).forEach((id) => {
    const marker = document.getElementById(`point${id}`);
    if (marker) marker.addEventListener("click", () => showInfo(Number(id)));
});

// Performance Gallery：1 張單圖、2 張雙欄、3 張以上主圖加縮圖。
document.querySelectorAll(".performance-gallery").forEach((gallery) => {
    const images = gallery.dataset.images.split("|").filter(Boolean);
    const galleryLayout = gallery.dataset.galleryLayout || "";
    const credit = gallery.dataset.credit || "";
    const title = gallery.dataset.title || "演出圖片";
    if (!images.length) return;
    if (images.length === 1) {
        gallery.classList.add("gallery-single");
        gallery.innerHTML = `<img src="${images[0]}" alt="${title}">`;
        return;
    }
    if (images.length === 2 && galleryLayout !== "multiple") {
        gallery.classList.add("gallery-dual");
        gallery.innerHTML = images.map((src, i) => `<img src="${src}" alt="${title} ${i + 1}">`).join("");
        return;
    }
    gallery.classList.add("gallery-multiple");
    gallery.innerHTML = `<img class="gallery-main-image" src="${images[0]}" alt="${title} 1"><div class="gallery-thumbnails">${images.map((src, i) => `<button type="button" class="gallery-thumbnail${i === 0 ? " active" : ""}" data-src="${src}" data-index="${i}"><img src="${src}" alt="切換至 ${title} ${i + 1}"></button>`).join("")}</div>${credit ? `<p class="gallery-credit">${credit}</p>` : ""}`;
    const mainImage = gallery.querySelector(".gallery-main-image");
    gallery.querySelectorAll(".gallery-thumbnail").forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            mainImage.src = thumbnail.dataset.src;
            mainImage.alt = `${title} ${Number(thumbnail.dataset.index) + 1}`;
            gallery.querySelectorAll(".gallery-thumbnail").forEach((item) => item.classList.remove("active"));
            thumbnail.classList.add("active");
        });
    });
});
