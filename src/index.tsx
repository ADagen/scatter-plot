import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.css';

interface ITest {
    f: number;
}

const check: ITest = {
    f: 123,
};

class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

const animal = new Animal('Betty');
animal.move(5);

console.log('It works', check.f);

ReactDOM.render(<App />, document.getElementsByClassName('app')[0]);
