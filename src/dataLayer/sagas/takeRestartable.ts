import { spawn, take, fork, ActionPattern } from 'redux-saga/effects';
import { Saga } from '@redux-saga/types';

export function* takeRestartable(pattern: ActionPattern, saga: Saga) {
    return yield fork(function* sagaWrapper() {
        for (;;) {
            try {
                const action = yield take(pattern);
                yield spawn(saga, action);
            } catch (error) {
                console.error(error);
            }
        }
    });
}
