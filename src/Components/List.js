import React, { useState } from "react";

function List() {
  const list = useState(() => {
    const l = [];
    for (var i = 1; i < 2; i++) l.push(<li>{i}</li>);
    return l;
  });

  const jsx = <div>{list}</div>;
  return jsx;
}

export default List;
