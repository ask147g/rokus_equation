import React from "react";

class Source extends React.Component {

  render() {
  return (
    <>
      Начальная активность, Ки: <input name="A0" value="8200"></input>
      Дата начальной активности: <input type="date" name="date0" value="2011-02-15"></input>
      Дата расчета: <input type="date" name="date" value="2019-05-15"></input>
    </>
  )
}
}

export default Source;