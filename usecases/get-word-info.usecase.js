import { WordRepository } from 'repository/word.repository';

export class GetWordInfoUseCase {

  #mapResponse = (response) => ({
    ...response,
    pronunciation: !response.pronunciation ? '' : typeof response.pronunciation === 'string' ? response.pronunciation : response.pronunciation.all
  });

  execute = async (word) => {
    const repository = new WordRepository();
    let response = await repository.getWordInfo(word);
    response &&= this.#mapResponse(response);
    return response;
  };

}