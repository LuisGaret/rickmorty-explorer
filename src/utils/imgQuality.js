export const imgQuality = () => {

const type = navigator.connection?.effectiveType || '4g';

const qualitys = {
    "slow-2g": "webp",
    "2g": "webp",
    "3g": "webp",
    "4g": "jpg"
}
return qualitys[type] || "jpg";

}
