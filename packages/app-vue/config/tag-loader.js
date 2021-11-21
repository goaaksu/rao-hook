module.exports = function loader(source) {
  // taro 内部有一组转换, jsx 不会被转掉, 这里手动转一下
  // 基本就是把组件换成 taro-${tag.toLowercase()}
  const matchStartTag = /<(View|Text|Input|Image|TextArea)/gm;
  const matchEndTag = /<\/(View|Text|Input|Image|TextArea)>/gm;
  function replacer(match, tag) {
    return match.replace(tag, 'taro-' + tag.toLocaleLowerCase());
  }
  source = source.replace(matchStartTag, replacer);
  source = source.replace(matchEndTag, replacer);
  return source;
};