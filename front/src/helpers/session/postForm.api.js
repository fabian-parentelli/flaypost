import { apiFetch } from '../apiFetch.api.js';

const postFormApi = async (form) => {

    return await apiFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(form),
    });

};

export { postFormApi };