import axios from 'axios';
import config from 'config/translator';
const { url, authKey } = config;

export class TranslatorRepository {

  #commonOptions = {
    headers: {
      Authorization: `DeepL-Auth-Key ${authKey}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  translate = async (text, source_lang = 'EN', target_lang = 'ES') => {
    try {
      const body = { text, source_lang, target_lang };
      const { data } = await axios.post(url, body, this.#commonOptions);
      return data.translations[0].text;
    } catch (error) {
      console.error(`Translation error. ${error}`);
      return '';
    }
  };

}