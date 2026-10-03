export type LifeAtGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet: string;
  sizes: string;
  objectPosition?: "center top" | "center center";
};

export type LifeAtGallerySlide = {
  main: LifeAtGalleryImage;
  thumb: LifeAtGalleryImage;
};

const MAIN_SIZES =
  "(min-width: 1440px) max(calc(min(100vw, 1360px) - 80px), 1px), (min-width: 810px) and (max-width: 1119.98px) max(calc(min(100vw, 1360px) - 120px), 1px), (min-width: 1120px) and (max-width: 1439.98px) max(calc(min(100vw, 1360px) - 80px), 1px), (max-width: 809.98px) max(calc(min(100vw, 1360px) - 32px), 1px)";

const THUMB_SIZES_DESKTOP =
  "(min-width: 1440px) max(550px, 135px), (min-width: 1120px) and (max-width: 1439.98px) max(550px, 135px), (min-width: 810px) and (max-width: 1119.98px) max(550px, 135px), (max-width: 809.98px) max(305.5556px, 60px)";

const THUMB_SIZES_STRIP =
  "(min-width: 1440px) max(max(calc(min(100vw, 1360px) - 80px), 1px), 135px), (min-width: 810px) and (max-width: 1119.98px) max(max(calc(min(100vw, 1360px) - 120px), 1px), 135px), (min-width: 1120px) and (max-width: 1439.98px) max(max(calc(min(100vw, 1360px) - 80px), 1px), 135px), (max-width: 809.98px) max(max(calc(min(100vw, 1360px) - 32px), 1px), 60px)";

export const LIFE_AT_GALLERY_SLIDES: LifeAtGallerySlide[] = [
  {
    main: {
      src: "/assets/uLvCDBGDgJuXlBc02Sgs7lIoEA-f80a055cc8.jpg",
      alt: "Team at the beach at sunset",
      width: 4032,
      height: 2068,
      srcSet:
        "/assets/uLvCDBGDgJuXlBc02Sgs7lIoEA-0705111f31.jpg 512w,/assets/uLvCDBGDgJuXlBc02Sgs7lIoEA-b16488c8a7.jpg 1024w,/assets/uLvCDBGDgJuXlBc02Sgs7lIoEA-98ef29e85a.jpg 2048w,/assets/uLvCDBGDgJuXlBc02Sgs7lIoEA-f80a055cc8.jpg 4032w",
      sizes: MAIN_SIZES,
      objectPosition: "center top",
    },
    thumb: {
      src: "/assets/f6sa5JsrOWeeyxlroKQ5WlteA-c989faf014.jpg",
      alt: "Team at the beach at sunset",
      width: 4032,
      height: 3024,
      srcSet:
        "/assets/f6sa5JsrOWeeyxlroKQ5WlteA-34c2bd0a6c.jpg 512w,/assets/f6sa5JsrOWeeyxlroKQ5WlteA-24d9d3b5ad.jpg 1024w,/assets/f6sa5JsrOWeeyxlroKQ5WlteA-d60b93d844.jpg 2048w,/assets/f6sa5JsrOWeeyxlroKQ5WlteA-c989faf014.jpg 4032w",
      sizes: THUMB_SIZES_DESKTOP,
    },
  },
  {
    main: {
      src: "/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-be366913d7.jpg",
      alt: "Team on the beach",
      width: 4000,
      height: 1848,
      srcSet:
        "/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-d956429399.jpg 512w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-c8a0cc3537.jpg 1024w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-5c51ba9550.jpg 2048w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-be366913d7.jpg 4000w",
      sizes: MAIN_SIZES,
      objectPosition: "center top",
    },
    thumb: {
      src: "/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-be366913d7.jpg",
      alt: "Team on the beach",
      width: 4000,
      height: 1848,
      srcSet:
        "/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-d956429399.jpg 512w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-c8a0cc3537.jpg 1024w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-5c51ba9550.jpg 2048w,/assets/7WSNd0dMiHGFWMyWDF49uAXvP7s-be366913d7.jpg 4000w",
      sizes: THUMB_SIZES_STRIP,
    },
  },
  {
    main: {
      src: "/assets/NPdyNaU90FL5KCwvQYpVwygk0yI-d5bd927102.jpg",
      alt: "Team gathering indoors",
      width: 4032,
      height: 2434,
      srcSet:
        "/assets/NPdyNaU90FL5KCwvQYpVwygk0yI-24bf1213f6.jpg 512w,/assets/NPdyNaU90FL5KCwvQYpVwygk0yI-2c46e27772.jpg 1024w,/assets/NPdyNaU90FL5KCwvQYpVwygk0yI-ddd7ee7814.jpg 2048w,/assets/NPdyNaU90FL5KCwvQYpVwygk0yI-d5bd927102.jpg 4032w",
      sizes: MAIN_SIZES,
      objectPosition: "center top",
    },
    thumb: {
      src: "/assets/OgXX8FBM8K7bSvlrC8JvZJE5Ec-83a51c5bfb.jpg",
      alt: "Team gathering indoors",
      width: 4032,
      height: 3024,
      srcSet:
        "/assets/OgXX8FBM8K7bSvlrC8JvZJE5Ec-2615d7390c.jpg 512w,/assets/OgXX8FBM8K7bSvlrC8JvZJE5Ec-38c95f718f.jpg 1024w,/assets/OgXX8FBM8K7bSvlrC8JvZJE5Ec-c08187f08a.jpg 2048w,/assets/OgXX8FBM8K7bSvlrC8JvZJE5Ec-83a51c5bfb.jpg 4032w",
      sizes: THUMB_SIZES_DESKTOP,
    },
  },
  {
    main: {
      src: "/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-33fef744bd.jpg",
      alt: "Team watching a presentation",
      width: 4000,
      height: 3000,
      srcSet:
        "/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-50328f9983.jpg 512w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-41e265faa2.jpg 1024w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-26495cc6b0.jpg 2048w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-33fef744bd.jpg 4000w",
      sizes: MAIN_SIZES,
      objectPosition: "center center",
    },
    thumb: {
      src: "/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-33fef744bd.jpg",
      alt: "Team watching a presentation",
      width: 4000,
      height: 3000,
      srcSet:
        "/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-50328f9983.jpg 512w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-41e265faa2.jpg 1024w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-26495cc6b0.jpg 2048w,/assets/WImwr0c0FYZLlbzr0E0ZSf8qqk-33fef744bd.jpg 4000w",
      sizes: THUMB_SIZES_STRIP,
    },
  },
];
