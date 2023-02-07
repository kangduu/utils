### Date构造函数

##### 语法

```js
new Date(); 

new Date(value);

new Date(dateString);

new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

##### new Date() 

> 新创建的Date对象表示实例化时刻的日期和时间。

##### new Date(value) 

> value : Unix时间戳。
>
> 一个整数值，表示自1970年1月1日00:00:00 UTC 以来的毫秒数，忽略了闰秒。

##### new Date(dateString)

> dateString : 表示日期的字符串值。
>
> 该字符串应该能被 [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 正确方法识别

##### new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])

分别提供日期与时间的每一个成员，当<u>至少提供了年份与月份</u>时，这一形式的 `Date() `返回的 `Date `对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为`1`，其他为`0`）。

 - `year`

   表示年份的整数值。 0到99会被映射至1900年至1999年，其它值代表实际年份。参见 [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#Two_digit_years_map_to_1900_-_1999)。

 - `monthIndex`

   表示月份的整数值，从 0（1月）到 11（12月）。

 - `day` 可选

   表示一个月中的第几天的整数值，从1开始。默认值为1。

 - `hours` 可选

   表示一天中的小时数的整数值 (24小时制)。默认值为0（午夜）。

 - `minutes` 可选

   表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为0。

 - `seconds` 可选

   表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为0。

 - `milliseconds` 可选

   表示一个完整时间的毫秒部分的整数值。默认值为0。

 ##### 注意事项

🔥 **参数**`monthIndex` 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。

🔥 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70)等于new Date(2013, 2, 1, 1, 10)，都表示同一个时间：`2013-03-01T01:10:00`。

🔥 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 `new Date(Date.UTC(...))` 和相同参数。

##### 参考

- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date>