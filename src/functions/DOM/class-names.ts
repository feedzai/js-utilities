/* istanbul ignore file */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
interface ClassDictionary {
  [id: string]: any;
}
type ClassArray = Array<ClassValue>;
type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;

function parseValues<T>(args: T | any): string {
  let result = "";

  if (typeof args === "string" || typeof args === "number") {
    result = result + args;
  }
  // proceeds to handle objects and arrays.
  else if (typeof args === "object") {
    if (Array.isArray(args)) {
      for (const element of args) {
        if (element) {
          const parsedValue = parseValues(element);
          if (parsedValue) {
            result += result ? " " + parsedValue : parsedValue;
          }
        }
      }
    } else {
      // Iterate over the object's keys
      for (const [key, value] of Object.entries(args)) {
        if (value) {
          result += result ? " " + key : key;
        }
      }
    }
  }

  return result;
}

/**
 * A tiny (228 bytes) utility for constructing className strings conditionally.
 *
 * Also serves as a faster & smaller drop-in replacement for the classnames module.
 *
 * @example
 *
 * // Strings (variadic)
 * classNames('foo', true && 'bar', 'baz');
 * // 'foo bar baz'
 *
 * // Objects
 * classNames({ foo:true, bar:false, baz:isTrue() });
 * // 'foo baz'
 *
 * // Objects (variadic)
 * classNames({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
 * // 'foo --foobar'
 *
 * // Arrays
 * classNames(['foo', 0, false, 'bar']);
 * // 'foo bar'
 *
 * // Arrays (variadic)
 * classNames(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
 * // 'foo bar baz hello there'
 *
 * // Kitchen sink (with nesting)
 * classNames('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
 * // 'foo bar hello world cya'
 *
 * // Dynamic classnames with computed keys
 * const btnType = "primary";
 * classNames({ [`btn-${btnType}`]: true });
 * // 'btn-primary'
 *
 * @returns {string}
 */
export function classNames(...classes: ClassValue[]): string {
  let str = "";

  for (const classValue of classes) {
    const val = parseValues(classValue);

    if (val) {
      str += str ? " " + val : val;
    }
  }

  return str;
}
