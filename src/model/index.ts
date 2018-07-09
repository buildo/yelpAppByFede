/*

You may write here any type that you want to re-use in you application.

ex:

export type Foo = {
  bar: number
}

and in any file:

import { Foo } from 'model'

const foo: Foo = { bar: 5 }

*/

export type FormFields = 'place' | 'distance';

export type FormPlaceholders = { [key in FormFields]: string };

export default undefined;
