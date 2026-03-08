export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://medelalearning.com");
export const SITE_EMAIL = "info@medelalearning.com";
export const CALENDLY_URL = "https://calendly.com/medelalearnings";
export const WHATSAPP_URL = "https://chat.whatsapp.com/IIZ3pwcrKgjEvy7nK7cTOQ";
export const LOGO_URL = "https://assets.ycodeapp.com/assets/app95680/Images/published/medela_block_logo_white_bg-removebg-preview-twjjmz7hcs.webp";
export const ASSET_BASE = "https://assets.ycodeapp.com/assets/app95680/images/published";

export const SOCIALS = {
  medela: {
    instagram: "https://www.instagram.com/medelalearning/",
    facebook: "https://www.facebook.com/medelalearning",
    tiktok: "https://www.tiktok.com/@medelalearning",
  },
  aldeia: {
    instagram: "https://www.instagram.com/aldeia_parent_community/",
  },
};
