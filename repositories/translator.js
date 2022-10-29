import axios from 'axios';
import config from 'config/translator';
const { url } = config;

export class TranslatorRepository {

  translate = async (text, source_lang = 'EN', target_lang = 'ES') => {
    try {
      const params = new URLSearchParams({ text, source_lang, target_lang });
      const { data } = await axios.get(`${url}?${params}`);
      return data;
    } catch (error) {
      console.error(`Translation error. ${error}`);
      return '';
    }
  };

}