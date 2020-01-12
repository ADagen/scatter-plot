import { spawn, take, fork, ActionPattern } from 'redux-saga/effects';
import { Saga } from '@redux-saga/types';

/**
 * Хелпер, запускающий саги в detached-режиме.
 * Аналог fork-takeEvery, но используя преимущества spawn для сервер-сайд рендера.
 */
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
