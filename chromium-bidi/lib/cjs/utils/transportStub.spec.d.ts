/**
 * Copyright 2021 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { SinonSpy } from 'sinon';
import { ITransport } from './transport.js';
declare type TypedSpy<T extends (...args: any[]) => unknown> = SinonSpy<Parameters<T>, ReturnType<T>>;
export declare class StubTransport implements ITransport {
    #private;
    setOnMessage: TypedSpy<ITransport['setOnMessage']>;
    sendMessage: TypedSpy<ITransport['sendMessage']>;
    close: TypedSpy<ITransport['close']>;
    emulateIncomingMessage(messageObject: unknown): Promise<void>;
    constructor();
}
export {};