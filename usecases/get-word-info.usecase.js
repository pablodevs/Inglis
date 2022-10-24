import { WordRepository } from 'repositories';
import { TranslatorService } from 'services';

export class GetWordInfoUseCase {

  #mapResponse = async (response) => ({
    ...response,
    pronunciation: !response.pronunciation ? '' : typeof response.pronunciation === 'string' ? response.pronunciation : response.pronunciation.all,
    translation: await TranslatorService.translate(response.word)
  });

  execute = async (word) => {
    const repository = new WordRepository();
    let response = await repository.getWordInfo(word);
    response &&= await this.#mapResponse(response);
    return response;
  };

}