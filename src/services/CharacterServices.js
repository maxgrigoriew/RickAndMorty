import { api } from './../api/config.js';

export default class CharacterServices {
    static async getAllCharacter(params) {
        console.log(params);
        return api.get('/character/', {
            params
        });
    }
}
