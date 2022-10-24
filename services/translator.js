import { TranslatorRepository } from 'repositories';

export class TranslatorService {

  static translate = async (text) => {
    const repository = new TranslatorRepository();
    return repository.translate(text);
  };

}