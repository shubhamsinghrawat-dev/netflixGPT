export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI;
export const PROFILEIMG = "https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e";

export const api_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`
    }
  };

export const SUPPORTED_LANGUAGES = [
  {  identifier: "en",  name: "English" },
  {  identifier: "hindi",  name: "Hindi" },
  {  identifier: "spanish",  name: "Spanish" },
  {  identifier: "french",  name: "French" },
  {  identifier: "german",  name: "German" },
  {  identifier: "chinese",  name: "Chinese" },
]

export const GPT_MODE_IMG="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0"