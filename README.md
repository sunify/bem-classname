# bem-classname

Simple function for generating bem-like classNames

It takes from 1 to 3 arguments — block, element and modifiers and generates classNames like ```block__element```, ```block__element block__element--mod``` etc.

## Examples

```es6
import bemClassName from 'bem-classname';

bemClassName('block'); // "block"
bemClassName('block', 'element'); // "block__element"
bemClassName('block', ['awesome']); // "block block--awesome"
bemClassName('block', {
  awesome: true
}); // "block block--awesome"
bemClassName('block', 'element', ['awesome']); // block__element block__element--awesome
```

## Partial application
Convenient to use partial function application in React component for example:
```es6
import React from 'react';
import bemClassName from 'bem-classname';

class SomeComp {

  static propTypes = {
    items: React.PropTypes.array
  };

  constructor() {
    this.className = bemClassName.bind(null, this.constructor.name);
  }

  render() {
    const { className } = this;
    return (
      <div className={className()}>
        <h2 className={className('title')}>Title</h2>
        <ul className={className('list')}>
          {this.props.items.map((item) => (
            <li className={className('item', {awesome: item.isAwesome})}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}
```
