import { store } from '../../index.js';

export function UpdateAvatar(newUsername) {
    store.dispatch({
        type: 'UpdateAvatar',
        payload: {
            accountAvatar: newUsername
        }
    });
}