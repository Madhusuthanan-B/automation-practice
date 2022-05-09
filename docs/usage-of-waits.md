### Dynamic wait - waitUntil()

 - Use this there is intermittent loading issues
 - Wait until a browser title get changed
 - Wait util a web element state is changed
   - isDisplayed()
   - isEnabled()
   - isClickable()
 - When a field takes time to load (Due to async calls)

```ts
 $(selector).waitUntil(condition, {maxThresholdTime, timeoutMsg, retryInterval});
```

#### Example
```ts

const maximumWaitTime = 20000;
const howOftenIShouldRetry = 500;
await browser.waitUntil(async function() {
    return await browser.getTitle() === 'foobar'
}, 
{timeout: maximumWaitTime, 
interval: howOftenIShouldRetry, 
timeoutMsg: 'Failed loading web page'
});
```
