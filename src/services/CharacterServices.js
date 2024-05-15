import { api } from './../api/config.js';

export default class CharacterServices {
    static async getAllCharacter(page, status, name) {
        const params = {
            page,
            status,
            name
        }
        return api.get('/character', {
            params
        });
    }

    static async getOneCharacter(id) {
        return api.get('/character/' + id);
    }
}
