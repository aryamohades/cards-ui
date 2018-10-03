export const FIRST_EDITION_SYMBOL = 'https://res.cloudinary.com/dqhs5nw7b/image/upload/v1532651301/cards/symbols/1st_edition_english.png';
export const POKEMON_TCG_LOGO = 'https://res.cloudinary.com/dqhs5nw7b/image/upload/v1532939279/cards/misc/pokemon_tcg_logo.png';

export const ALL_RARITIES = [
  {
    type: 'none'
  },
  {
    type: 'common'
  },
  {
    type: 'uncommon'
  },
  {
    type: 'rare'
  },
  {
    type: 'holo rare'
  },
  {
    type: 'ultra rare'
  },
  {
    type: 'secret rare'
  }
];

export const DEFAULT_SET_SORT = 'Number';
export const DEFAULT_CARD_SORT = 'Release';

export const SET_SORT_OPTIONS = [
  'Number',
  'Name',
  'Rarity'
];

export const CARD_SORT_OPTIONS = [
  'Release',
  'Name',
  'Rarity'
];

export const DEFAULT_LOGIN_COMPONENT = 'account';
export const DEFAULT_REGISTER_COMPONENT = 'account';
export const DEFAULT_ERROR_MESSAGE = 'Something went wrong';
export const CONFIRM_EMAIL_SUCCESS_MESSSAGE = (email) => (
  `Confirmed new email address: ${email}`
);

export const API_LOGIN = '/login';
export const API_REGISTER = '/register';
export const API_WISHLIST = '/account/wishlist';
export const API_COLLECTION = '/account/collection';
export const API_CONTACT = '/contact';
export const API_FORGOT_PASSWORD = '/password/forgot';
export const API_RESET_PASSWORD = '/password/reset';
export const API_CHANGE_PASSWORD = '/password/change';
export const API_CHANGE_EMAIL = '/email/change';
export const API_CONFIRM_EMAIL = '/email/confirm';
